import { Link, useNavigate } from "react-router-dom"
import ThemeToggle from "../Theme/ThemeToogle";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { FirebaseAuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
    const { isDarkMode } = useContext(ThemeContext)
    const {user,logOut} = useContext(FirebaseAuthContext)
    const navigate = useNavigate()
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Instructors'>Instructors</Link></li>
        <li><Link to='/Classes'>Classes</Link></li>
        <li><Link to='/Dashboard'>Dashboard</Link></li>
        <li><ThemeToggle /></li> </>
  const handelLogOut = async () => {
    await logOut()
    navigate("/login")
  }
    return (
        <div className={`${isDarkMode ? "bg-slate-800 py-2" : "navbar bg-orange-300 shadow-lg"}`}>
            <div className="navbar md:max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-orange-300 menu-md font-bold dropdown-content mt-3 p-2 shadow z-50  rounded-box w-[200px] h-[200px]">
                            {navLinks}
                        </ul>

                    </div>
                    {/* website name */}
                    <a className={`${isDarkMode ? "text-white btn btn-ghost normal-case md:text-3xl font-bold font-serif" : "btn btn-ghost normal-case md:text-3xl font-bold font-serif"}`}>SportifyCamp</a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className={`${isDarkMode ? "text-white menu  font-bold text-[16px]  menu-horizontal px-1" : "menu  font-bold text-[16px]  menu-horizontal px-1"}`}>
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {user && <div className="avatar mr-4">
                        <div className="w-12">
                            <img src={user?.photoURL} className="rounded-full" title={user?.displayName}/>
                        </div>
                    </div>
                    }
                   {user ? 
                   <button onClick={handelLogOut} className="px-8 py-2 rounded-full font-bold shadow-md bg-gray-200 ">Log Out
                    </button>
                   : 
                   <Link to="/login">
                   <button className="px-8 py-2 rounded-full font-bold shadow-md bg-gray-200 ">Log In
                    </button>
                   </Link>}
                </div>

            </div>
        </div>
    );
};

export default Navbar;