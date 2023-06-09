import axios from 'axios';
import  { useContext } from 'react';
import { FirebaseAuthContext } from '../Provider/AuthProvider';
import {useQuery} from "@tanstack/react-query"

const useInstructor = () => {
    const token = localStorage.getItem('token')
    const {user,loading} = useContext(FirebaseAuthContext)
    const {data:isInstructor,isLoading:isInstructorLoading} = useQuery({
        queryKey:['isInstructor',user?.email],
        enabled:!loading,
        queryFn:async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/instructor/${user?.email}`,
            {
                headers:{authorization:`baerer ${token}`}
            }
            )

            return res.data.instructor
        }
    })

    return [isInstructor,isInstructorLoading]
};

export default useInstructor;