import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Main = () => {
    return (
        <>
        <Navbar/>
        <div className="max-w-[1600px] mx-auto">

        <Outlet/>
        <Footer/>
        </div>
        </>
    );
};

export default Main;