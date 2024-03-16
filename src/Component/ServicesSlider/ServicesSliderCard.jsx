import { Link } from "react-router-dom";

function ServicesSliderCard({title,  Icon}) {
    return (
        <Link to={'/services'}>
        <div className="text-center border border-gray-200 w-[11rem]  md:w-[18rem]  shadow-md p-4 rounded-lg bg-white h-[12rem] md:h-[11rem] hover:shadow-xl hover:scale-100 duration-300">

            <div className=" text-5xl w-fit mx-auto  text-[#f1957ebd]">
            <Icon />
            </div>

            <h1 className="text-2xl font-bold  mt-4 bg-gradient-to-r from-[#f1957e] to-[#5d68d1] text-transparent bg-clip-text">
                {title}
            </h1>


        </div>
        </Link>
    );
}

export default ServicesSliderCard;