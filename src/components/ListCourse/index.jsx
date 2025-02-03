import React, { useEffect, useState } from 'react'
import { courseService } from '../../services/course'
import CourseCard, { CourseCardLoading } from '../courseCard'
import Skeleton from '../Skeleton'

export default function ListCourse() {
    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        setLoading(true)
        courseService.getCourse()
        .then(res => res.json())
        .then(data => {
            setCourses(data.data)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    return (
        <section className="section-1">
            <div className="container">
                <h2 className="main-title">KHÓA HỌC SPACEDEV</h2>
                <p className="top-des">
                    Cho dù bạn muốn tìm kiếm công việc, khởi nghiệp, phát triển hoạt động
                    kinh doanh hay chỉ đơn giản là muốn khám phá thế giới, hãy chọn lộ
                    trình học tập mà bạn muốn và bắt đầu câu chuyện thành công của bạn.
                </p>
                <div className="textbox" style={{ marginTop: 100 }}>
                    <h3 className="sub-title">KHÓA HỌC</h3>
                    <h2 className="main-title">OFFLINE</h2>
                </div>
                <div className="list row">
                    {
                        loading ? Array.from(Array(6)).map((_, i) => <CourseCardLoading key={i}/>) :
                        courses.map(e => <CourseCard key={e.id} {...e} />)                        
                    }
                </div>
            </div>
        </section>
    )
}
