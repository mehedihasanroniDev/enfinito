import { Link } from 'react-router-dom';
// import logo from '../../assets/image/banner/logo.png'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import NavLinks from './NavLinks';
import Container from '../Container/Container';

const Footer = () => {
    return (


        <>

        <footer className="py-10 bg-[#021444] text-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-start">
                    <div className="companySlogan w-full justify-self-center md:justify-self-start py-3 md:py-0">
                        <div className="logo mx-auto md:mx-0">

                            <Link to={'/'} className="rtl:space-x-reverse">
                        {/* <img src={logo} alt="" className="h-[3rem] hover:bg-gray-300 duration-500 rounded bg-gray-200 p-[1px]" /> */} LOGO
                    </Link>
                        </div>
                        <div className="text-lg pt-4 ">
                          Where Your Story Meets Our Strategy!
                        </div>
                    </div>

                    <div className="footerNavLinks w-full justify-self-center md:justify-self-start border-t md:border-none py-3 md:py-0">
                        <h5 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 w-fit mx-auto md:mx-0 mb-8">Important Link</h5>
                        <ul className="text-center md:text-start grid gap-2 mt-2">
                        <NavLinks name={'Home'} pathName={'/'} />
                        <NavLinks name={'Our services'} pathName={'/services'} />
                        <NavLinks name={'Our work'} pathName={'/ourWork'} />
                        <NavLinks  name={'About us'} pathName={'/about'} />

                        </ul>
                    </div>

                    <div className="footerContact w-full justify-self-center md:justify-self-start border-t md:border-none py-3 md:py-0">
                        <h5 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 w-fit mx-auto md:mx-0 mb-8">Our Contact Us</h5>
                        <div className="text-center md:text-start mt-2">
                            <div className='text-xl my-6'>
                                <p>Call Me: <a href="tel:01644042241" className="text-[#6d28d9]">016440429897</a>,
                                    <a href="tel:01722842564" className="text-[#6d28d9]">017228972564</a>
                                </p>

                                <p>Email: <a href="mailto:info@enfinito.com" className="text-[#6d28d9]">info@enfinito.com</a></p>
                            </div>

                            <div className='w-fit mx-auto md:mx-0  pt-2 mt-4 md:mt-0 text-4xl flex gap-6'>

                                <Link href="https://www.messenger.com/t/100033293404646"  className='hover:text-[#6d28d9]'>

                                    <IoLogoFacebook/>

                                </Link>

                                <Link href="https://www.messenger.com/t/100033293404646"  className='hover:text-[#6d28d9]'>

                                    <IoLogoTwitter/>

                                </Link>

                                <Link href="https://www.messenger.com/t/100033293404646"  className='hover:text-[#6d28d9]'>

                                    <IoLogoYoutube/>

                                </Link>

                                <Link href="https://www.messenger.com/t/100033293404646"  className='hover:text-[#6d28d9]'>

                                    <IoLogoInstagram/>

                                </Link>


                            </div>

                        </div>
                    </div>
                </div>

            </Container>
        </footer>
        <p className='bg-[#000] text-white text-center text-lg py-2'>
        Copy rigth By 2023
        </p>

        </>



    );
};

export default Footer;