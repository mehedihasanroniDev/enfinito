
const ChooseUsCard = ({title, details, Icon}) => {
    return (
        <div data-aos="fade-up" className="flex  items-center  relative ">

            <div className="text-[#2157E2] text-[80px] border2 border[#2157E2] ring-8 ring-[#2157E2] p-3 rounded-full w-fit bg-white absolute left-0 ">
                <Icon/>
            </div>

            <div className=" bg-gradient-to-r  from-[#D9E8FB] to-[#e9edf1] ml-10 pl-20  py-4 pr-8 border-2 border-transparent rounded-lg shadow-lg">

                <h1 className="font-bold text-lg mb-2 text-gray-800">{title} :</h1>
                <p className="text-base font-medium text-gray-600">{details}</p>
            </div>


            <div className="w-[2rem] h-[7rem] bg-[#2157E2] absolute -right-2 -z-10">

            </div>

            <div className="w-[3rem] h-[2rem] bg-[#2157E2] absolute -right-4 rotate-45 -z-10 hidden md:block">

            </div>


        </div>
    );
};

export default ChooseUsCard;