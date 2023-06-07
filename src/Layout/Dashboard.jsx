import { Link,Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor,isLoading] = useInstructor()
    console.log(isInstructor)
    const studentLinks = <>
    <li> <Link to='/dashboard/selected'>My Selected Classes</Link></li>
    <li> <Link to='/dashboardenrolled'>My Enrolled Classes</Link></li>
     <li>  <Link to='/dashboard/payment'>Payment</Link></li>
    </>
     const instructorLinks = <>
     <li> <Link to='/dashboard/add'>Add A Class</Link></li>
     <li> <Link to='/dashboard/classes'>My Classes</Link></li>
      <li>  <Link to='/dashboard/elrolled'>Total Enrolled Students</Link></li>
     </>
      const adminLinks = <>
      <li> <Link to='/dashboard/manage'>Manage Classes</Link></li>
      <li> <Link to='/dashboard/users'>Manage User</Link></li>
      </>

const links = isAdmin.admin ? adminLinks : (isInstructor.instructor ? instructorLinks : studentLinks);
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 font-bold text-[15px] h-full bg-orange-300 ">
    <h2 className="text-3xl font-bold mb-12 font-serif">Sportify Camp</h2>
      {/* Sidebar content here */}
      {isLoading ? <span className="loading loading-dots  loading-sm"></span> : links}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;