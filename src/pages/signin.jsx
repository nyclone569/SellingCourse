import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { PATH } from '../config/path'
import { useForm } from '../hooks/useForm'
import { regexp, required } from '../utils/validate'
import Field from '../components/Field'

export default function SignInPage({ login }) {
    const navigate = useNavigate()
    const { values, register, validate, errors } = useForm({
        username: [
            required(),
            regexp('email')
        ],
        password: [
            required(),
        ]
    })

    const onSubmit = (ev) => {
        ev.preventDefault()
        if (validate()) {
            login()
            navigate(PATH.profile.index)
        }
    }
    return (
        <main id="main">
            <div className="auth">
                <div className="wrap">
                    {/* login-form */}
                    <form className="ct_login" onSubmit={onSubmit}>
                        <h2 className="title">Đăng nhập</h2>
                        <input placeholder="Email / Số điện thoại" {...register('username')} />
                        {errors.username && <p>{errors.username}</p>}
                        <input placeholder="Mật khẩu" type='password' {...register('password')} />
                        {errors.password && <p>{errors.password}</p>}
                        {/* <input type="text" placeholder="Email / Số điện thoại" />
                        <input type="password" placeholder="Mật khẩu" /> */}
                        <div className="remember">
                            <label className="btn-remember">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <p>Nhớ mật khẩu</p>
                            </label>
                            <a href="./reset-password.html" className="forget">
                                Quên mật khẩu?
                            </a>
                        </div>
                        <button className="btn rect main btn-login">đăng nhập</button>
                        <div className="text-register">
                            <span>Nếu bạn chưa có tài khoản?</span>{" "}
                            <a className="link" href="./signup.html">
                                Đăng ký
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
