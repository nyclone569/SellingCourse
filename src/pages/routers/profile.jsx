import PrivateRouter from "../../components/PrivateRouter"
import { PATH } from "../../config/path"
import ProfileLayout from "../../layouts/ProfileLayout"
import ProfilePage from "../profile"
import MyCoinPage from "../profile/coin"
import MyCoursePage from "../profile/course"
import MyPaymentPage from "../profile/payment"
import MyProjectPage from "../profile/project"
import MyViewedCoursePage from "../profile/viewed-course"

export const profile = (user) => {
    return {
        element: <PrivateRouter user={user} redirect={PATH.signin} />,
        children: [
            {
                element: <ProfileLayout user={user} />,
                path: PATH.profile.index,
                children: [
                    {
                        element: <ProfilePage />,
                        index: true
                    },
                    {
                        element: <MyCoursePage />,
                        path: PATH.profile.course
                    },
                    {
                        element: <MyPaymentPage />,
                        path: PATH.profile.payment
                    },
                    {
                        element: <MyProjectPage />,
                        path: PATH.profile.project
                    },
                    {
                        element: <MyCoinPage />,
                        path: PATH.profile.coin
                    },
                    {
                        element: <MyViewedCoursePage />,
                        path: PATH.profile.viewedCourse
                    }
                ]
            }
        ]
    }
}