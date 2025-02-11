import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PATH } from '../../config/path'
import { useAuth } from '../AuthContext'
import { avatarDefault } from '../../config'

export default function Header() {
    const {user, logout} = useAuth()
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to='/' className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>Spacedev</h1>
                    </Link>
                    <div className="right">
                        {
                            user ? (
                                <div className="have-login">
                                    <div className="account">
                                        <Link to={PATH.profile.index} className="info">
                                            <div className="name">{user.name}</div>
                                            <div className="avatar">
                                                <img src={user.avatar ? user.avatar : avatarDefault} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="hamberger"></div>
                                    <div className="sub">
                                        <Link to={PATH.profile.course}>Khóa học của tôi</Link>
                                        <Link to={PATH.profile.index}>Thông tin tài khoản</Link>
                                        <Link to="#" onClick={(ev) => {
                                            ev.preventDefault()
                                            logout()
                                        }}>Đăng xuất</Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="not-login bg-none">
                                    <Link to={PATH.signin} className="btn-register">Đăng nhập</Link>
                                    <Link to={PATH.signup} className="btn main btn-open-login">Đăng ký</Link>
                                </div>
                            )
                        }


                    </div>
                </div>
                <div className="progress" />
            </header>
            <nav className="nav">
                <ul>
                    {
                        !user? (
                            <li>
                                <NavLink to={PATH.signin}>Đăng ký / Đăng nhập</NavLink>
                            </li>
                        ) : (
                        <li>
                            <NavLink to={PATH.profile.index} className="account">
                                <div className="avatar">
                                    <img src="/img/avt.png" alt="" />
                                </div>
                                <div className="namee">{user.name}</div>
                            </NavLink>
                        </li>
                        )
                    }
                    <li>
                        <NavLink to={PATH.home}>
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.team}>Spacedev Team</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.course}>Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.project}>Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.contact}>Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
        </>
    )
}
