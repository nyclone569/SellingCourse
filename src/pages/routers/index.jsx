import HomePage from "..";
import AuthRouter from "../../components/AuthRouter";
import PrivateRouter from "../../components/PrivateRouter";
import { PATH } from "../../config/path";
import MainLayout from "../../layouts/MainLayout";
import ProfileLayout from "../../layouts/ProfileLayout";
import Page404 from "../404";
import CoinPage from "../coin";
import ContactPage from "../contact";
import CoursePage from "../course";
import CourseDetailPage from "../course/[slug]";
import FAQPage from "../faq";
import PaymentPage from "../payment";
import ProfilePage from "../profile";
import MyCoinPage from "../profile/coin";
import MyCoursePage from "../profile/course";
import MyPaymentPage from "../profile/payment";
import MyProjectPage from "../profile/project";
import MyViewedCoursePage from "../profile/viewed-course";
import ProjectPage from "../project";
import RegisterPage from "../register/[slug]-id[id]";
import ResetPasswordPage from "../reset-password";
import SignInPage from "../signin";
import SignUpPage from "../signup";
import TeamPage from "../team";
import { profile } from "./profile";

export const routers = (user, login, logout) => {
    return [
        {
            element: <MainLayout user={user} logout={logout} />,
            children: [
                {
                    element: <HomePage />,
                    index: true
                },
                {
                    element: <ContactPage />,
                    path: PATH.contact
                },
                {
                    path: PATH.course,
                    children: [
                        {
                            element: <CoursePage />,
                            index: true
                        },
                        {
                            element: <CourseDetailPage />,
                            path: PATH.courseDetail
                        }
                    ]
                },
                {
                    element: <TeamPage />,
                    path: PATH.team
                },
                {
                    element: <RegisterPage />,
                    path: PATH.courseRegister
                },
                {
                    element: <ProjectPage />,
                    path: PATH.project
                },
                {
                    element: <FAQPage />,
                    path: PATH.faq
                },
                {
                    element: <PaymentPage />,
                    path: PATH.payment
                },
                {
                    element: <CoinPage />,
                    path: PATH.coin
                },
                {
                    element: <AuthRouter user={user} redirect={PATH.profile.index} />,
                    children: [
                        {
                            element: <SignInPage login={login} />,
                            path: PATH.signin
                        },
                        {
                            element: <SignUpPage />,
                            path: PATH.signup
                        },
                        {
                            element: <ResetPasswordPage />,
                            path: PATH.resetPassword
                        }
                    ]
                },
                profile(user),
                {
                    element: <Page404 />,
                    path: '*'
                }
            ]
        }
    ]
}