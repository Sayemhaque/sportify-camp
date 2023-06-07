import GoogleIcon from "../../assets/google.png"
const SocialLogin = () => {
    return (
        <div>
            <button className="btn-block flex items-center justify-center gap-3 bg-gray-300 font-bold py-2 rounded-full">
                <img className="w-6 h-6" src={GoogleIcon} alt="" />
                Login With Google</button>
        </div>
    );
};

export default SocialLogin;