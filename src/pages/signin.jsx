import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { PATH } from '../config/path'
import { useForm } from '../hooks/useForm'
import { regexp, required } from '../utils/validate'
import Field from '../components/Field'
import { useAuth } from '../components/AuthContext'
import Input from '../components/Input'
import { useAsync } from '../hooks/useAsync'
import Button from '../components/Button'

export default function SignInPage() {
    const {login} = useAuth()
    const {loading, excute: loginService} = useAsync(login)
    const navigate = useNavigate()

    const form = useForm({
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
        if (form.validate()) {
            loginService(form.values)
            // navigate(PATH.profile.index)
        }
    }
    return (
        <main id="main">
            <div className="auth">
                <div className="wrap">
                    {/* login-form */}
                    <form className="ct_login" onSubmit={onSubmit}>
                        <h2 className="title">Đăng nhập</h2>

                        <Input {...form.register('username')} className={'mb-5'} placeholder="Email / Số điện thoại"/>

                        <Input {...form.register('password')} className={'mb-5'} placeholder="Mật khẩu" type='password'/>

                        <div className="remember">
                            <label className="btn-remember">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <p>Nhớ mật khẩu</p>
                            </label>
                            <Link to={PATH.resetPassword} className="forget">
                                Quên mật khẩu?
                            </Link>
                        </div>
                        <Button loading={loading} className="btn rect main btn-login">đăng nhập</Button>
                        <div className="text-register">
                            <span>Nếu bạn chưa có tài khoản?</span>{" "}
                            <Link className="link" to={PATH.signup}>
                                Đăng ký
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
