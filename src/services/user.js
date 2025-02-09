import { api, USER_API } from "../config/api"

export const userService = {
    signup(data) {
        return api.post(`${USER_API}/register`, data)
    },
    resendEmail(data){
        return api.post(`${USER_API}/resend-email`, data)
    },
    getProfile(){
        return api.get(`${USER_API}`)
    },
    updateInfo(data){
        return api.patch(`${USER_API}`, data)
    }
}