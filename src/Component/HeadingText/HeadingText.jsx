
const HeadingText = ({title, subTitle}) => {
    return (
        <>
        <h1 className="text-4xl w-fit mx-auto uppercase font-bold border-b border-[#1A55DC] pb-3 text-[#1A55DC] text-center">{title}</h1>
        <p className="text-center  mx-auto text-[#f1957ebd text-[#5d69d1be] font-medium text-xl mt-4 w-[90%] md:w-[60%]">{subTitle}</p>
        </>
    );
};

export default HeadingText;