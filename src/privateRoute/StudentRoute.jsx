/* eslint-disable react/prop-types */
import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { FirebaseAuthContext } from '../Provider/AuthProvider';

const StudentRoute = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {loading,user} = useContext(FirebaseAuthContext)
    if(loading){
        return <p className='text-center'>Loading...</p>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default StudentRoute;