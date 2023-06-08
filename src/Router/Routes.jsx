import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import InstructorRoute from "../privateRoute/InstructorRoute";
import AddAClass from "../components/Dashboard/AddClass/AddAClass";
import StudentRoute from "../privateRoute/StudentRoute";
import Myselected from "../components/Dashboard/student/Myselected";
import AdminRoute from "../privateRoute/AdminRoute";
import Manage from "../components/Dashboard/ManageUser/Manage";



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
                path:'add',
                element:<InstructorRoute><AddAClass/></InstructorRoute>
            },
            {
                path:'manage',
                element:<AdminRoute><Manage/></AdminRoute>
            }
        ]
    }
])