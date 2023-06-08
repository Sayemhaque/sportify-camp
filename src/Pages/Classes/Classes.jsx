import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Card from './Card';


const Classes = () => {
    const { data: classes = [],} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/approved/classes`)
            return res.data
        }
    })
    return (
        <div>
        <h1 className="text-center text-4xl py-2 mt-6 font-serif w-4/12 mx-auto  border border-b-4">Select the best</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-8">
            {classes.map(Class => <Card key={Class._id} Class={Class}/>)}
        </div>
    </div>
    );
};

export default Classes;