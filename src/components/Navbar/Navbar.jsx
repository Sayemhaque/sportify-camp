import { Link, useNavigate } from "react-router-dom"
import ThemeToggle from "../Theme/ThemeToogle";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { FirebaseAuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import logo from "../../assets/player.png"

const Navbar = () => {
    const { isDarkMode } = useContext(ThemeContext)
    const { user, logOut } = useContext(FirebaseAuthContext)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const navigate = useNavigate()
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li>
            <Link to={isAdmin ? "/dashboard/manage/classes" : isInstructor ? "/dashboard/add" : (user ? "/dashboard/selected" : '/login')}>
                Dashboard
            </Link>
        </li>
        <li><ThemeToggle /></li> </>
    const handelLogOut = async () => {
        await logOut()
        navigate("/login")
    }
    return (
        <div className={`sticky top-0 z-50 ${isDarkMode ? "bg-slate-800 py-2" : 
        "navbar bg-white shadow-lg"}`}>
            <div className="navbar md:max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-md font-bold dropdown-content mt-3 p-2 shadow z-50  rounded-box w-[200px] h-[200px] ${isDarkMode ? " bg-slate-900 text-white" : "bg-orange-300"}`}>
                            {navLinks}
                        </ul>
                    </div>
                    {/* website name */}
                    <Link className={` flex flex-col  ${isDarkMode ? "text-white" : "text-black"}`}>
                        <img className="w-12 h-12" src={logo} alt="" />
                        <p className="hidden md:flex text-bold text-xl font-bold font-serif italic">
                            Sportfycamp</p>
                    </Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className={`${isDarkMode ? "text-white menu  font-bold text-[16px]  menu-horizontal px-1" : "menu  font-bold text-[16px]  menu-horizontal px-1"}`}>
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {user && <div className="avatar mr-4">
                        <div className="w-12 ">
                            <img src={user?.photoURL}  className="rounded-full hidden md:block" title={user?.displayName} />
                        </div>
                    </div>
                    }
                    {user ?
                        <button onClick={handelLogOut} className="px-4 py-1 md:px-8 md:py-2 rounded-full font-bold shadow-md bg-gray-200 ">Log Out
                        </button>
                        :
                        <Link to="/login">
                            <button className="px-8 py-2 rounded-full font-bold shadow-md bg-gray-200">Log In
                            </button>
                        </Link>}
                </div>

            </div>
        </div>
    );
};

export default Navbar;