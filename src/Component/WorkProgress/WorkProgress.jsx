import { Parallax } from "react-parallax";
import Container from "../Container/Container";
import HeadingText from "../HeadingText/HeadingText";
import ListText from "./ListText";

import workProgress from '../../assets/image/workProgress/workProgress.jpg'
import workProgress2 from '../../assets/image/workProgress/workProgress2.jpg'


const WorkProgress = () => {
    return (
        <Container>
        <div className="py-20">

            <HeadingText title={`Work Progress`} subTitle={`At Enfinito, our approach to achieving excellence is defined by a meticulous and strategic working process. Here's how we bring your vision to life:`}/>

            <ul className="mt-6 list-decimal list-inside text-[#1F56D5] font-bold  text-2xl space-y-4">
                <ListText title={'Consultation'} subTitle={'We begin by understanding your goals, challenges, and vision. Through comprehensive consultations, we gain insights to tailor our solutions to your unique needs.'}/>
                <ListText title={'Strategic Planning'} subTitle={`Armed with a clear understanding, we develop a strategic plan that outlines the roadmap for your project. This involves defining objectives, timelines, and key deliverables.`}/>

                <Parallax
                bgImage={workProgress}
                blur={{ min: -15, max: 15 }}
                bgImageAlt="the Menu"
                strength={-200}
                >
                    <div className=" h-[50vh] bg-fixed object-cover object-center">

                    </div>
              </Parallax>

              <ListText title={`Creative Development`} subTitle={`Our team of experts unleashes creativity to craft compelling solutions. From graphic design to tech innovations, we bring your ideas to life with precision and ingenuity. Our iterative, collaborative approach ensures your vision exceeds expectations, making your brand stand out in the digital landscape.`}/>


              <div className="flex">
                <div>
                    <ListText title={`Collaborative Iterations`} subTitle={`We believe in collaboration. Throughout the process, we engage in iterative feedback, ensuring your input is valued, and the end result aligns perfectly with your expectations.`}/>

                    <ListText title={`Delivery and Continued Support`} subTitle={`After delivering the final product, our commitment to your success persists with continuous support. We stand by you in your ongoing journey toward excellence. Enfinito's working process is a seamless journey, crafted to bring your ideas to fruition with precision, creativity, and unwavering dedication to excellence.`}/>
                </div>
                <div className="w-[100%]">
                    <img src={workProgress2} alt="" className="w-fit "/>
                </div>

              </div>




            </ul>

        </div>
        </Container>
    );
};

export default WorkProgress;