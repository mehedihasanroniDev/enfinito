import Marquee from "react-fast-marquee";
import Container from "../Container/Container";
import ServicesSliderCard from "./ServicesSliderCard";
import ServicesData from "../../Data/ServicesData";

const ServicesSlider = () => {
    return (
        <Container>

        <Marquee>

        <div className="flex flex-row overflow-hidden gap-6 py-20">
            {
                ServicesData.map((services, indx) => <ServicesSliderCard key={indx} title={services.title} Icon={services.icon} />)
            }
        </div>
        </Marquee>
        </Container>
    );
};

export default ServicesSlider;