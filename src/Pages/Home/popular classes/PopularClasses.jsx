
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./Card";

const PopularClasses = () => {
    const { data: popular = [], } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/popular/classes`)
            return res.data
        }
    })
    return (
        <div>
            <h1 className="text-center text-2xl md:text-4xl py-2 mt-6 font-serif md:w-4/12 mx-auto  border border-b-4">Learn From the best</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-5 md:px-12 py-8">
                {popular.map(Class => <Card key={Class._id} Class={Class} />)}
            </div>
        </div>
    );
};

export default PopularClasses;