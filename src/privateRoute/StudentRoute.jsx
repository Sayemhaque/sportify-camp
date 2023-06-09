/* eslint-disable react/prop-types */
import  { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { FirebaseAuthContext } from '../Provider/AuthProvider';

const StudentRoute = ({children}) => {
    const {user,loading} = useContext(FirebaseAuthContext)
    console.log(user)
    if(loading){
        return <p className='text-center'>Loading...</p>
    }
    if(user){
        return children
    }
    return  <Navigate to="/login" replace />;
};

export default StudentRoute;