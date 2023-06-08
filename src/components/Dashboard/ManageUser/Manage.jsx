import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Manage = () => {
    const token = localStorage.getItem('token')
    const { data: classes = [],isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/allclasses', {
                headers: { authorization: `baerer ${token}` }
            })
            return res.data
        }
    })
  
    if(isLoading){
        return <p className="text-center">Loading...</p>
    }
    console.log(classes)
    return (
        <div>
            <h1 className="text-center text-4xl py-2 font-serif w-4/12 mx-auto  border border-b-4">Manage Classes</h1>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th></th>
                            <th> Class name</th>
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
                        {classes.map((Class, index) => <tr key={Class._id}>
                            <th>
                                {index+1}
                            </th>
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
                            <td>{Class.email}</td>
                            <td>{Class.seats}</td>
                            <td>{Class.price}$</td>
                            <td>
                                pending
                            </td>
                            <td> <button className="bg-green-200 p-1 rounded-full">Approve</button></td>
                            <td> <button className="bg-red-200 p-1 rounded-full">Deny</button></td>
                            <td> <button className="bg-yellow-200 p-1 rounded-full">Feedback</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage;