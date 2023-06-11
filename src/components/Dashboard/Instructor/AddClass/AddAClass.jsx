import { useForm } from "react-hook-form"
import { useContext } from "react";
import { postRequestJWT, uploadImage } from "../../../../utils/CRUD";
import { FirebaseAuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const AddAClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(FirebaseAuthContext)
    const onSubmit = async (data) => {
        console.log(data)
        try {
            console.log(data);
            const url = await uploadImage(data.image[0]);
            const { className, instructor, email, price, seats } = data;
            const classData = {
                className,
                instructor,
                email,
                price: parseFloat(price),
                seats: parseFloat(seats),
                image: url,
                status: 'pending',
                totalEnroll: parseFloat(0),
            };

            const res = await postRequestJWT('add/class', classData);
            console.log(res);

            if (res.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class added successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }

            reset();
            console.log(classData);
        } catch (error) {
            console.error(error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    };
    return (
        <div className="p-10">
            <h3 className="text-center font-bold text-4xl font-serif">Add A class</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Class name</span>
                    </label>
                    <input type="text" placeholder="class name" {...register("className")} required className="input input-bordered w-full" />
                </div>
                <div className="flex mt-2 gap-5 items-center">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} readOnly placeholder="Instructor name" {...register("instructor")} required className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={user?.email} placeholder="Instructor email" {...register("email")} required className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder="price" {...register("price")} required className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="number" placeholder="Available seats" {...register("seats")} required className="input input-bordered w-full" />

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pick a Image</span>
                        </label>
                        <input type="file" {...register("image")} className="file-input file-input-bordered w-full" />
                    </div>
                </div>
                <button type="sumbit" className="btn bg-orange-300 btn-block mt-5">Add</button>
            </form>
        </div>
    );
};

export default AddAClass;