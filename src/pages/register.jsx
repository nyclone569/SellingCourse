import React, { useState } from 'react'
import { regexp, required, validate } from '../utils/validate';
import Field from '../components/Field';
import { useForm } from '../hooks/useForm';

export default function RegisterPage() {
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
        ]
    })
    const [isSuccess, setIsSuccess] = useState(false)

    const onSubmit = () => {

        if (validate()) {
            setIsSuccess(true)
        } else {
            console.log('validate error')
        }
    }
    return (
        <main id="main">
            {
                isSuccess ? (
                    <div className="register-success" style={{ margin: '40px auto', width: '570px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '50px' }}>
                        <div className="contain">
                            <div className="main-title">Đăng ký thành công</div>
                            <p>
                                <strong>
                                    Chào mừng {values.name} đã trở thành thành viên mới của Spacedev Team.
                                </strong>{" "}
                                <br />
                                Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ
                                chủ động liên lạc với bạn thông qua facebook hoặc số điện thoại của bạn.
                            </p>
                        </div>
                        <a href="/" className="btn main rect">
                            về trang chủ
                        </a>
                    </div>
                ) : (
                    <section className="register-course">
                        <div className="container">
                            <div className="wrap container">
                                <div className="main-sub-title">ĐĂNG KÝ</div>
                                <h1 className="main-title">Thực chiến Reactjs Advanced </h1>
                                <div className="main-info">
                                    <div className="date">
                                        <strong>Khai giảng:</strong> 15/11/2020
                                    </div>
                                    <div className="time">
                                        <strong>Thời lượng:</strong> 18 buổi
                                    </div>
                                    <div className="time">
                                        <strong>Học phí:</strong> 6,000,000 VND
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
                                        label="Email"
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
                                        label="Sử dụng COIN"
                                        {...register('coin')}
                                        renderInput={(props) => (
                                            <div className="checkcontainer">
                                                Hiện có <strong>300 COIN</strong>
                                                {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                                {/* Cần ít nhất 200 COIN để giảm giá */}
                                                <input type="checkbox" {...props} />
                                                <span className="checkmark" />
                                            </div>
                                        )}
                                    />
                                    <Field
                                        label="Hình thức thanh toán"
                                        {...register('payment')}
                                        renderInput={(props) => (
                                            <div className="select">
                                                <div className="head">Chuyển khoản</div>
                                                <div className="sub">
                                                    <a href="#">Chuyển khoản</a>
                                                    <a href="#">Thanh toán tiền mặt</a>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <Field
                                        label="Ý kiến cá nhân"
                                        placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                                        {...register('note')}
                                    />

                                    <button onClick={onSubmit} className="btn main rect">đăng ký</button>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
        </main>

    )
}
