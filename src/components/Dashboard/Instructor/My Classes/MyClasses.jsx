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
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/instructor/allclasse?email=${user?.email}`,{
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
            <h1 className="text-center text-2xl md:text-4xl py-2 font-serif w-4/12 mx-auto  border border-b-4">My Classes</h1>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th> Seats</th>
                            <th>status</th>
                            <th>Total Enrolled</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {instructorClasses.map((Class) => <tr key={Class._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={Class.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{Class.className}</td>
                            <td>{Class.seats}</td>
                            <td className={`${Class.status === "approved" ? "text-green-500" : "text-yellow-500"}`}>{Class.status}</td>
                            <td>{Class.totalEnroll}</td>
                            <td>{Class.feedback}</td>
                            <td><Link state={Class._id} to={`/dashboard/update/class/${Class._id}`}><button><FaRegEdit /></button></Link></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;