import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PATH } from '../../config/path'

export default function Header() {
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
                        <div className="have-login">
                            <div className="account">
                                <Link to={PATH.profile.index} className="info">
                                    <div className="name">Trương Đăng Nghĩa</div>
                                    <div className="avatar">
                                        <img src="/img/avt.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div className="hamberger"></div>
                            <div className="sub">
                                <Link to={PATH.profile.course}>Khóa học của tôi</Link>
                                <Link to={PATH.profile.index}>Thông tin tài khoản</Link>
                                <a href="#">Đăng xuất</a>
                            </div>
                        </div>
                        {/* <div class="not-login bg-none">
              <a href="#" class="btn-register">Đăng nhập</a>
              <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
          </div> */}
                    </div>
                </div>
                <div className="progress" />
            </header>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="./signin.html">Đăng ký / Đăng nhập</a>
                    </li>
                    <li>
                        <NavLink to={PATH.profile.index} className="account">
                            <div className="avatar">
                                <img src="/img/avt.png" alt="" />
                            </div>
                            <div className="namee">Trương Đăng Nghĩa</div>
                        </NavLink>
                    </li>
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
