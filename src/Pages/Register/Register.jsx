import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/Social Login/SocialLogin";
import { FirebaseAuthContext } from "../../Provider/AuthProvider";
import { postRequest } from "../../utils/CRUD";

const Register = () => {
    const {isDarkMode} = useContext(ThemeContext)
    const {registerUser,updateUserProfile,logOut} = useContext(FirebaseAuthContext) 
    const { register, handleSubmit } = useForm();
    const [error,setError] = useState('')
    const navigate = useNavigate()
  const onSubmit = async (data) => {

    try{

        if(data.password.length && data.confirm.length < 6) {
            setError("Password must have at least 6 character")
            return
          }
        if(data.password !== data.confirm){
           return setError("password does not match")
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
            setError('Password should contain at least one special character.');
            return;
          }
          
          if (!/[A-Z]/.test(data.password)) {
            setError('Error: Password should contain at least one capital letter.');
            return;
          }
          const user = {name:data.name,image:data.photurl,email:data.email,role:"instructor",}
          setError('')
          await registerUser(data.email,data.password)
          await  updateUserProfile(data.name,data.photurl)
          await logOut()
          const res = await postRequest('user',user)
          console.log(res)
          navigate('/login')
         
      }
        catch(error){
            setError(error.message)
            
    }
    
    console.log(data)
  };

    return (
        <div className="md:max-w-md mx-auto py-12">
            <h2 className="text-4xl mb-5 font-bold font-serif text-center">Register</h2>
            <div className="flex flex-col gap-5 min-h-[500px] bg-gray-100 rounded-xl shadow-md  justify-center p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <input type="text" className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="Your Name" required {...register("name", { required: true })} />
            <input type="email" className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="Your Email" required {...register("email", { required: true })} />
            <input type="password"  className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="password" required {...register("password", { required: true })} />
            <input type="password"  className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="confirm" required {...register("confirm", { required: true })} />
            <input type="text"  className="px-3 py-2 w-full border border-gray-200 rounded-lg" placeholder="Photo Url" required {...register("photurl", { required: true })} />
            <p className="text-red-400">{error}</p>
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