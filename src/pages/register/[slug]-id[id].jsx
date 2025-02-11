import React, { useEffect, useState } from 'react'
import { regexp, required, validate } from '../../utils/validate';
import Field from '../../components/Field';
import { useForm } from '../../hooks/useForm';
import { Link, redirect, useLocation, useNavigate, useParams } from 'react-router-dom';
import { courseService } from '../../services/course';
import { currency } from '../../utils/currency';
import { useFetch } from '../../hooks/useFetch';
import Page404 from '../404';
import { Select } from '@/components/Select';
import { Checkbox } from '@/components/Checkbox';
import { useAuth } from '@/components/AuthContext';
import { message } from 'antd';
import { PATH } from '@/config/path';
import { useAsync } from '@/hooks/useAsync';
import Button from '@/components/Button';
import { handleError } from '@/utils/handleError';

export default function RegisterPage() {

    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const {data, loading} = useFetch(() => courseService.getCourseDetail(id))
    const { loading: registerLoading, excute: courseRegisterService } = useAsync(courseService.register)

    useEffect(() => {
        if(!user){
            message.warning('Vui lòng đăng nhập trước khi đăng kí khóa học!')
            navigate(PATH.signin, {state: {redirect: pathname}})
        }
    }, [user])
    // const [detail, setDetail] = useState(() => {
    //     return courseService.getCourseDetail(parseInt(id))
    // })
    // console.log(useParams())
    const { validate, register, values } = useForm({
        name: [
            required('Xin vui lòng nhập họ và tên.')
        ],
        email: [
            required(),
            regexp('email', 'Xin vui lòng điền đúng định dạng email.')
        ],
        phone: [
            required(),
            regexp('phone')
        ],
        fb: [
            required(),
            regexp(/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/, 'Xin vui lòng nhập đúng website facebook của bạn.')
        ],
        payment:[
            required(),

        ]
    }, {
        email: user?.username,
        name: user?.name,
        fb: user?.fb,
        phone: user?.phone
    })
    const [isSuccess, setIsSuccess] = useState(false)

    const onSubmit = async () => {
        try {
            if (validate()) {
                await courseRegisterService(id, values)
                setIsSuccess(true)
            } else {
                console.log('validate error')
            }
        } catch(err){
            handleError(err)
        }
    }
    if(loading) return null

    const {data: detail} = data

    if(!detail) return <Page404/>
    return (
        <main id="main">
            {
                isSuccess ? (
                    <div className="register-success flex flex-col items-center gap-10 text-center max-w-2xl" style={{ margin: '40px auto'}}>
                        <div className="contain">
                            <div className="main-title">Đăng ký thành công</div>
                            <p>
                                <strong>
                                    Chào mừng {values.name} đã trở thành thành viên mới của Spacedev Team.
                                </strong>
                                <br />
                                Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ
                                chủ động liên lạc với bạn thông qua facebook hoặc số điện thoại của bạn.
                            </p>
                        </div>
                        <Link to={PATH.profile.course} className="btn main rect">
                            Về khóa học của tôi
                        </Link>
                    </div>
                ) : (
                    <section className="register-course">
                        <div className="container">
                            <div className="wrap container">
                                <div className="main-sub-title">ĐĂNG KÝ</div>
                                <h1 className="main-title">{detail.title} </h1>
                                <div className="main-info">
                                    <div className="date">
                                        <strong>Khai giảng:</strong> 15/11/2020
                                    </div>
                                    <div className="time">
                                        <strong>Thời lượng:</strong> 18 buổi
                                    </div>
                                    <div className="time">
                                        <strong>Học phí:</strong> {currency(detail.money)} VND
                                    </div>
                                </div>
                                <div className="form">
                                    <Field
                                        label="Họ và tên"
                                        placeholder="Họ và tên bạn"
                                        required
                                        {...register('name')}
                                    />
                                    <Field
                                        label="Số điện thoại"
                                        placeholder="Số điện thoại"
                                        required
                                        {...register('phone')}
                                    />
                                    <Field
                                        label="Email" disabled
                                        placeholder="Email của bạn"
                                        required
                                        {...register('email')}
                                    />
                                    <Field
                                        label="URL Facebook"
                                        placeholder="https://facebook.com"
                                        required
                                        {...register('fb')}
                                    />
                                    <Field
                                        {...register('coin')}
                                        label="Sử dụng COIN"                                        
                                        renderInput={(props) => (
                                            <Checkbox {...props}>
                                                Hiện có <strong>300 COIN</strong>
                                            </Checkbox>
                                        )}
                                    />
                                    <Field
                                        label="Hình thức thanh toán"
                                        {...register('payment')}
                                        renderInput={(props) => (
                                            <Select
                                                {...props}
                                                placeholder="Hình thức thanh toán"
                                                options={[
                                                    {value: 'chuyen-khoan', label: 'Chuyển khoản'},
                                                    {value: 'thanh-toan-tien-mat', label: 'Thanh toán tiền mặt'},
                                                    
                                                ]}
                                            />
                                        )}
                                    />
                                    <Field
                                        label="Ý kiến cá nhân"
                                        placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                                        {...register('note')}
                                    />

                                    <Button loading={registerLoading} onClick={onSubmit} className="btn main rect">đăng ký</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
        </main>

    )
}
