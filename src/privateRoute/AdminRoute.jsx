/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin"
const AdminRoute = ({children}) => {
    const [isAdmin,isLoading] = useAdmin()
    if(isLoading){
        return <p>Loading...</p>
    }
     if(isAdmin.admin){
        return children
     }
    return <Navigate to='/' replace></Navigate>
};

export default AdminRoute;