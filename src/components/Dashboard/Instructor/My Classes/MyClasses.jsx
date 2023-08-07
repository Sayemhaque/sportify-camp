import { useContext } from "react"
import { FirebaseAuthContext } from "../../../../Provider/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const MyClasses = () => {
    const { user } = useContext(FirebaseAuthContext)
    const token = localStorage.getItem('token')

    const { data: instructorClasses = [], isLoading: isLoadingClasses } = useQuery({
        queryKey: ['instructorclasses'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/instructor/allclasse?email=${user?.email}`, {
                headers: { authorization: `baerer ${token}` }
            })
            return response.data;
        }
    });



    if (isLoadingClasses) {
        return <p className="text-center">Loading...</p>
    }
    console.log(instructorClasses)
    return (
        <div>
             <h1 className="text-center text-2xl md:text-4xl py-2 font-serif w-4/12 mx-auto border border-b-4">
        My Classes</h1>
            <div className="overflow-x-auto w-full mt-5">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seats</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Enrolled</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {instructorClasses.map((Class) => (
                                <tr key={Class._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={Class.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{Class.className}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{Class.seats}</td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${Class.status === "approved" ? "text-green-500" : "text-yellow-500"}`}>{Class.status}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{Class.totalEnroll}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{Class.feedback}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <Link state={Class._id} to={`/dashboard/update/class/${Class._id}`} className="text-indigo-600 hover:text-indigo-900">
                                            <button><FaRegEdit /></button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default MyClasses;