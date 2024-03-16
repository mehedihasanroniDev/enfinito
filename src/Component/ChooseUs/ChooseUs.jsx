import ChooseUsData from "../../Data/ChooseUsData";
import Container from "../Container/Container";
import HeadingText from "../HeadingText/HeadingText";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUs = () => {
    return (
        <Container>
            <div className="py-20">

            <HeadingText title={'Choose Use'} subTitle={'At Enfinito, we pride ourselves on being the preferred choice for  digital solutions, offering a range of advantages that set us apart:'}/>

            <div className=" mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 ">
                {
                    ChooseUsData.map((choose, indx) => <ChooseUsCard key={indx} title={choose.title} details={choose.details} Icon={choose.icon} />)
                }
            </div>

            </div>


        </Container>
    );
};

export default ChooseUs;