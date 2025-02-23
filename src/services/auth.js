import { api, AUTHENTICATION_API } from "../config/api"

export const authService = {
    login(data){
        return api.post(`/api/auth/login`, data)
    },
    refreshToken(data) {
        return api.post(`/api/auth/refresh-token`, data)
    }
}