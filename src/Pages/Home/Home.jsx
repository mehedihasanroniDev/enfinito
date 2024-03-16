import HomeBanenr from "../../Component/HomeBanenr/HomeBanenr";
import ChooseUs from "../../Component/ChooseUs/ChooseUs";
import ServicesSlider from "../../Component/ServicesSlider/ServicesSlider";
import Testimonials from "../../Component/Testimonials/Testimonials";
import SendMessage from "../../Component/SendMessage/SendMessage";
import HelmentTitle from "../../Component/HelmentTitle/HelmentTitle";

const Home = () => {
    return (
        <>
        <HelmentTitle>Home</HelmentTitle>

        <HomeBanenr/>

        {/* <ServicesSlider/> */}

        <ChooseUs/>
        <Testimonials/>

        <SendMessage/>


        </>
    );
};

export default Home;