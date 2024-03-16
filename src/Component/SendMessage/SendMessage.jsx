import Container from "../Container/Container";

const SendMessage = () => {
    return (
        <div className="bg-[#1E53D7] py-20">

        <Container>

            <div className="mt-10 flex flex-col md:flex-row justify-between gap-16">


            <div data-aos="fade-up" className="flex-1">
            <h1 className="font-bold text-[44px] text-white mb-6">Ready to team up?</h1>
            <div className="space-y-4 text-xl font-semibold text-white">
                <p>Are you ready to see visible results from your digital advertising efforts?</p>
                <p>{`We're not miracle workers. But we're pretty good at what we do.`}</p>
                <p>We help you grow your business organically, hit your marketing objectives, as well as producing more leads and revenue. We do all of this using practical marketing strategies that actually work.</p>
            </div>


            </div>

            <form data-aos="fade-down" className="md:w-[56%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-bold text-white">Your Name *</span>
                </label>
                <input type="text" name="name" className=" input border border-white rounded-full bg-[#3c6ce6] text-xl text-white" required />
                </div>

                {/* Email */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-bold text-white">Email *</span>
                </label>
                <input type="email" name="Email" className=" input border border-white rounded-full bg-[#3c6ce6] text-xl text-white " required />
                </div>


                {/* Company */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-bold text-white">Company *</span>
                </label>
                <input type="text" name="Company" className=" input border border-white rounded-full bg-[#3c6ce6] text-xl text-white" required />
                </div>

                {/* phone Number */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-bold text-white">Phone no. *</span>
                </label>
                <input type="number" name="phone" className=" input border border-white rounded-full bg-[#3c6ce6] text-xl text-white" required />
                </div>

                </div>

                {/* Message */}
                <div className="form-control mt-6">
                <label className="label">
                    <span className="label-text text-lg font-bold text-white">Message *</span>
                </label>
                <textarea className="textarea bg-[#3c6ce6] text-xl border border-white text-white rounded-2xl h-[11rem]">
                </textarea>
                </div>

                <div className="mt-6">
                    <input type="checkbox" name="chackbok" id="checkbox" className="" />


                    <label className="label-text text-lg font-bold text-white ml-2" htmlFor="checkbox">  I agree to get newsletter and other marketing information.</label>

                </div>

                <div className="mt-6">
                    <button className=" rounded-full   px-14 py-5 bg-[#3c6ce6] text-white font-semibold hover:bg-indigo-600 hover:text-white duration-700  ">
                        Send Message
                    </button>
                </div>


            </form>


            </div>
        </Container>

        </div>
    );
};

export default SendMessage;