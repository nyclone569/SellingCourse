import { authApi as api } from "../config/api"

export const authService = {
    login(data){
        return api.post(`/login/`, data, {
            headers: {
            'Accept': 'application/json'
        }
        })
    },
    refreshToken(data) {
        return api.post(`/auth/refresh-token`, data, {
            headers: {
                'Accept': 'application/json'
            }
        })
    }
}