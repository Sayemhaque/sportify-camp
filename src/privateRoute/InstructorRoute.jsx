/* eslint-disable react/prop-types */
import useInstructor from '../hooks/useInstructor';
import {Navigate} from "react-router-dom"

const InstructorRoute = ({children}) => {
    const [isInstructor,isLoading] = useInstructor()
    if(isLoading){
        return <p>Loading...</p>
    }
     if(isInstructor.instructor){
        return children
     }
    return <Navigate to='/' replace></Navigate>
};

export default InstructorRoute;