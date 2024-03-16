import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { Link,  } from "react-router-dom";
// import Logo from '../../assets/images/Logo/logo.png'

import './Navbar.css'
import ContactBtn from "../ContactBtn/ContactBtn";
import NavbarLink from "./NavbarLink";




const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrollColor, setScrollColor] = useState(false);


    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 40) {
                setScrollColor(true);
            } else {
                setScrollColor(false);
            }
        };

        window.addEventListener('scroll', changeColor);

        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);


    return (
        <>
        <nav className={`fixed w-full text-white font-semibold z-20   duration-100 py-3 ${openMenu && 'bg-[#3c6ce6] md:bg-transparent'}  ${scrollColor && 'NavbarScrollStyle text-[#393B3D]'}`}>

        <div className=" flex flex-wrap items-center justify-between  max-w-[1100px] mx-auto   px-3  xl:px-0 z-50  py-4 text-lg">

            {/* Menu bar */}
            <button className="lg:hidden" type="button" onClick={()=> setOpenMenu(!openMenu)}>
                        <div className="text-4xl">
                        {
                            openMenu ? <BiMenuAltLeft/> : <IoMenu/>
                        }
                        </div>
            </button>


            {/* Logo */}
            <Link to={'/'} className="rtl:space-x-reverse">
                {/* <img src={Logo} alt="" className="h-[2.90rem]" /> */} Logo
            </Link>

            <div data-aos="fade-left"  data-aos-duration="1000" className=" lg:order-2  rtl:space-x-reverse">

                     <ContactBtn/>
          </div>



        {/* Nav link */}
        <div className={`items-center justify-between  w-full lg:flex h-[100vh]  lg:h-fit  lg:w-auto lg:order-1 ${openMenu? 'block' : 'hidden'} `}
        onClick={()=> setOpenMenu(!openMenu)}
        >

            <ul className={`flex flex-col p-4 lg:p-0 mt-4 font-medium  border-t lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 duration-500 `}>

                <NavbarLink name={'Home'} pathName={'/'}/>
                <NavbarLink name={'Our services'} pathName={'/services'}/>
                <NavbarLink name={'Our work'} pathName={'/ourWork'}/>
                <NavbarLink name={'About us'} pathName={'/about'}/>
            </ul>
        </div>
        </div>
        </nav>
        </>
    );
};

export default Navbar;