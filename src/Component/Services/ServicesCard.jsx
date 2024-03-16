
function ServicesCard({title, details, Icon}) {
    return (
        <div data-aos="fade-up" className="bg-[#436FDA] backdrop-opacity-35 backdrop-blur-md p-5 w-[20rem]  shadow-md rounded-md text-white text-center hover:shadow-xl duration-200 group">
            <div className="text-5xl text-slate-100 w-fit mx-auto font-bold group-hover:scale-110 duration-200">
            <Icon />
            </div>
            <h1 className="text-slate-50 font-bold text-2xl mt-5">{title}</h1>
            <p className="text-slate-100 text-base font-medium mt-3">{details}</p>

        </div>
    );
}

export default ServicesCard;