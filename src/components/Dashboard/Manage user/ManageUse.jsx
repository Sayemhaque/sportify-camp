
import { makeAdmin, makeInstructor } from "../../../utils/CRUD";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUser = () => {
    const token = localStorage.getItem('token')
    const { data: users = [], isLoading: isLoadingUsers, refetch } = useQuery(
        ['users'],
        async () => {
          const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`, {
            headers: { authorization: `bearer ${token}` }
          });
          return res.data;
        }
      );
      
      console.log(users);
      
      const handleMakeAdmin = async (id,name) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "you want to make this user Admin",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Make Admin!'
        }).then(async(result) => {
          if (result.isConfirmed) {
            try {
              const res = await makeAdmin(`admin/${id}`);
              console.log(res.data);
              refetch();
            } catch (error) {
              console.error(error);
            }
            Swal.fire(
              'success!',
              `${name} is now an Admin`,
              'success'
            )
          }
        })
      };
      
      const handleMakeInstructor = async (id,name) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "you want to make this user Instructor",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Make  Instructor!'
        }).then(async(result) => {
          if (result.isConfirmed) {
            try {
              const res = await makeInstructor(`instructor/${id}`);
              console.log(res.data);
              refetch();
            } catch (error) {
              console.error(error);
            }
            Swal.fire(
              'success!',
              `${name} is now an Instructor`,
              'success'
            )
          }
        })
        
      };
    if (isLoadingUsers) {
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
                            <td> <button className="bg-green-200 p-1 rounded-full disabled:bg-gray-200 disabled:bg-opacity-70 disabled:cursor-not-allowed" onClick={() => handleMakeAdmin(user._id,user.name)} disabled={user.role === 'admin'}>Make Admin</button></td>
                            <td> <button className="bg-red-200 p-1 rounded-full disabled:bg-gray-200 disabled:bg-opacity-70 disabled:cursor-not-allowed" onClick={() => handleMakeInstructor(user._id,user.name)} disabled={user.role === 'instructor'}>Make instructor</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;