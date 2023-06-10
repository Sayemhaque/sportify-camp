import {useContext} from "react"
import { FirebaseAuthContext } from "../../../../Provider/AuthProvider";
import { useGetData } from "../../../../hooks/useGetData";


const MyClasses = () => {  
    const {user} = useContext(FirebaseAuthContext)

    const { data: classes, isLoading: isLoadingClasses } = useGetData(
        `instructor/allclasse?email=${user?.email}`,
        ['classes']
      );
      

    if (isLoadingClasses) {
        return <p className="text-center">Loading...</p>
    }
    return (
        <div>
            <h1 className="text-center text-4xl py-2 font-serif w-4/12 mx-auto  border border-b-4">Manage Users</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {classes.map((Class) => <tr key={Class._id}>
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
                            <td className={`${Class.status === "approved" ? "text-green-500": "text-yellow-500"}`}>{Class.status}</td>
                            <td>{Class.totalEnroll}</td>
                            <td>Feed Back</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;