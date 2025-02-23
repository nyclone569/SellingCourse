import { PATH } from "../../config/path";

// import HomePage from "..";
// import AuthRouter from "../../components/AuthRouter";
// import PrivateRouter from "../../components/PrivateRouter";
// import MainLayout from "../../layouts/MainLayout";
// import ProfileLayout from "../../layouts/ProfileLayout";
// import Page404 from "../404";
// import CoinPage from "../coin";
// import ContactPage from "../contact";
// import CoursePage from "../course";
// import CourseDetailPage from "../course/[slug]";
// import FAQPage from "../faq";
// import PaymentPage from "../payment";
// import ProfilePage from "../profile";
// import MyCoinPage from "../profile/coin";
// import MyCoursePage from "../profile/course";
// import MyPaymentPage from "../profile/payment";
// import MyProjectPage from "../profile/project";
// import MyViewedCoursePage from "../profile/viewed-course";
// import ProjectPage from "../project";
// import RegisterPage from "../register/[slug]-id[id]";
// import ResetPasswordPage from "../reset-password";
// import SignInPage from "../signin";
// import SignUpPage from "../signup";
// import TeamPage from "../team";

import { lazy } from "react";
const AuthRouter = lazy(() => import("../../components/AuthRouter"))
const PrivateRouter = lazy(() => import("../../components/PrivateRouter"))
const HomePage = lazy(() => import(".."));
const MainLayout = lazy(() => import("../../layouts/MainLayout"));
const ProfileLayout = lazy(() => import("../../layouts/ProfileLayout"));
const Page404 = lazy(() => import("../404"));
const CoinPage = lazy(() => import("../coin"));
const ContactPage = lazy(() => import("../contact"));
const CoursePage = lazy(() => import("../course"));
const CourseDetailPage = lazy(() => import("../course/[slug]"));
const FAQPage = lazy(() => import("../faq"));
const PaymentPage = lazy(() => import("../payment"));
const ProfilePage = lazy(() => import("../profile"));
const MyCoinPage = lazy(() => import("../profile/coin"));
const MyCoursePage = lazy(() => import("../profile/course"));
const MyPaymentPage = lazy(() => import("../profile/payment"));
const MyProjectPage = lazy(() => import("../profile/project"));
const MyViewedCoursePage = lazy(() => import("../profile/viewed-course"));
const ProjectPage = lazy(() => import("../project"));
const RegisterPage = lazy(() => import("../register/[slug]-id[id]"));
const ResetPasswordPage = lazy(() => import("../reset-password"));
const SignUpPage = lazy(() => import("../signup"));
const TeamPage = lazy(() => import("../team"));
const SignInPage = lazy(() => import("../signin"))

export const routers = [
    {
        element: <MainLayout />,
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
                element: <AuthRouter redirect={PATH.profile.index} />,
                children: [
                    {
                        element: <SignInPage />,
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
            {
                element: <PrivateRouter redirect={PATH.signin}/>,
                children: [
                    {
                        element: <ProfileLayout/>,
                        path: PATH.profile.index,
                        children: [
                            {
                                element: <ProfilePage/>,
                                index: true
                            },
                            {
                                element: <MyCoursePage/>,
                                path: PATH.profile.course
                            },
                            {
                                element: <MyProjectPage/>,
                                path: PATH.profile.project
                            },
                            {
                                element: <MyCoinPage/>,
                                path: PATH.profile.coin
                            },
                            {
                                element: <MyPaymentPage/>,
                                path: PATH.profile.payment
                            },
                            {
                                element: <MyViewedCoursePage/>,
                                path: PATH.profile.viewedCourse
                            }
                        ]
                    }
                ]
            },
            {
                element: <Page404 />,
                path: '*'
            }
        ]
    }
]