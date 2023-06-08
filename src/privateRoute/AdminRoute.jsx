/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin"
import { useContext } from "react";
import { FirebaseAuthContext } from "../Provider/AuthProvider";
const AdminRoute = ({children}) => {
    const {user,loading} = useContext(FirebaseAuthContext)
    const [isAdmin,isAdminLoading] = useAdmin()
    if(loading || isAdminLoading){
        return <p className='text-center'>Loading...</p>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' replace></Navigate>
};

export default AdminRoute;