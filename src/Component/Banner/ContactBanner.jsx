
import { Typewriter } from 'react-simple-typewriter';
import { Parallax } from 'react-parallax';

import imageURL from '../../assets/image/banner/contactBanner.jpg'

const ContactBanner = () => {

    return (
        <Parallax
        bgImage={imageURL}
        blur={{ min: -15, max: 15 }}
        bgImageAlt="the Menu"
        strength={-200}
        >


        <div className='object-cover object-center  h-screen flex justify-center items-center'>
            <div className='bg-[#2e2d2d2c] px-2 py-5 backdrop-opacity-35 backdrop-blur-md rounded-md text-center w-[90%] md:w-[60%] '>

            <span className='uppercase text-[#04E9F9] text-3xl md:text-5xl font-bold'>
                <Typewriter
                    words={['c','co','con','cont', 'conta', 'contac', 'contact', 'contact u', 'contact us', 'contact us..', 'contact us...', 'contact us....' ]}
                    // words={['.','..','...','....']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>


            </div>
        </div>
        </Parallax>
    );
};

export default ContactBanner;