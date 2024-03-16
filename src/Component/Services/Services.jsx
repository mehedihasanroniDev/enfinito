import ServicesData from "../../Data/ServicesData";
import Container from "../Container/Container";
import ServicesCard from "./ServicesCard";

const Services = () => {
    return (
        <Container>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-fit mx-auto ">
            {
                ServicesData.map((service, indx) => <ServicesCard key={indx} title={service.title} details={service.details} Icon={service.icon} />)
            }
        </div>
        </Container>
    );
};

export default Services;