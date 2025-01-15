import Box from "./components/Box"
import "./assets/css/tailwind.css"
import ContactPage from "./pages/contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RegisterPage from "./pages/register/[slug]-id[id]"
import { Route, Routes } from "react-router-dom"
import CoursePage from "./pages/course"
import HomePage from "./pages"
import TeamPage from "./pages/team"
import ProjectPage from "./pages/project"
import FAQPage from "./pages/faq"
import PaymentPage from "./pages/payment"
import CoinPage from "./pages/coin"
import SignInPage from "./pages/signin"
import SignUpPage from "./pages/signup"
import ResetPasswordPage from "./pages/reset-password"
import Page404 from "./pages/404"
import ProfilePage from "./pages/profile"
import MyCoursePage from "./pages/profile/course"
import ProfileLayout from "./layouts/ProfileLayout"
import MyPaymentPage from "./pages/profile/payment"
import MyProjectPage from "./pages/profile/project"
import MyCoinPage from "./pages/profile/coin"
import MyViewedCoursePage from "./pages/profile/viewed-course"
import MainLayout from "./layouts/MainLayout"
import { PATH } from "./config/path"
import CourseDetailPage from "./pages/course/[slug]"
import { useEffect, useState } from "react"
import PrivateRouter from "./components/PrivateRouter"
import AuthRouter from "./components/AuthRouter"

function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user'))
    } catch {
      return null
    }
  })
  const login = () => {
    setUser({
      name: "Truong Dang Nghia",
      avatar: "/img/avt.png"
    })
  }
  const logout = () => {
    setUser()
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <>
      <Routes>
        <Route element={<MainLayout user={user} logout={logout} />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.contact} element={<ContactPage />} />

          <Route path={PATH.course} >
            <Route index element={<CoursePage />} />
            <Route path={PATH.courseDetail} element={<CourseDetailPage />} />
          </Route>

          <Route path={PATH.team} element={<TeamPage />} />
          <Route path={PATH.courseRegister} element={<RegisterPage />} />
          <Route path={PATH.project} element={<ProjectPage />} />
          <Route path={PATH.faq} element={<FAQPage />} />
          <Route path={PATH.payment} element={<PaymentPage />} />
          <Route path={PATH.coin} element={<CoinPage />} />
          <Route element={<AuthRouter user={user} redirect={PATH.profile.index} />}>
            <Route path={PATH.signin} element={<SignInPage login={login} />} />
            <Route path={PATH.signup} element={<SignUpPage />} />
            <Route path={PATH.resetPassword} element={<ResetPasswordPage />} />
          </Route>

          <Route element={<PrivateRouter user={user} redirect={PATH.signin} />}>
            <Route path={PATH.profile.index} element={<ProfileLayout user={user} />}>
              <Route index element={<ProfilePage />} />
              <Route path={PATH.profile.course} element={<MyCoursePage />} />
              <Route path={PATH.profile.payment} element={<MyPaymentPage />} />
              <Route path={PATH.profile.project} element={<MyProjectPage />} />
              <Route path={PATH.profile.coin} element={<MyCoinPage />} />
              <Route path={PATH.profile.viewedCourse} element={<MyViewedCoursePage />} />
            </Route>
          </Route>


          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
      {/* <ContactPage /> */}
      {/* <RegisterPage /> */}
    </>
  )
}

export default App
