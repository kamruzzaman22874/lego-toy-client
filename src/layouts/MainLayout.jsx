import { Outlet } from "react-router-dom";
import Footer from "../pages/SharedPages/Footer/Footer";
import Navbar from "../pages/SharedPages/Headers/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;