import { Link } from "react-router-dom"
import ThemeToggle from "../Theme/ThemeToogle";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";
const Navbar = () => {
    const { isDarkMode } = useContext(ThemeContext)
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Instructors'>Instructors</Link></li>
        <li><Link to='/Classes'>Classes</Link></li>
        <li><Link to='/Dashboard'>Dashboard</Link></li>
        <li><ThemeToggle /></li>
    </>
    const user = false;
    return (
        <div className={`${isDarkMode ? "bg-slate-800 py-2" : "navbar bg-orange-300 shadow-lg"}`}>
            <div className="navbar md:max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-orange-300 menu-md font-bold dropdown-content mt-3 p-2 shadow  rounded-box w-[300px] h-[200px]">
                            {navLinks}
                            {user ? <div className="avatar">
                                <div className="w-12">
                                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
                                </div>
                            </div> : <button className="px-5 py-2 rounded-full font-bold shadow-md bg-gray-200 ">
                                Log Out
                            </button>
                            }
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
                <div className="navbar-end">
                    {user ? <div className="avatar">
                        <div className="w-12">
                            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
                        </div>
                    </div> : <Link to="/login">
                        <button className="px-8 py-2 rounded-full font-bold shadow-md bg-gray-200 ">
                            Log In
                        </button>
                    </Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;