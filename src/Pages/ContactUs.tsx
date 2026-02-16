import Chatbot from "../components/Chatbot";

const ContactUs = () => {
  return (
    <section className="block">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-full w-full  px-5 md:px-10">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-5xl">Contact Sales</h2>
            <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
              <div className="text-[#636262]">
                React out to us by sending us a mail if you have any inquiry or
                further questions about our business.
              </div>
            </div>
            <div className="mx-auto text-left mb-4 px-0 sm:px-4 md:px-20">
              <form name="wf-form-name" method="get">
                <div className="grid-cols-2 grid w-full gap-6 mb-4">
                  <div className="relative">
                    <label className="mb-1 font-medium">First Name</label>
                    <input
                      type="text"
                      className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
                      name="name-2"
                      placeholder=""
                    />
                  </div>
                  <div className="relative">
                    <label className="mb-1 font-medium">Last Name</label>
                    <input
                      type="text"
                      className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
                      name="name-2"
                      placeholder=""
                    />
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="relative mb-4">
                  <label className="mb-1 font-medium">Company Website</label>
                  <input
                    type="text"
                    className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
                    name="field"
                    placeholder=""
                  />
                </div>
                <div className="relative mb-4">
                  <label className="mb-1 font-medium">Email</label>
                  <input
                    type="text"
                    className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
                    name="field"
                    placeholder=""
                  />
                </div>
                <div className="relative mb-5 md:mb-6 lg:mb-8">
                  <label className="mb-1 font-medium">Message</label>
                  <textarea
                    placeholder=""
                    name="field"
                    className="m-0 block h-auto min-h-[186px] w-full overflow-auto border border-solid border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm mb-2.5 px-3 py-2 rounded-md pl-4"
                  >
                    {" "}
                  </textarea>
                </div>
                <label className="flex items-center justify-start font-medium before:table before:[grid-area:1/1/2/2] before:content-['_'] mb-1 pb-4 pl-5">
                  <input
                    type="checkbox"
                    name="checkbox-2"
                    className="float-left -ml-[20px] mr-0 p-0 mt-1"
                  />
                  <span className="ml-4 inline-block cursor-pointer text-sm sm:text-sm">
                    By selecting this, you agree to the
                    <a href="#" className="text-black">
                      {" "}
                      Privacy Policy
                    </a>
                  </span>
                </label>
                <input
                  type="submit"
                  value="Send Message"
                  className="m-0 inline-block w-full cursor-pointer items-center bg-indigo-600 px-6 py-3 text-center font-semibold text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <Chatbot />
    </section>
  );
};

export default ContactUs;
