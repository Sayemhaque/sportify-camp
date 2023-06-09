import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { FirebaseAuthContext } from "../../../Provider/AuthProvider";


const Enrolled = () => {
    const token = localStorage.getItem('token')
    const { user } = useContext(FirebaseAuthContext)
    const { data: enrolled = [], isLoading } = useQuery({
        queryKey: ['enrolled'],
        queryFn: async () => {
            const res = await
                axios.get(`${import.meta.env.VITE_BASE_URL}/enrolled?email=${user?.email}`,
                    {
                        headers: { authorization: `baerer ${token}` }
                    })
            return res.data
        }
    })
    console.log(enrolled)

    if (isLoading) {
        return <p className="text-center">Loading...</p>
    }
    return (
        <div>
            <h1 className="text-center text-4xl py-2 font-serif w-4/12 mx-auto  border border-b-4">Enrolled</h1>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Enrollment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {enrolled.map((enrollClass) => <tr key={enrollClass._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={enrollClass.selectedClass.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{enrollClass.selectedClass.className}</td>
                            <td>{enrollClass.selectedClass.instructor}</td>
                            <td>{enrollClass.selectedClass.price}$</td>
                            <td className="text-green-500">success</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enrolled;


