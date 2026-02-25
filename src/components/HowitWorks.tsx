import How from "../assets/How.png";

const HowitWorks = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center md:mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase text-[#2d6ae0]">
            3 easy steps
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">How it works</h2>
          <div className="mx-auto my-4 max-w-[528px] md:mb-6 lg:mb-8">
            <p className="text-[#636262]">How to close a deal with us</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 md:flex-row-reverse lg:gap-12">
          <div className="flex max-w-[496px] flex-1 flex-col items-start">
            <a className="relative mb-8 flex gap-4 p-6">
              <div className="flex h-10 w-10 flex-none flex-col items-center justify-center rounded-full bg-[#dae2f3]">
                <p className="font-bold text-[#7c8aaa]">1</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="font-bold md:text-xl">View Listings</h5>
                <p className="text-[#636262]">
                  View Avaliable Properties on our listing page
                </p>
              </div>
            </a>
            <a className="relative mb-8 flex gap-4 p-6">
              <div className="flex h-10 w-10 flex-none flex-col items-center justify-center rounded-full bg-[#dae2f3]">
                <p className="font-bold text-[#7c8aaa]">2</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="font-bold md:text-xl">Book Appointment</h5>
                <p className="text-[#636262]">
                  Give us a call and schdule an appointment with us for a one on
                  one Inspection of the properties
                </p>
              </div>
            </a>
            <a className="relative mb-8 flex flex-row gap-4 p-6">
              <div className="flex h-10 w-10 flex-none flex-col items-center justify-center rounded-full bg-[#dae2f3]">
                <p className="font-bold text-[#7c8aaa]">3</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="font-bold md:text-xl">Easy Payment!</h5>
                <p className="text-[#636262]">
                  We have a Number of Avaliable options for easy seemless
                  transactions, in cash and bank transfer and get ur
                  documentation asap.
                </p>
              </div>
            </a>
          </div>

          <div className="flex-1">
            <img
              src={How}
              alt="Image showing dashboard of the app"
              className="inline-block h-full w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
