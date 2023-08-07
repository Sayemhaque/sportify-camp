import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { FaBars, FaBuilding, FaChalkboardTeacher, FaCheckSquare, FaCogs, FaHome, FaPlus, FaUser, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  console.log(isInstructor, isAdmin)

  const studentLinks = (
    <>
      <li>
        <Link to="/dashboard/selected">
          <FaCheckSquare/> My Selected Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/enrolled">
          <FaUser/> My Enrolled Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/payment/history">
          <FaBuilding/> Payment History
        </Link>
      </li>
    </>
  );
  
  const instructorLinks = (
    <>
      <li>
        <Link to="/dashboard/add">
          <FaPlus /> Add A Class
        </Link>
      </li>
      <li>
        <Link to="/dashboard/instructor/classes">
          <FaChalkboardTeacher /> My Classes
        </Link>
      </li>
    </>
  );
  
  const adminLinks = (
    <>
      <li>
        <Link to="/dashboard/manage/classes">
          <FaCogs/> Manage Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/manage/users">
          <FaUsers/> Manage Users
        </Link>
      </li>
    </>
  );

const links = isAdmin ? adminLinks : (isInstructor ? instructorLinks : studentLinks);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
      <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
        <FaBars/>
      </label>
        {/* Page content here */}
        <Outlet />

      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 font-bold text-[15px] h-full bg-gray-200 ">
          <h2 className="text-2xl font-bold mb-12 font-serif">Sportify Camp</h2>
          {/* Sidebar content here */}
          {links}
          <div className="divider"></div>
          <li><Link to='/'>
          <FaHome/> Home</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;