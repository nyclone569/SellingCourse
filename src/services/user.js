import { api, USER_API } from "../config/api"

export const userService = {
    signup(data) {
        return api.post(`/api/user/register`, data)
    },
    resendEmail(data){
        return api.post(`/api/user/resend-email`, data)
    },
    getProfile(){
        return api.get(`/api/user`)
    },
    updateInfo(data){
        return api.patch(`/api/user`, data)
    },
    sendEmailResetPassword(data){
        return api.post(`/api/user/reset-password`, data)
    },
    resetPasswordByCode(data){
        return api.post(`/api/user/change-password-by-code`, data)
    }
}