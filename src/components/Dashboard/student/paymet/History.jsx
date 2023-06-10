import { useContext } from "react";
import { FirebaseAuthContext } from "../../../../Provider/AuthProvider";
import { useGetData } from "../../../../hooks/useGetData";


const History = () => {
    const { user } = useContext(FirebaseAuthContext)

    const { data: history = [], isLoading, } = useGetData(`enrolled?email=${user?.email}`, ['enrolled']
    );

    console.log(history )

    if (isLoading) {
        return <p className="text-center">Loading...</p>
    }
    return (
        <div>
            <h1 className="text-center text-4xl py-2 font-serif w-4/12 mx-auto  border border-b-4">Payment History</h1>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <td>TransactionId Id</td>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {history.map((enrollClass) => <tr key={enrollClass._id}>
                            <td>{enrollClass.selectedClass.className}</td>
                            <td>{enrollClass.selectedClass.price}$</td>
                            <td>{enrollClass.transactionId}</td>
                            <td>{new Date(enrollClass.date).toLocaleString()}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;


