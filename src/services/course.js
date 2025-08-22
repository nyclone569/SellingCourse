import { courseApi as api } from "../config/api"

export const courseService = {
    getCourse: (query = '') => {
        return api.get(`/api/courses${query}`)
    },

    getCourseDetail(id) {
        return api.get(`/api/courses/${id}`)
    },

    getRelated(id) {
        return api.get(`/api/courses/related/${id}`)
    },
    getMyCourse(){
        return api.get(`/api/courses/my-course`)
    },
    register(id, data){
        return api.post(`/api/courses/register/${id}`, data)
    }
}