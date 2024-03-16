import HelmentTitle from "../../Component/HelmentTitle/HelmentTitle";
import Services from "../../Component/Services/Services";
import ServicesBanner from "../../Component/ServicesBanner/ServicesBanner";


const OurServices = () => {
    return (
        <>
        <HelmentTitle>Services</HelmentTitle>
        <ServicesBanner/>
        <div className="py-20 bg-[#1E53D7]">
            <Services/>
        </div>
        </>
    );
};

export default OurServices;