
import { FaLaptopCode } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa6";
import { MdOutlineSpeakerNotes, MdOutlinePhotoLibrary } from "react-icons/md";
import { TfiPrinter } from "react-icons/tfi";
import { PiPresentationChart, PiGooglePhotosLogoBold, PiMicrophoneStageBold  } from "react-icons/pi";
import { TbSlideshow } from "react-icons/tb";



const ServicesData =[
    {
        title:'Creative Design',
        details:'Elevate your brand with visually stunning and innovative designs tailored to make a lasting impression',
        icon: TbSlideshow,
    },
    {
        title:'Web Design & Development',
        details:'Transform your online presence with responsive and user-friendly websites crafted for optimal performance.',
        icon: FaLaptopCode,
    },
    {
        title:'Motion Graphics',
        details:'Bring your ideas to life through captivating motion graphics that engage and resonate with your audience',
        icon: PiGooglePhotosLogoBold
    },
    {
        title:'Products Photography',
        details:'Showcase your products in the best light with high-quality photography that highlights their unique features.',
        icon: MdOutlinePhotoLibrary,
    },
    {
        title:'Digital Marketing',
        details:'Expand your reach and impact with strategic digital marketing solutions designed to boost your online presence and drive results.',
        icon: PiMicrophoneStageBold,
    },
    {
        title:'SEO',
        details:`Improve your website's visibility and ranking on search engines, ensuring your brand gets the attention it deserves`,
        icon: FaSearchengin,
    },
    {
        title:'Content Writing',
        details:`Communicate your message effectively with compelling and tailored content that speaks to your target audience.`,
        icon: MdOutlineSpeakerNotes,
    },
    {
        title:'Printing Solution',
        details:`From business cards to banners, our printing solutions ensure your brand materials are of the highest quality, leaving a lasting impression.`,
        icon: TfiPrinter,
    },
    {
        title:'Strategy Development',
        details:`Gain a competitive edge with customized strategies that align with your business goals and set you on a path to success`,
        icon: PiPresentationChart,
    }
]

export default ServicesData;