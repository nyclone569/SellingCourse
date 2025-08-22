import { userApi } from "../config/api"

export const userService = {
    signup(data) {
        return userApi.post(`/api/register`, data)
    },
    resendEmail(data){
        return userApi.post(`/api/resend-email`, data)
    },
    getProfile(){
        return userApi.get(`/api`)
    },
    updateInfo(data){
        return userApi.patch(`/api`, data)
    },
    sendEmailResetPassword(data){
        return userApi.post(`/api/reset-password`, data)
    },
    resetPasswordByCode(data){
        return userApi.post(`/api/change-password-by-code`, data)
    }
}