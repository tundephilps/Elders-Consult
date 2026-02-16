const Results = () => {
  return (
    <section className="block">
      <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-12 lg:mb-16">
            We get results
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch">
          <div className="relative grid grid-flow-row grid-cols-1 gap-4 bg-white rounded-md p-8 md:p-10">
            <h3 className="font-bold text-3xl md:text-5xl">N150M</h3>
            <div className="text-[#636262] text-sm sm:text-sm">
              Our commitment to excellence has resulted in a profit of over 150
              Million in Naira thus far, showcasing our dedication to financial
              success and sustainable growth.
            </div>
            <div className="right-0absolute right-0 top-[29%] h-2/5 [border-right:1px_solid_rgb(230,_230,_230)] max-[479px]:hidden"></div>
          </div>
          <div className="relative grid grid-flow-row grid-cols-1 gap-4 bg-white rounded-md p-8 md:p-10">
            <h3 className="font-bold text-3xl md:text-5xl">41%</h3>
            <div className="text-[#636262] text-sm sm:text-sm">
              Our business has seen remarkable growth, with a year-over-year
              increase of 25% in new customers. This demonstrates our continuous
              efforts to expand our services and exceed our clients\'
              expectations.',
            </div>
            <div className="absolute right-0 top-[29%] h-2/5 [border-right:1px_solid_rgb(230,_230,_230)] max-[479px]:hidden"></div>
          </div>
          <div className="relative grid grid-flow-row grid-cols-1 gap-4 bg-white rounded-md p-8 md:p-10">
            <h3 className="font-bold text-3xl md:text-5xl">350+</h3>
            <div className="text-[#636262] text-sm sm:text-sm">
              We welcomed a total of 350 new customers in the past year. Our
              commitment to exceptional service and expertise has attracted
              homebuyers and sellers from various locations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
