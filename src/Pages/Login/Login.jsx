import { useForm } from "react-hook-form";
import SocialLogin from "../../components/Social Login/SocialLogin";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {isDarkMode} = useContext(ThemeContext)
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div className="md:max-w-md mx-auto py-12">
            <h2 className="text-4xl mb-5 font-bold font-serif text-center">Login</h2>
            <div className="flex flex-col gap-5 h-[500px] bg-gray-100 rounded-xl shadow-md  justify-center p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <input className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="Your Email" required {...register("exampleRequired", { required: true })} />
            <input  className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="password" required {...register("exampleRequired", { required: true })} />
            <button className={`py-3 font-bold rounded-full  btn-block ${isDarkMode ? "bg-slate-800 text-white ": "bg-orange-300 text-black"}`}>Log In</button>
            </form>
            <div className="divider">or</div>
            {/* socila login */}
            <SocialLogin/>
            <p className="text-center mt-5">Do not have an account ? please <Link to="/register" className={`underline ${isDarkMode ? 'text-slate-800' : 'text-yellow-500'}`}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;