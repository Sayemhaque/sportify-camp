import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/Social Login/SocialLogin";

const Register = () => {
    const {isDarkMode} = useContext(ThemeContext)
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div className="md:max-w-md mx-auto py-12">
            <h2 className="text-4xl mb-5 font-bold font-serif text-center">Register</h2>
            <div className="flex flex-col gap-5 min-h-[500px] bg-gray-100 rounded-xl shadow-md  justify-center p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <input type="text" className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="Your Name" required {...register("name", { required: true })} />
            <input type="email" className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="Your Email" required {...register("email", { required: true })} />
            <input type="password"  className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="password" required {...register("password", { required: true })} />
            <input type="password"  className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="confirm password" required {...register("confirm-password", { required: true })} />
            <input type="text"  className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="Photo Url" required {...register("photurl", { required: true })} />
            <button className={`py-3 font-bold rounded-full  btn-block ${isDarkMode ? "bg-slate-800 text-white ": "bg-orange-300 text-black"}`}>Register</button>
            </form>
            <div className="divider">or</div>
            {/* socila login */}
            <SocialLogin/>
            <p className="text-center mt-5">Adready have an account ? please <Link to="/login" className={`underline ${isDarkMode ? 'text-slate-800' : 'text-yellow-500'}`}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;