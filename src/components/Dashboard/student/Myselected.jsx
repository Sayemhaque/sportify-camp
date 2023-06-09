import {FaTrash} from "react-icons/fa"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { FirebaseAuthContext } from "../../../Provider/AuthProvider";


const MySelected = () => {
    const token = localStorage.getItem('token')
    const {user} = useContext(FirebaseAuthContext)
    const { data: myclass = [], isLoading} = useQuery({
        queryKey: ['myclass'],
        queryFn: async () => {
            const res = await 
            axios.get(`${import.meta.env.VITE_BASE_URL}/selected?email=${user?.email}`,
             {
                headers: { authorization: `baerer ${token}` }
            })
            return res.data
        }
    })
    console.log(myclass)

    if (isLoading) {
        return <p className="text-center">Loading...</p>
    }
    return (
        <div>
            <h1 className="text-center text-4xl py-2 font-serif w-4/12 mx-auto  border border-b-4">Selected Classes</h1>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th> Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {myclass.map((Class) => <tr key={Class._id}>
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
                            <td>{Class.instructor}</td>
                            <td>{Class.price}$</td>
                            <td className="cursor-pointer"><FaTrash/></td>
                            <td className="btn">Pay</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelected;


