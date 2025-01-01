const PROFILE_PATH = '/profile'
const COURSE_PATH = '/course'

export const PATH = {
    home: '/',
    course: COURSE_PATH,
    courseDetail: COURSE_PATH + '/:slug/:id',
    courseRegister: '/register/:slug/:id',
    payment: '/payment',
    contact: '/contact',
    signin: '/signin',
    signup: '/signup',
    resetPassword: '/reset-password',
    profile: {
        index: PROFILE_PATH,
        course: PROFILE_PATH + '/course',
        coin: PROFILE_PATH + '/coin',
        payment: PROFILE_PATH + '/payment',
        project: PROFILE_PATH + '/project',
        viewedCourse: PROFILE_PATH + '/viewed-course'
    }
}