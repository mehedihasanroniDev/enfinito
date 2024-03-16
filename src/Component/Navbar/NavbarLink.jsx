import { NavLink } from "react-router-dom";

const NavbarLink = ({name, pathName}) => {
    return (
        <li>

            <NavLink className={' hover:border-b-[3px] duration-75 pb-[11px] md:pb-[29px] hover:border-[#2055DF]   '} to={`${pathName}`}>{name}</NavLink>
            <hr className="my-2 md:hidden"/>

        </li>
    );
};

export default NavbarLink;