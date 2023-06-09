import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import InstructorRoute from "../privateRoute/InstructorRoute";
import StudentRoute from "../privateRoute/StudentRoute";
import Myselected from "../components/Dashboard/student/Myselected";
import AdminRoute from "../privateRoute/AdminRoute";
import ManageClasses from "../components/Dashboard/ManageClasses/ManageClasses";
import ManageUser from "../components/Dashboard/Manage user/ManageUse";
import MyClasses from "../components/Dashboard/Instructor/My Classes/MyClasses";
import AddAClass from "../components/Dashboard/Instructor/AddClass/AddAClass";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Payment from "../components/Dashboard/student/paymet/Payment";
import Enrolled from "../components/Dashboard/student/Enrolled";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <div>error page</div>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "classes",
                element: <Classes/>
            },
            {
                path: "instructors",
                element: <Instructor/>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard/>,
        children:[
            {
                path:'selected',
                element:<StudentRoute><Myselected/></StudentRoute>
            },
            {
                path:'enrolled',
                element:<StudentRoute><Enrolled/></StudentRoute>
            },
            {
                path:'payment',
                element:<StudentRoute><Payment/></StudentRoute>
            },
            {
                path:'add',
                element:<InstructorRoute><AddAClass/></InstructorRoute>
            },
            {
                path:'manage/classes',
                element:<AdminRoute><ManageClasses/></AdminRoute>
            },
            {
                path:'manage/users',
                element:<AdminRoute><ManageUser/></AdminRoute>
            },
            {
                path:'instructor/classes',
                element:<InstructorRoute><MyClasses/></InstructorRoute>
            }
        ]
    }
])

