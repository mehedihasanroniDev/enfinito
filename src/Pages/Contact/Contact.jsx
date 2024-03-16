import ContactBanner from "../../Component/Banner/ContactBanner";
import ContactUs from "../../Component/ContactUs/ContactUs";
import HelmentTitle from "../../Component/HelmentTitle/HelmentTitle";

const Contact = () => {
    return (
        <>
          <HelmentTitle>Contact</HelmentTitle>
          <ContactBanner/>

          <div className="bg-[#F0F6FF]">
            <ContactUs/>
          </div>

        </>
    );
};

export default Contact;