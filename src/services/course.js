import { courseApi as api } from "../config/api"

export const courseService = {
    getCourse: (query = '') => {
        return api.get(`/courses${query}`)
    },

    getCourseDetail(id) {
        return api.get(`/courses/${id}`)
    },

    getRelated(id) {
        return api.get(`/courses/related/${id}`)
    },
    getMyCourse(){
        return api.get(`/courses/my-course`)
    },
    register(id, data){
        return api.post(`/courses/register/${id}`, data)
    }
}