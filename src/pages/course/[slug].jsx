import React, { useState } from 'react'
import { generatePath, Link, useParams, useSearchParams } from 'react-router-dom'
import { courseService } from '../../services/course'
import { PATH } from '../../config/path'
import { currency } from '../../utils/currency'
import { useFetch } from '../../hooks/useFetch'
import CourseCard from '../../components/courseCard'
import { useScrollTop } from '../../hooks/useScrollTop'
import Skeleton from '../../components/Skeleton'
import { Accordion } from '../../components/Accordion'

export default function CourseDetailPage() {
    const { id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    useScrollTop([id])
    const {data, loading} = useFetch(() => courseService.getCourseDetail(id), [id])

    const {data: related} = useFetch(() => courseService.getRelated(id), [id])
    // const [detail, setDetail] = useState(() => {
    //     return courseService.getCourseDetail(parseInt(id))
    // })

    if(loading) {
        return <main id="main">
                    <div className="course-detail">
                        <section className="banner style2" style={{ '--background': "#cde6fb" }}>
                            <div className="container">
                                <div className="info">
                                    <h1><Skeleton width={500} height={64}/></h1>
                                    <div className="row">
                                        <div className="date">
                                        <Skeleton width={200} height={24}/>
                                        </div>
                                        <div className="time">
                                        <Skeleton width={200} height={24}/>
                                        </div>
                                    </div>
                                    <Skeleton style={{marginTop: 40}} width={150} height={46}/>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
    }

    const {data: detail} = data

    if(!detail) return <div style={{margin: '100px 0'}}>...Not Found...</div>
    
    const registerPath = generatePath(PATH.courseRegister, { slug: detail.slug, id: detail.id })
    return (
        <main id="main">
            <div className="course-detail">
                <section className="banner style2" style={{ '--background': "#cde6fb" }}>
                    <div className="container">
                        <div className="info">
                            <h1>{detail.title}</h1>
                            <div className="row">
                                <div className="date">
                                    <strong>Khai giảng:</strong> 12/10/2020
                                </div>
                                <div className="time">
                                    <strong>Thời lượng:</strong> 18 buổi
                                </div>
                            </div>
                            <Link
                                className="btn white round"
                                style={{ '--color-btn': "#70b6f1" }}
                                to={registerPath}
                            >
                                đăng ký
                            </Link>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="container">
                            <div className="video">
                                <div className="icon">
                                    <img src="/img/play-icon-white.png" alt="" />
                                </div>{" "}
                                <span>giới thiệu</span>
                            </div>
                            <div className="money">{currency(detail.money)} VND</div>
                        </div>
                    </div>
                </section>
                <section className="section-2">
                    <div className="container">
                        <p className="des">{detail.long_description}</p>
                        <h2 className="title">giới thiệu về khóa học</h2>
                        <div className="cover">
                            <img src="/img/course-detail-img.png" alt="" />
                        </div>
                        <h3 className="title">nội dung khóa học</h3>
                        <Accordion.Group>
                            {
                                detail.content.map((e, i) => <Accordion date={i+1} key={i} {...e}>{e.content}</Accordion>)
                            }
                        </Accordion.Group>
                        <h3 className="title">yêu cầu cần có</h3>
                        <div className="row row-check">
                            <div className="col-md-6">Đã từng học qua HTML, CSS</div>
                            <div className="col-md-6">
                                Cài đặt phần mềm Photoshop, Adobe illustrator, Skype
                            </div>
                        </div>
                        <h3 className="title">hình thức học</h3>
                        <div className="row row-check">
                            <div className="col-md-6">
                                Học offline tại văn phòng, cùng Đăng Nghĩa và 3 đồng nghiệp.
                            </div>
                            <div className="col-md-6">
                                Dạy và thực hành thêm bài tập online thông qua Skype.
                            </div>
                            <div className="col-md-6">
                                Được các mentor và các bạn trong team Spacedev hổ trợ thông qua
                                group Spacedev Facebook hoặc phần mềm điều khiển máy tính.
                            </div>
                            <div className="col-md-6">
                                Thực hành 2 dự án thực tế với sự hướng dẫn của Spacedev Team.
                            </div>
                        </div>
                        <h3 className="title">
                            <div className="date-start">lịch học</div>
                            <div className="sub">
                                *Lịch học và thời gian có thể thống nhất lại theo số đông học viên.
                            </div>
                        </h3>
                        <p>
                            <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
                            <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ
                            12h-15h, Chủ nhật từ 15h-18h
                        </p>
                        <h3 className="title">Người dạy</h3>
                        <div className="teaches">
                            <div className="teacher">
                                <div className="avatar">
                                    <img src="/img/avt.png" alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">Trương Đăng Nghĩa</div>
                                    <div className="title">
                                        Founder Spacedev &amp; Fullstack developer
                                    </div>
                                    <p className="intro">
                                        My education, career, and even personal life have been molded by
                                        one simple principle; well designed information resonates with
                                        people and can change lives.I have a passion for making
                                        information resonate. It all starts with how people think. With
                                        how humans work. As humans we have learned how to read and write
                                        and while that is incredible, we are also already hard-wired to
                                        do some things a bit more "automatically"
                                    </p>
                                    <p>
                                        <strong>Website:</strong>{" "}
                                        <a href="#">https://github.com/nyclone569</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="user">
                                <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
                            </div>
                            <div className="btn main btn-register round">đăng ký</div>
                            <div className="btn-share btn overlay round btn-icon">
                                <img src="/img/facebook.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-4">
                    <div className="container">
                        <div className="textbox">
                            <h3 className="sub-title">Khóa học</h3>
                            <h2 className="main-title">Liên quan</h2>
                        </div>
                        <div className="list row">
                            {
                                related && related?.data.map(e => <CourseCard key={e.id} {...e}/>)
                            }
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
