import { Typewriter } from "react-simple-typewriter";
import ContactBtn from "../ContactBtn/ContactBtn";

import './ServicesBanner.css'

const ServicesBanner = () => {
    const servicesText = ['Creative Design','Web Design & Development','Motion Graphics','Products Photography','Digital Marketing','SEO','Content Writing','Printing Solution','Strategy Development']
    return (

        <div className='bg-img h-screen flex justify-center items-center'>
            <div className='bg-[#2e2d2d2c] px-2 py-5 backdrop-opacity-35 backdrop-blur-md rounded-md text-center w-[80%]'>

            <h1 className='text-4xl font-bold text-white uppercase mb-8'>Our services...</h1>

            <span className=' text-[#04E9F9] text-3xl font-bold'>
                <Typewriter
                    words={servicesText}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>

            <div className='mt-14 uppercase'>

                <ContactBtn/>
            </div>

            </div>
        </div>
    );
};

export default ServicesBanner;