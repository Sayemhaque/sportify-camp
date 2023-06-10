import Card from "./Card";
import { useGetData } from "../../../hooks/useGetData";

const Instructor = () => {
    const {data:instructors = []} = useGetData('instructors', ['instructors'])
    return (
        <div className="bg-gray-100">
            <h1 className="text-center text-2xl md:text-4xl py-2 mt-6 font-serif md:w-4/12 mx-auto  border border-b-4">Learn From the best</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-5 md:px-12 py-8">
                {instructors.map(instructor => <Card key={instructor._id} instructor={instructor}/>)}
            </div>
        </div>
    );
};

export default Instructor;