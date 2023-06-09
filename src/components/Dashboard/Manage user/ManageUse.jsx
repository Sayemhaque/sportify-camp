import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { makeAdmin } from "../../../utils/CRUD";

const ManageUser = () => {
    const token = localStorage.getItem('token')
    const { data: users = [], isLoading ,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/users', {
                headers: { authorization: `baerer ${token}` }
            })
            return res.data
        }
    })
    console.log(users)
    const handleMakeAdmin = async (id) => {
        await makeAdmin(`admin/${id}`)
        refetch()
    }
    const handleMakeInstructor = async (id) => {
        await makeAdmin(`instructor/${id}`)
        refetch()
    }
    if (isLoading) {
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
                            <th> Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user) => <tr key={user._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td> <button className="bg-green-200 p-1 rounded-full disabled:bg-gray-200 disabled:bg-opacity-70 disabled:cursor-not-allowed" onClick={() => handleMakeAdmin(user._id)} disabled={user.role === 'admin' || 'instructor'}>Make Admin</button></td>
                            <td> <button className="bg-red-200 p-1 rounded-full disabled:bg-gray-200 disabled:bg-opacity-70 disabled:cursor-not-allowed" onClick={() => handleMakeInstructor(user._id)} disabled={user.role === 'admin' || 'instructor'}>Make instructor</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;