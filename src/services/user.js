import { userApi } from "../config/api"

export const userService = {
    signup(data) {
        return userApi.post(`/register`, data)
    },
    resendEmail(data){
        return userApi.post(`/resend-email`, data)
    },
    getProfile(){
        return userApi.get(``)
    },
    updateInfo(data){
        return userApi.patch(``, data)
    },
    sendEmailResetPassword(data){
        return userApi.post(`/reset-password`, data)
    },
    resetPasswordByCode(data){
        return userApi.post(`/change-password-by-code`, data)
    }
}