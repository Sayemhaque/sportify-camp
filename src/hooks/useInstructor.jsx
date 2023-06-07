import axios from 'axios';
import  { useContext } from 'react';
import { FirebaseAuthContext } from '../Provider/AuthProvider';
import {useQuery} from "@tanstack/react-query"

const useInstructor = () => {
    const {user,loading} = useContext(FirebaseAuthContext)
    const {data: isInstructor= [],isLoading} = useQuery({
        queryKey:['instructor'],
        enabled:!loading,
        queryFn:async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/instructor/${user?.email}`)

            return res.data
        }
    })

    return [isInstructor,isLoading]
};

export default useInstructor;