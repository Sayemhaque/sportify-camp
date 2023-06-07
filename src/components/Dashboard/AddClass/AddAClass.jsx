import {useForm} from "react-hook-form"
import { uploadImage } from "../../../utils/CRUD";
const AddAClass = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
       console.log(data)
       const url = await uploadImage(data.image[0])
       console.log(data,url)
     };
    return (
        <div className="p-10">
            <h3 className="text-center font-bold text-4xl font-serif">Add A class</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Class name</span>
                </label>
                <input type="text" placeholder="class name" {...register("name")} required className="input input-bordered w-full" />
            </div>
            <div className="flex mt-2 gap-5 items-center">
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Instructor name</span>
                </label>
                <input type="text" placeholder="Instructor name" {...register("instructor")}  required className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text " placeholder="Instructor email" {...register("instructor-email")}  required className="input input-bordered w-full" />
            </div>
            </div>
            <div className="form-control">
            <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="number" placeholder="price" {...register("price")}  required className="input input-bordered w-full" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available seats</span>
                </label>
                <input type="number" placeholder="Available seats" {...register("seats")}  required className="input input-bordered w-full" />
                
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