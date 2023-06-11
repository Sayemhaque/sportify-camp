/* eslint-disable react/prop-types */
import  { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { FirebaseAuthContext } from '../Provider/AuthProvider';
import useAdmin from "../hooks/useAdmin"
import useInstructor from '../hooks/useInstructor';

const StudentRoute = ({children}) => {
    const {user,loading} = useContext(FirebaseAuthContext)
    console.log(user)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const student = !isAdmin && !isInstructor
    console.log(student)
    if(loading){
        return <p className='text-center'>Loading...</p>
    }
    if(user && student){
        return children
    }
    return  <Navigate to="/login" replace />;
};

export default StudentRoute;