import React, { useMemo, useState } from 'react'
import { generatePath, Link, useParams, useSearchParams } from 'react-router-dom'
import { courseService } from '../../services/course'
import { PATH } from '../../config/path'
import { currency } from '../../utils/currency'
import { useFetch } from '../../hooks/useFetch'
import CourseCard from '../../components/courseCard'
import { useScrollTop } from '../../hooks/useScrollTop'
import Skeleton from '../../components/Skeleton'
import { Accordion } from '../../components/Accordion'
import moment from 'moment'
import { Teacher } from '@/components/Teacher'
import Page404 from '../404'
import { Modal } from '@/components/Modal'

export default function CourseDetailPage() {
    const { id } = useParams()
    const [isOpenVideoModal, setIsOpenVideoModal] = useState(false)

    useScrollTop([id])
    const {data: detail, loading} = useFetch(() => courseService.getCourseDetail(id), [id])

    const {data: related} = useFetch(() => courseService.getRelated(id), [id])
    
    const {openingTime, registerPath} = useMemo(() => {
        if(detail){
            const registerPath = generatePath(PATH.courseRegister, { slug: detail.data.slug, id: detail.data.id })
            const openingTime = moment(detail.opening_time).format('DD/MM/YYYY')
            return {
                registerPath, openingTime
            }
        }
        return {}
    }, [detail])

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

    if(!detail) return <Page404 />  

    return (
        <main id="main">
            <div className="course-detail">
                <section className="banner style2" style={{ '--background': detail.data.template_color_banner || "#cde6fb" }}>
                    <div className="container">
                        <div className="info">
                            <h1>{detail.data.title}</h1>
                            <div className="row">
                                <div className="date">
                                    <strong>Khai giảng:</strong> {openingTime}
                                </div>
                                <div className="time">
                                    <strong>Thời lượng:</strong> {detail.data.count_video} buổi
                                </div>
                            </div>
                            <Link
                                className="btn white round"
                                style={{ '--color-btn': detail.data.template_color_btn ||"#70b6f1" }}
                                to={registerPath}
                            >
                                đăng ký
                            </Link>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="container">
                            <div className="video" onClick={() => setIsOpenVideoModal(true)}>
                                <div className="icon">
                                    <img src="/img/play-icon-white.png" alt="" />
                                </div>{" "}
                                <span>giới thiệu</span>
                            </div>
                            <div className="money">{currency(detail.data.money)} VND</div>
                        </div>
                    </div>
                    <Modal visible={isOpenVideoModal} maskCloseable onCancel={() => setIsOpenVideoModal(false)}>
                    <iframe width="800px" height="450px" src="https://www.youtube.com/embed/m7FlLehvM2A?si=EuY8EJUWxJMn0geI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Modal>
                </section>
                <section className="section-2">
                    <div className="container">
                        <p className="des">{detail.data.long_description}</p>
                        <h2 className="title">giới thiệu về khóa học</h2>
                        <div className="cover">
                            <img src="/img/course-detail-img.png" alt="" />
                        </div>
                        <h3 className="title">nội dung khóa học</h3>
                        <Accordion.Group>
                            {
                                detail.data.content.map((e, i) => <Accordion date={i+1} key={i} {...e}>{e.content}</Accordion>)
                            }
                        </Accordion.Group>
                        <h3 className="title">yêu cầu cần có</h3>
                        <div className="row row-check">
                            { detail.data.required.map((e, i) => <div key={i} className="col-md-6">{e.content}</div>)}                            
                        </div>
                        <h3 className="title">hình thức học</h3>
                        <div className="row row-check">
                            { detail.data.benefits.map((e, i) => <div key={i} className="col-md-6">{e.content}</div>)}                       
                        </div>
                        <h3 className="title">
                            <div className="date-start">lịch học</div>
                            <div className="sub">
                                *Lịch học và thời gian có thể thống nhất lại theo số đông học viên.
                            </div>
                        </h3>
                        <p>
                            <strong>Ngày bắt đầu: </strong> {openingTime} <br />
                            <strong>Thời gian học: </strong> {detail.data.schedule}
                        </p>
                        <h3 className="title">Người dạy</h3>
                        <div className="teaches">
                            <Teacher {...detail.data.teacher}/>
                        </div>
                        {
                            detail.data.mentor.length > 0 && <>
                                <h3 className="title">Người hướng dẫn</h3>
                                <div className="teaches">
                                    {
                                        detail.data.mentor.map(e => <Teacher key={e.id} {...e}/>)
                                    }
                                </div>
                            </>
                        }
                        <div className="bottom">
                            <div className="user">
                                <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
                            </div>
                            <Link className="btn main btn-register round" to={registerPath}>đăng ký</Link>
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
