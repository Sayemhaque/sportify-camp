import { approveAClass } from "../../../utils/CRUD";
import Swal from "sweetalert2";
import FeedBackModal from "../Modal/FeedBackModal";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
    const token = localStorage.getItem('token')

    const { data: allclasses = [], isLoading: isLoadingClasses,refetch} = useQuery({
        queryKey:['iallclasses',],
        queryFn:async() => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/allclasses`,{
                headers: { authorization: `baerer ${token}` }
              })
            return res.data
        }
    })
   

    if (isLoadingClasses) {
        return <p className="text-center">Loading...</p>
    }
    const handleApproveClass = async (id) => {
        const res = await approveAClass(`status/approve/${id}`)
        console.log(res)
        if (res.modifiedCount) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class approved',
                showConfirmButton: false,
                timer: 1500
            })
            refetch()
        }

    }
    const handleDenyClass = async (id) => {
        const res = await approveAClass(`status/deny/${id}`)
        console.log(res)
        if (res.modifiedCount) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Class denied',
                showConfirmButton: false,
                timer: 1500
            })
            refetch()
        }
    }
    return (
        <div>
            <h1 className="text-center text-4xl py-2 font-serif w-4/12 mx-auto  border border-b-4">Manage Classes</h1>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>

                            <th> Class Image</th>
                            <th> Class Name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {allclasses.map((Class) => <tr key={Class._id}>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={Class.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {Class.className}
                            </td>
                            <td>{Class.instructor}</td>
                            <td>{Class.email}</td>
                            <td>{Class.seats}</td>
                            <td>{Class.price}$</td>
                            <td>
                                {Class.status}
                            </td>
                            <td> <button className="bg-green-200 p-1 rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed" onClick={() => handleApproveClass(Class._id)} disabled={Class.status !== "pending"}>Approve</button></td>

                            <td> <button className="bg-red-200 p-1 rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed" onClick={() => handleDenyClass(Class._id)} disabled={Class.status !== "pending"}>Deny</button></td>
                            <td><label htmlFor="my-modal-3" className='flex items-center gap-3 cursor-pointer'>Feedback</label></td>
                            <FeedBackModal id={Class._id}/>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;