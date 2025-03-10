import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { PATH } from '../../config/path'
import Skeleton from '../Skeleton'

export default function CourseCard({ money, thumbnailUrl, long_description, short_description, title, slug, id }) {
    const path = generatePath(PATH.courseDetail, { slug, id })
    const registerPath = generatePath(PATH.courseRegister, { slug, id })
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={path}>
                    <img src={thumbnailUrl} onError={(e) => e.target.src="/img/course/khoa-hoc-react-js-javascript-sd1.jpg"} alt="" />
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
                            <img src="/img/teacher.png" alt="" />
                        </div>
                        <div className="name">Đặng Thuyền Vương</div>
                    </div>
                    <Link to={registerPath} className="register-btn">
                        {money} đ
                    </Link>
                </div>
            </div>
        </div>
    )
}

export const CourseCardLoading = () => {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to="#">
                    {/* <img src={thumbnailUrl} alt="" /> */}
                    <Skeleton height={310}/>
                </Link>
                <div className="info">
                    <Link className="name" to="#">
                        {/* {title} */}
                        <Skeleton height={30}/>
                    </Link>
                    <p className="des">
                    <Skeleton height={80}/>
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            {/* <img src="/img/avt.png" alt="" /> */}
                            <Skeleton shape="circle" height={36} width={36}/>
                        </div>
                        <div className="name">
                            <Skeleton height={34} width={150}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}