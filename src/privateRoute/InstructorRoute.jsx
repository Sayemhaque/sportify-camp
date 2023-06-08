/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FirebaseAuthContext } from '../Provider/AuthProvider';
import useInstructor from '../hooks/useInstructor';
import {Navigate} from "react-router-dom"

const InstructorRoute = ({children}) => {
    const {user,loading} = useContext(FirebaseAuthContext)
    const [isInstructor,isInstructorLoading] = useInstructor()
    
    if(loading || isInstructorLoading){
        return <p className='text-center'>Loading...</p>
    }
    if(user && isInstructor){
        return children
    }
    return <Navigate to='/' replace></Navigate>
};

export default InstructorRoute;