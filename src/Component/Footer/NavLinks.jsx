import { Link } from "react-router-dom";

const NavLinks = ({name, pathName}) => {
    return (
        <li>
            <Link to={pathName}  className="hover:text-[#6d28d9] text-xl">
                {name}
            </Link>
        </li>
    );
};

export default NavLinks;