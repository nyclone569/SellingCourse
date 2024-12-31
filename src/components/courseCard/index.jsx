import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { PATH } from '../../config/path'

export default function CourseCard({ money, thumbnailUrl, long_description, short_description, title, slug, id }) {
    const path = generatePath(PATH.courseDetail, { slug, id })
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={path}>
                    <img src={thumbnailUrl} alt="" />
                </Link>
                <div className="info">
                    <Link className="name" to={path}>
                        {title}
                    </Link>
                    <p className="des">{short_description}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trương Đăng Nghĩa</div>
                    </div>
                    <a href="/register.html" className="register-btn">
                        {money} đ
                    </a>
                </div>
            </div>
        </div>
    )
}
