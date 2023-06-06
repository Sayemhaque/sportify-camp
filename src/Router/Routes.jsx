import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<div>error page</div>,
        children:[
            {
              path:"/",
              element:<Home/>
            }
        ]
    }
])