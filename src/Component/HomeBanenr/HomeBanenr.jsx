
import { Typewriter } from 'react-simple-typewriter';
import { Parallax } from 'react-parallax';

import imageURL from '../../assets/image/banner/banner.webp'
import ContactBtn from '../ContactBtn/ContactBtn';

const HomeBanenr = () => {
    const writingText = ['Creative Design','Web Design & Development','Motion Graphics','Products Photography','Digital Marketing','SEO','Content Writing','Printing Solution','Strategy Development']

    return (
        <Parallax
        bgImage={imageURL}
        blur={{ min: -15, max: 15 }}
        bgImageAlt="the Menu"
        strength={-200}
        >


        <div className='object-cover object-center  h-screen flex justify-center items-center'>
            <div className='bg-[#2e2d2d2c] px-2 py-5 backdrop-opacity-35 backdrop-blur-md rounded-md text-center w-[90%] md:w-[60%] '>

            <h1 data-aos="fade-right" className='text-3xl md:text-5xl font-bold text-white uppercase mb-5'>Welcome To Enfinito...</h1>

            <div data-aos="fade-left">

            <span data-aos="fade-left" className=' text-[#04E9F9] text-3xl md:text-5xl font-bold'>
                <Typewriter
                    words={writingText}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
            </div>


            <div data-aos="fade-up" className='mt-10 uppercase'>

                <ContactBtn/>
            </div>

            </div>
        </div>
        </Parallax>
    );
};

export default HomeBanenr;