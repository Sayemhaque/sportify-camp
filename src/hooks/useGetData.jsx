import axios from "axios"
import { useQuery } from "@tanstack/react-query";


const useGetData = () => {
    const {data : sliders = []} = useQuery({
        queryKey:['slider'],
        queryFn: async () => {
            const res = axios.get("slider.json")
            return res.data
        }
    })

    return [sliders]
}

export default useGetData;