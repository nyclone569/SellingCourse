import axios from "axios"
import { getToken, setToken } from "../utils/token"
import { authService } from "@/services/auth"
export const COURSE_API = import.meta.env.VITE_COURSE_API
export const ORGANIZATION_API = import.meta.env.VITE_ORGANIZATION_API
export const USER_API = import.meta.env.VITE_USER_API
export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API


export const api = axios.create()
api.interceptors.response.use((res) => {
    return res.data
}, async (error) => {
    try {
        if(error.response.status === 403 && error.response.data.error_code === 'TOKEN_EXPIRED'){
            console.log('refresh token')
            //refreshh token
            const token = getToken()
            const res = await authService.refreshToken({
                refreshToken: token.refreshToken
            })
    
            setToken(res.data)

            // restart error api
            return api(error.config)
    
        }
    
    } catch(err){

    }
    throw error
})

api.interceptors.request.use((config) => {
    const token = getToken()
    if(token){
        config.headers['Authorization'] = `Bearer ${token.accessToken}`
    }
    return config
})