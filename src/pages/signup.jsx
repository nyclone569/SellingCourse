import React, { useState } from 'react'
import { useAsync } from '../hooks/useAsync'
import { userService } from '../services/user'
import Button from '../components/Button'
import { useForm } from '../hooks/useForm'
import { confirm, minMax, regexp, required } from '../utils/validate'
import styled from 'styled-components'
import { message } from 'antd'
import Input from '../components/Input'
import { LoadingOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { handleError } from '@/utils/handleError'

const ErrorText = styled.p`
    color: red;
`

export default function SignUpPage() {
    const {loading: resendEmailLoading, excute: resendEmailService} = useAsync(userService.resendEmail)
    const { excute: signupService, loading } = useAsync(userService.signup)
    const [isSignupSuccess, setIsSignupSuccess] = useState(false)
    const {values, validate, register} = useForm({
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
        if(validate()){            
            try {
                await signupService(values)
                setIsSignupSuccess(true)
            } catch(err){
                console.log(err)
                if(err?.response?.data?.message){
                    message.error(err.response.data.message)
                }
            }
        }   
    }

    const onResendEmail = async (ev) => {
        ev.preventDefault()
        try{
            await resendEmailService({
                username: values.username
            })
            message.success('Email kích hoạt đã được gửi lại thành công!')
        } catch(err){
            handleError(err)
        }
    }

    return (
        <main id="main">
            <div className="auth">
                {
                    isSignupSuccess ? (
                        <div className='container wrap flex flex-col text-center gap-10'>
                            <h1 className='text-2x1 font-bold'>Đăng kí tài khoản thành công!</h1>
                            <p>Vui lòng kiểm tra email để kích hoạt. Nếu bạn không nhận được email, vui lòng bấm <span className='font-bold'>"Gửi lại email kích hoạt"</span> bên dưới.</p>
                            <div className='flex justify-center'>
                                <a onClick={onResendEmail} href="#" className={classNames('link flex gap-2', {'opacity-50 pointer-events-none' : resendEmailLoading})}>
                                    {
                                        resendEmailLoading && <LoadingOutlined/>
                                    }
                                    
                                    Gửi lại email kích hoạt.

                                </a>
                            </div>
                        </div>
                    ) : (<div className="wrap">
                        <h2 className="title">Đăng ký</h2>
    
                        <Input {...register('username')} className={'mb-5'} placeholder="Địa chỉ Email"/>
                        <Input {...register('name')} className={'mb-5'} placeholder="Họ và tên"/>
                        <Input {...register('password')} className={'mb-5'} type="password" placeholder="Mật khẩu"/>
                        <Input {...register('confirmPassword')} className={'mb-5'} type="password" placeholder="Nhập lại mật khẩu"/>
     
    
    
                        {/* <input type="text" placeholder="Địa chỉ Email" {...register('username')}/>
                        {errors.username && <ErrorText>{errors.username}</ErrorText>}
                        <input placeholder="Họ và tên" {...register('name')}/>
                        {errors.name && <ErrorText>{errors.name}</ErrorText>}
                        <input type="password" placeholder="Mật khẩu" {...register('password')}/>
                        {errors.password && <ErrorText>{errors.password}</ErrorText>}
                        <input type="password" placeholder="Nhập lại mật khẩu" {...register('confirmPassword')}/>
                        {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>} */}
    
                        <p className="policy">
                            Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của
                            Spacedev
                        </p>
                        {/* <button className="btn rect main btn-login">Đăng ký</button> */}
                        <Button onClick={onSubmit} className="btn-login" loading={loading}>Đăng ký</Button>
                    </div>)
                }
            </div>
        </main>
    )
}
