import { organizationApi as api } from "../config/api"

export const organizationService = {
    contact(data){
        return api.post(`/api/contact`, data)
    }
}