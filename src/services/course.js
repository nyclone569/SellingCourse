import { api, COURSE_API } from "../config/api"

const courses = [{
    "id": 1,
    "money": 6000000,
    "long_description": "Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa SD Căn Bản. Bạn muốn nâng cao kiến thức và có nhiều cơ hội để ứng tuyển hơn vào vị trí Front-End Developer thì React Js chính là thư viện javascript được quan tâm nhất hiện nay. Khóa React Js tại SD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng dựa trên thực hành dự án thực tế xuyên suốt khóa học.",
    "short_description": "Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS.",
    "slug": "spacedev1-react-js",
    "title": "SD1 React JS",
    "thumbnailUrl": "./img/course/khoa-hoc-react-js-javascript-sd1.jpg"
},
{
    "id": 2,
    "money": 6000000,
    "long_description": "Nếu bạn đã có kiến thức cơ bản về lập trình Website Responsive hoặc đã học qua khóa SD Căn Bản, bạn muốn muốn có nhiều cơ hội để ứng tuyển vào vị trí Front-End Developer thì React JS là thư viện javascript được các công ty yêu cầu nhiều nhất hiện nay. Khóa React JS tại SD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng để đi làm dựa trên thực hành dự án thực tế xuyên suốt khóa học.",
    "short_description": "Khóa học thực chiến dự án thực tế gồm Javascript nâng cao, ES6, JSON, API và React JS.",
    "slug": "spacedev2-react-js",
    "title": "SD2 React JS",
    "thumbnailUrl": "./img/course/khoa-hoc-react-js-javascript-sd2.jpg"
},
{
    "id": 3,
    "money": 4000000,
    "long_description": "Nếu bạn đang theo đuổi nghề Front-End Developer và đã từng học qua HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế, tư duy về animation, cấu trúc thư mục, tối ưu tốc độ wesbite, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học SD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    "short_description": "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    "slug": "spacedev3-web-responsive",
    "title": "SD3 Web Responsive",
    "thumbnailUrl": "./img/course/khoa-hoc-front-end-can-ban-sd1.jpg"
},
{
    "id": 4,
    "money": 4000000,
    "long_description": "Bạn đang là sinh viên, người đi làm hoặc từ ngành khác chuyển qua đang theo đuổi nghề Front-End Developer và đã từng học HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế hoàn chỉnh, tư duy về animation, cấu trúc thư mục dự án, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học SD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    "short_description": "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    "slug": "spacedev4-web-responsive-2",
    "title": "SD4 Web Responsive",
    "thumbnailUrl": "./img/course/khoa-hoc-front-end-can-ban-sd2.jpg"
},
{
    "id": 5,
    "money": 4000000,
    "long_description": "Nếu bạn đang theo đuổi nghề Front-End Developer và đã từng học qua HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế, tư duy về animation, cấu trúc thư mục, tối ưu tốc độ, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học SD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    "short_description": "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    "slug": "spacedev5-can-ban",
    "title": "SD5 Căn Bản",
    "thumbnailUrl": "./img/course/khoa-hoc-front-end-animations-sd.jpg"
},
{
    "id": 6,
    "money": 4000000,
    "long_description": "Nếu bạn đang theo đuổi nghề Front-End Developer và đã từng học qua HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế, tư duy về animation, cấu trúc thư mục, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học SD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    "short_description": "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    "slug": "spacedev6-web-responsive-3",
    "title": "SD6 Web Responsive",
    "thumbnailUrl": "./img/course/khoa-hoc-front-end-can-ban-sd3.jpg"
}]

export const courseService = {
    getCourse: (query = '') => {
        // return courses
        return api.get(`${COURSE_API}/courses${query}`)
    },

    getCourseDetail(id) {
        // return courses.find(e => e.id === id)
        return api.get(`${COURSE_API}/courses/${id}`)
    },

    getRelated(id) {
        // const start = Math.floor(Math.random() * (courses.length -3))
        // return courses.filter(e => e.id !== id).slide(start, start+3)
        return api.get(`${COURSE_API}/courses/related/${id}`)
    },
    getMyCourse(){
        return api.get(`${COURSE_API}/courses/my-course`)
    },
    register(id, data){
        return api.post(`${COURSE_API}/courses/register/${id}`, data)
    }
}