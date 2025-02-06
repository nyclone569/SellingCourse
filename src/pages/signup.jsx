import React from 'react'
import { useAsync } from '../hooks/useAsync'
import { userService } from '../services/user'
import Button from '../components/Button'
import { useForm } from '../hooks/useForm'
import { confirm, minMax, regexp, required } from '../utils/validate'
import styled from 'styled-components'
import { message } from 'antd'

const ErrorText = styled.p`
    color: red;
`

export default function SignUpPage() {
    const { excute: signup, loading } = useAsync(userService.signup)
    const {values, validate, register, errors} = useForm({
        name: [
            required()
        ],
        password: [
            required(),
            minMax(6, 32)
        ],
        confirmPassword: [
            required(),
            confirm('password')
        ],
        username: [
            required(),
            regexp('email')
        ]
    })

    const onSubmit = async () => {
        try {
            if(validate()){
                const res = await signup(values)
            }
        } catch(err){
            if(err?.response?.data?.message){
                message.error(err?.response?.data?.message)
            }
        }
    }
    return (
        <main id="main">
            <div className="auth">
                <div className="wrap">
                    <h2 className="title">Đăng ký</h2>
                    <input type="text" placeholder="Địa chỉ Email" {...register('username')}/>
                    {errors.username && <ErrorText>{errors.username}</ErrorText>}
                    <input placeholder="Họ và tên" {...register('name')}/>
                    {errors.name && <ErrorText>{errors.name}</ErrorText>}
                    <input type="password" placeholder="Mật khẩu" {...register('password')}/>
                    {errors.password && <ErrorText>{errors.password}</ErrorText>}
                    <input type="password" placeholder="Nhập lại mật khẩu" {...register('confirmPassword')}/>
                    {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
                    <p className="policy">
                        Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của
                        Spacedev
                    </p>
                    {/* <button className="btn rect main btn-login">Đăng ký</button> */}
                    <Button onClick={onSubmit} className="btn-login" loading={loading}>Đăng ký</Button>
                </div>
            </div>
        </main>
    )
}
