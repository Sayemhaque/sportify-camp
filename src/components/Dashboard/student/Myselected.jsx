import { FaTrash } from "react-icons/fa"
import { useContext } from "react";
import { FirebaseAuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import { deleteRequest } from "../../../utils/CRUD";
import Swal from "sweetalert2";


const MySelected = () => {
    const { user } = useContext(FirebaseAuthContext)
    const { data: myclass = [], isLoading, refetch} =
     useGetData(`selected?email=${user?.email}`, ['myclass']
    );

    const handleDeleteClass = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "you want to delete this class?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then( async (result) => {
            if (result.isConfirmed) {
                await deleteRequest(`selected/${id}`)
                refetch()
              Swal.fire(
                'Deleted!',
                'Class deleted successfully',
                'success'
              )
            }
          })
    }
    console.log(myclass)
    

    if (isLoading) {
        return <p className="text-center">Loading...</p>
    }
    return (
        <div>
    <h1 className="text-center text-2xl md:text-4xl py-2 font-serif w-4/12 mx-auto border border-b-4">
        Selected Classes</h1>
    <div className="overflow-x-auto w-full mt-5">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {myclass.map((Class) => (
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
                            <td className="px-6 py-4 whitespace-nowrap">{Class.instructor}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{Class.price}$</td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <div className="flex justify-center">
                                    <button className="text-gray-400 cursor-pointer" onClick={() => handleDeleteClass(Class._id)}>
                                        <FaTrash />
                                    </button>
                                    <Link to="/dashboard/payment" 
                                    state={Class} className="ml-4 text-gray-400">Pay</Link>
                                </div>
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

export default MySelected;


