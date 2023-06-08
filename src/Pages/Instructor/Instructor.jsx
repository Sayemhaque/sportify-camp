import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./Card";

const Instructor = () => {
    const { data: instructors = [],} = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/instructors`)
            return res.data
        }
    })
    return (
        <div>
            <h1 className="text-center text-4xl py-2 mt-6 font-serif w-4/12 mx-auto  border border-b-4">Learn From the best</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-8">
                {instructors.map(instructor => <Card key={instructor._id} instructor={instructor}/>)}
            </div>
        </div>
    );
};

export default Instructor;