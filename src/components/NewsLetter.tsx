const NewsLetter = () => {
  return (
    <div className=" relative py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
      <div className="grid grid-cols-1 bg-[#f2f2f7] p-8 text-left max-[991px]:px-8 max-[767px]:justify-items-center sm:p-10 md:grid-cols-[1.5fr_1fr] md:p-16 gap-4">
        <div className="max-[767px]:text-center">
          <h3 className="mb-2 text-2xl font-bold max-[767px]:text-center md:text-3xl">
            Get the latest and greatest
          </h3>
          <div>
            <p className="max-w-md text-[#647084]">
              Subscribe to our NewsLetter to get the latest updates and info on
              our Company and Properties Avaliable...
            </p>
          </div>
        </div>
        <div className="w-full text-center max-[767px]:max-w-[400px] md:text-right">
          <div className="mx-auto mb-4 flex max-w-[640px] flex-col items-center justify-center">
            <form
              name="email-form"
              method="get"
              className="relative flex w-full max-w-full flex-row items-stretch max-[991px]:flex-col lg:items-start"
            >
              <input
                type="email"
                className="m-0 mb-4 mr-6 block h-9 w-full bg-white px-6 py-7 align-middle text-sm text-[#333333] focus:border-[#3898ec]"
                name="email-3"
                placeholder="Enter your email"
              />
              <input
                type="submit"
                value="Subscribe"
                className="m-0 inline-block cursor-pointer bg-indigo-600 px-6 py-3 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] max-[479px]:relative max-[479px]:right-0 max-[479px]:w-full"
              />
              <div></div>
              <div></div>
            </form>
          </div>
          <p className="text-[#647084]">
            Join a community of over <span className="">5000+ Clients</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
