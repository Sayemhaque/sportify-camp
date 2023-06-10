import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  console.log(isInstructor, isAdmin)

  const studentLinks = <>
    <li> <Link to='/dashboard/selected'>My Selected Classes</Link></li>
    <li> <Link to='/dashboard/enrolled'>My Enrolled Classes</Link></li>
  </>
  const instructorLinks = <>
    <li> <Link to='/dashboard/add'>Add A Class</Link></li>
    <li> <Link to='/dashboard/instructor/classes'>My Classes</Link></li>
  </>
  const adminLinks = <>
    <li> <Link to='/dashboard/manage/classes'>Manage Classes</Link></li>
    <li> <Link to='/dashboard/manage/users'>Manage User</Link></li>
  </>

const links = isAdmin ? adminLinks : (isInstructor ? instructorLinks : studentLinks);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 font-bold text-[15px] h-full bg-orange-300 ">
          <h2 className="text-2xl font-bold mb-12 font-serif">Sportify Camp</h2>
          {/* Sidebar content here */}
          {links}
          <div className="divider"></div>
          <li><Link to='/'>Home</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;