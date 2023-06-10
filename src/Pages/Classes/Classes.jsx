import Card from './Card';
import { useGetData } from '../../hooks/useGetData';


const Classes = () => {

    const {data : classes = [] } = useGetData('approved/classes',['classes'])
    return (
        <div>
        <h1 className="text-center text-2xl md:text-4xl py-2 mt-6 font-serif md:w-4/12 mx-auto  border border-b-4">Select the best</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-5 md:px-12 py-8">
            {classes.map(Class => <Card key={Class._id} Class={Class}/>)}
        </div>
    </div>
    );
};

export default Classes;