import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"
const Layout = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
          <div>footer</div>

        </div>
    );
};

export default Layout;