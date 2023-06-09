import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import {useContext} from "react"
import { FirebaseAuthContext } from "../Provider/AuthProvider"
const useAdmin = () => {
    const token = localStorage.getItem('token')
    const {user,loading} = useContext(FirebaseAuthContext)
    const {data: isAdmin,isLoading:isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!loading,
        queryFn:async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/admin/${user?.email}`,{
                headers:{authorization:`baerer ${token}`}
            })

            return res.data.admin
        }
    })

    return [isAdmin,isAdminLoading]
}

export default useAdmin;