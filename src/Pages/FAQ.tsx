import Chatbot from "../components/Chatbot";

const FAQ = () => {
  const styles = {
    backgroundImage: `url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')`,
  };
  return (
    <section>
      <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mb-8 text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Frequently Asked{" "}
            <span
              className="bg-cover bg-center bg-no-repeat px-4 text-white"
              style={styles}
            >
              Questions
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
            These are some of the questions our clients randomly ask and will
            guide you into undestanding how we operate
          </p>
        </div>

        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] p-8">
            <div className="flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">
                How do I get started with buying a property through your agency?
              </p>
              <div className="relative ml-10 flex h-8 w-8 items-center justify-center bg-white">
                <div className="absolute h-4 w-0.5 bg-black"></div>
                <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
              </div>
            </div>
            <p className="mb-4 text-[#636262]">
              To begin your property search with us, you can explore our
              listings on our website, contact our experienced agents, or visit
              our office. We'll guide you through the entire process, from
              property selection to closing the deal.
            </p>
          </div>

          <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] p-8">
            <div className="flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">
                What types of properties do you offer for sale or rent?
              </p>
              <div className="relative ml-10 flex h-8 w-8 items-center justify-center bg-white">
                <div className="absolute h-4 w-0.5 bg-black"></div>
                <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
              </div>
            </div>
            <p className="mb-4 text-[#636262]">
              We offer a diverse range of properties, including residential
              homes, apartments, commercial spaces, and land. Whether you're
              looking for a cozy family home or a lucrative investment
              opportunity, we have you covered.
            </p>
          </div>

          <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] p-8">
            <div className="flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">
                How can I determine the market value of my property for selling
                or renting?
              </p>
              <div className="relative ml-10 flex h-8 w-8 items-center justify-center bg-white">
                <div className="absolute h-4 w-0.5 bg-black"></div>
                <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
              </div>
            </div>
            <p className="mb-4 text-[#636262]">
              You can request a free property evaluation by contacting our team.
              We'll assess your property's location, condition, and current
              market trends to provide you with an accurate estimate of its
              value
            </p>
          </div>

          <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] p-8">
            <div className="flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">
                What are the key factors to consider when investing in real
                estate?
              </p>
              <div className="relative ml-10 flex h-8 w-8 items-center justify-center bg-white">
                <div className="absolute h-4 w-0.5 bg-black"></div>
                <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
              </div>
            </div>
            <p className="mb-4 text-[#636262]">
              : Real estate investment success depends on factors such as
              location, market trends, property condition, and long-term goals.
              Our expert agents can provide you with insights to make informed
              decisions.
            </p>
          </div>
        </div>
        <p className="text-center">
          Can’t find the answer you’re looking for? Reach out to our{" "}
          <a href="#" className="font-bold text-[#1353fe]">
            customer support team
          </a>
          .
        </p>
      </div>

      <Chatbot />
    </section>
  );
};

export default FAQ;
