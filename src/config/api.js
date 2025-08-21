import axios from "axios"
import { getToken, setToken, clearToken } from "../utils/token"
import { authService } from "@/services/auth"
export const COURSE_API = import.meta.env.VITE_COURSE_API
export const ORGANIZATION_API = import.meta.env.VITE_ORGANIZATION_API
export const USER_API = import.meta.env.VITE_USER_API
export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API

// Create separate axios instances for each API
export const courseApi = axios.create({
  baseURL: COURSE_API
})

export const organizationApi = axios.create({
  baseURL: ORGANIZATION_API
})

export const userApi = axios.create({
  baseURL: USER_API
})

export const authApi = axios.create({
  baseURL: AUTHENTICATION_API
})

// Track refresh token requests to prevent infinite loops
let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })
  
  failedQueue = []
}

// Add interceptors to each API instance
const setupInterceptors = (apiInstance) => {
  apiInstance.interceptors.response.use((res) => {
    return res.data
  }, async (error) => {
    const originalRequest = error.config
    
    // Check if error is due to expired token
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      // If we're already trying to refresh the token, queue this request
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject })
        }).then(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token
          return apiInstance(originalRequest)
        }).catch(err => {
          return Promise.reject(err)
        })
      }
      
      // Mark that we're refreshing the token
      isRefreshing = true
      originalRequest._retry = true
      
      try {
        const token = getToken()
        if (token && token.refreshToken) {
          console.log('Refreshing token')
          const res = await authService.refreshToken({
            refreshToken: token.refreshToken
          })
          
          // Save new token
          setToken(res.data)
          
          // Update authorization header for this request
          originalRequest.headers['Authorization'] = `Bearer ${res.data.accessToken}`
          
          // Process queued requests
          processQueue(null, res.data.accessToken)
          
          // Retry the original request
          return apiInstance(originalRequest)
        } else {
          // No refresh token available, clear stored tokens and reject
          clearToken()
          processQueue(new Error('No refresh token available'), null)
          return Promise.reject(new Error('Authentication required'))
        }
      } catch (err) {
        // Refresh token failed, clear stored tokens and reject
        clearToken()
        processQueue(err, null)
        return Promise.reject(new Error('Token refresh failed'))
      } finally {
        isRefreshing = false
      }
    }
    
    return Promise.reject(error)
  })

  apiInstance.interceptors.request.use((config) => {
    const token = getToken()
    if(token && token.accessToken){
      config.headers['Authorization'] = `Bearer ${token.accessToken}`
    }
    return config
  })
}

// Setup interceptors for all API instances
setupInterceptors(courseApi)
setupInterceptors(organizationApi)
setupInterceptors(userApi)
setupInterceptors(authApi)

// Keep the original api instance for backward compatibility
export const api = courseApi