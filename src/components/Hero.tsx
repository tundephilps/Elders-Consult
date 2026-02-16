const Hero = () => {
  return (
    <div className="">
      <div className=" bg-orange-300 pb-6 sm:pb-8 lg:pb-12 py-11">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col lg:w-[250%]  justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <p className="mb-4 font-semibold text-indigo-600 md:mb-6 md:text-lg xl:text-xl">
                Very proud to introduce
              </p>

              <h1 className="mb-8  text-4xl font-bold text-indigo-800 sm:text-5xl md:mb-12 md:text-6xl">
                Elder Consult Real Estate Agency
              </h1>

              <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                Elder Consult is a professional real estate consulting and
                facilities management firm providing comprehensive property
                solutions across Nigeria. We deliver end-to-end services
                covering residential and commercial real estate, as well as
                reliable facilities management designed to protect, maintain,
                and enhance property value.
              </p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-orange-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Start now
                </a>

                <a
                  href="#"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Take tour
                </a>
              </div>
            </div>
            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src="https://images.jdmagicbox.com/comp/bhubaneshwar/dc/0674px674.x674.100320170130.x6x7dc/catalogue/orimark-properties-sahid-nagar-bhubaneshwar-estate-agents-for-residential-rental-3tovu63.jpg"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
