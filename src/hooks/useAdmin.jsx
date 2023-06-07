import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import {useContext} from "react"
import { FirebaseAuthContext } from "../Provider/AuthProvider"
const useAdmin = () => {
    const {user} = useContext(FirebaseAuthContext)
    const {data: isAdmin= []} = useQuery({
        queryKey:['admin'],
        queryFn:async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/admin/${user?.email}`)

            return res.data
        }
    })

    return [isAdmin]
}

export default useAdmin;