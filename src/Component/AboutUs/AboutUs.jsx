import Container from "../Container/Container";
import HeadingText from "../HeadingText/HeadingText";

const AboutUs = () => {
    return (
        <div className="py-20">

        <Container>
            <HeadingText title={'COMPANY'}/>
            <h1  className="text-xl mt-6 font-medium text-gray-800">{`Enfinito's`} journey began on April 17, 2019, as Getpicked, initially specializing in graphic design services. Fueled by creativity and dedication, our early success propelled us forward. Recognizing the changing landscape, we strategically transformed on July 20, 2022, rebranding as Enfinito.<br/>  This shift marked our transition from a graphic design agency to a full-fledged social media agency and tech company, guided by the principle <span className="text-[#1F56D5]  font-bold">
                    {`"Your story. Our strategy."`}
                </span>
            </h1>

            <div className="py-6 flex flex-col items-center justify-center">

                <div data-aos="fade-up" className="border-2 border-[#2055DF] p-3 flex justify-between max-w-2xl rounded-lg items-center">
                    <div >
                        <h1 className="text-3xl font-bold text-gray-700">Getpicked</h1>
                        <p className="text-xl font-semibold text-gray-600 mt-2">
                        At its inception, Enfinito was initially known as Getpicked, established in 2019.
                        </p>
                    </div>
                    <h1 className="text-3xl font-bold">Getp<span className="text-[#06FA74] font-extrabold">!</span>cked</h1>
                </div>

                <div data-aos="fade-up" className="border-l-4 border-dashed h-[5rem] border-[#2055DF] "></div>

                <div data-aos="fade-down"  className="border-2 border-[#2055DF] bg-[#2055DF] p-3 flex justify-between max-w-2xl rounded-lg items-center shadow-md gap-4">
                    <div >
                        <h1 className="text-3xl font-bold text-white">Enfinito</h1>
                        <p className="text-xl font-semibold text-white mt-2">
                        In 2022, GetPicked became Enfinito, a pivotal transformation in our journey.
                        </p>
                    </div>
                    <h1 className="text-2xl font-bold bg-white text-gray-700 py-2 px-6 rounded-lg shadow">Enfinito</h1>
                </div>

            </div>

            <h1 className="text-xl  font-medium text-gray-800">
            {`Enfinito isn't just a social media agency; it's a dynamic tech company at the crossroads of creativity and technology. Our approach goes beyond traditional social media services, integrating the latest technological advancements to offer a diverse range of solutions.`}
            </h1>

        </Container>

        <div className="bg-[#2055DF]">
            <Container>
                <h1 className="text-xl mt-6 font-medium text-white py-5">
                {`From our Getpicked origins to our current standing as Enfinito, our commitment to client needs and service excellence remains steadfast. We pledge reliability and trustworthiness across all facets of our offerings, ensuring clients not only meet but exceed their digital aspirations.`}
                </h1>
            </Container>
        </div>

        <Container>
            <h1 className="text-xl mt-6 font-medium text-gray-800">
                {`As we continue to grow, our dedication to excellence perseveres. Join us on the Enfinito journey, where we seamlessly integrate your story with our innovative strategy to shape the future of digital innovation.`}
            </h1>

            <h1 className="text-2xl font-semibold text-gray-900 mt-5 text-center">
            Welcome to Enfinito - Where Your Story Meets Our Strategy!
            </h1>
        </Container>

        </div>

    );
};

export default AboutUs;