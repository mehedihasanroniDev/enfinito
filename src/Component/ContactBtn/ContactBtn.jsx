import { Link } from "react-router-dom";

const ContactBtn = () => {
    return (
        <Link  to={'/contact'} className=" rounded-full border-2 border-[#2055DF]  px-10 py-3 bg-white text-black font-semibold hover:bg-[#2055DF] hover:text-white duration-700">
           Contact Us
        </Link>

    );
};

export default ContactBtn;