// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import ReviewsData from '../../Data/ReviewsData';
import HeadingText from '../HeadingText/HeadingText';
import Container from '../Container/Container';
import { Parallax } from 'react-parallax';
import imageURL from '../../assets/image/banner/sentMessage.webp'





const Testimonials = () => {



    return (
        <>
        <Parallax
        bgImage={imageURL}
        blur={{ min: -15, max: 15 }}
        bgImageAlt="the Menu"
        strength={-200}
        >
            <div className='object-cover object-center  bg-fixed h-[400px]'></div>
        </Parallax>

        <Container>
        <div className="py-20">
            <HeadingText title={'TESTIMONIALS'} subTitle={'---What Our Clients Say---'}/>

        <Swiper navigation={true} modules={[Navigation]} className="mt-10 text-center">
            {
                ReviewsData.map((review, indx) => <SwiperSlide key={indx}>
                    <div className='w-fit mx-auto mb-3'>

                    <Rating
                    style={{ maxWidth: 200, color: 'red' }}
                    value={review.rating}
                    readOnly

                    />
                    </div>
                    <div className='w-fit mx-auto text-5xl text-blacks  my-10'>
                        <FaQuoteLeft/>
                    </div>
                    <p className='font-normal text-lg leading-7 text-[#444] w-[82%]  mx-auto'>{review.details}</p>
                    <h1 className='text-3xl font-medium text-[#CD9003]'>{review.name}</h1>

                </SwiperSlide> )
            }
        </Swiper>


        </div>
        </Container>
        </>
    );
};

export default Testimonials;