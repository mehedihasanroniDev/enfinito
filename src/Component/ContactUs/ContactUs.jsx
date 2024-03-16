import Container from "../Container/Container";
import HeadingText from "../HeadingText/HeadingText";

const ContactUs = () => {
    return (
        <div className="py-20">
            <HeadingText title={'About us'}/>
        <Container>
            <h1 className="font-semibold text-3xl text-black">Say Hello, we are listening!</h1>

            <div className="mt-10 flex flex-col md:flex-row md:items-center gap-20">

            <form data-aos="fade-down" className="md:w-[56%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-bold text-gray-800">Your Name *</span>
                </label>
                <input type="text" name="name" className="input border border-gray-500 rounded-full bg-white text-xl" required />
                </div>

                {/* Email */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-bold text-gray-800">Email *</span>
                </label>
                <input type="email" name="Email" className="input border border-gray-500 rounded-full bg-white text-xl" required />
                </div>


                {/* Company */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-bold text-gray-800">Company *</span>
                </label>
                <input type="text" name="Company" className="input border border-gray-500 rounded-full bg-white text-xl" required />
                </div>

                {/* phone Number */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-bold text-gray-800">Phone no. *</span>
                </label>
                <input type="number" name="phone" className="input border border-gray-500 rounded-full bg-white text-xl" required />
                </div>

                </div>

                {/* Message */}
                <div className="form-control mt-6">
                <label className="label">
                    <span className="label-text text-lg font-bold text-gray-800">Message *</span>
                </label>
                <textarea className="textarea bg-white text-xl border border-gray-500 rounded-2xl h-[11rem]">
                </textarea>
                </div>

                <div className="mt-6">
                    <input type="checkbox" name="chackbok" className="" />

                    <label className="label-text text-lg font-bold text-gray-800 ml-2">  I agree to get newsletter and other marketing information.</label>

                </div>

                <div className="mt-6">
                    <button className=" rounded-full   px-14 py-5 bg-[#80A7F2] text-white font-semibold hover:bg-indigo-600 hover:text-white duration-700 ">
                        Send Message
                    </button>
                </div>


            </form>

            <div data-aos="fade-up">
                <h1 className="text-2xl font-bold text-gray-800">Email</h1>
                <p className="text-xl font-semibold text-gray-700 mt-3"> <a href="mailto:info@enfinito.com">info@enfinito.com</a></p>

                <h1 className="mt-6 text-2xl font-bold text-gray-800">Phone</h1>
                <p className="text-xl font-semibold text-gray-700 mt-3"><a href="tel:01722842564">013228972564</a></p>
                <p className="text-xl font-semibold text-gray-700 mt-3"><a href="tel:01722842564">015228972500</a></p>


                <h1 className="mt-6 text-2xl font-bold text-gray-800">Get a free consultation</h1>

                <button  className="mt-6 rounded-full border-2 border-indigo-600  px-14 py-5 bg-white text-black font-semibold hover:bg-indigo-600 hover:text-white duration-700">
                 Book a 30 minute call
                </button>

            </div>

            </div>
        </Container>
        </div>
    );
};

export default ContactUs;