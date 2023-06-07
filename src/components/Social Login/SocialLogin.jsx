import { FirebaseAuthContext } from "../../Provider/AuthProvider";
import {useContext} from "react"
import {useNavigate} from "react-router-dom"
import GoogleIcon from "../../assets/google.png"
import { postRequest } from "../../utils/CRUD";
const SocialLogin = () => {
    const {logInWithGoogle} = useContext(FirebaseAuthContext)
    const navigate = useNavigate()
    const handleSocialLogin = async () => {
    const result =  await logInWithGoogle(); 
    const user = {name:result.user?.displayName , email:result.user?.email,role:"student"}
       await postRequest('user',user)
       navigate('/')
    }
    return (
        <div>
            <button onClick={handleSocialLogin} className="btn-block flex items-center justify-center gap-3 bg-gray-300 font-bold py-2 rounded-full">
                <img className="w-6 h-6" src={GoogleIcon} alt="" />
                Login With Google</button>
        </div>
    );
};

export default SocialLogin;