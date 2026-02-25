import Boss from "../assets/Boss.png";
import Chatbot from "../components/Chatbot";
import Logo from "../assets/LOGO22.png";

const AboutUs = () => {
  return (
    <>
      <section className="">
        <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="flex flex-col items-start gap-8 lg:gap-24">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex  flex-col items-start gap-8 lg:gap-14">
                <h2 className="font-bold text-3xl md:text-5xl">Meet Our Ceo</h2>
                <p className="flex-col text-[#808080] max-[479px]:text-sm">
                  Realtor Oluyomi Ojo is the Chief Executive Officer of Elder
                  Consult, a leading real estate and facilities management
                  company providing comprehensive property solutions across
                  residential, commercial, and corporate sectors. With over 20
                  years of professional experience in real estate, property
                  management, and facilities operations.
                  <br /> Oluyomi Ojo brings deep industry knowledge and
                  strategic leadership to the organization. Oluyomi Ojo holds a
                  Bachelor’s Degree (Hons) from Obafemi Awolowo University, and
                  has further strengthened his expertise through professional
                  training and certifications in real estate and facilities
                  management. He is a Certified Member of IFMA, AFMPN, AEAN
                  amongst others. As CEO, Oluyomi Ojo is responsible for setting
                  the company’s strategic direction, overseeing operations, and
                  ensuring the delivery of high-quality, compliant, and
                  cost-effective property and facilities management services.
                  <br /> He has successfully led teams in managing diverse
                  property portfolios, optimizing asset value, improving
                  operational efficiency, and maintaining strong client
                  relationships. Driven by professionalism, integrity, and
                  continuous improvement, Oluyomi Ojo remains committed to
                  advancing industry standards and positioning Elder Consult as
                  a trusted partner in real estate and facilities management.
                </p>
              </div>
              <img
                src={Boss}
                alt=""
                className=" h-full w-full object-cover rounded-2xl"
              />
            </div>

            <div className="grid place-items-start gap-10 max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 lg:grid-cols-2">
              <img
                src={Logo}
                alt=""
                className=" h-full w-full object-cover rounded-2xl"
              />
              <div className="flex w-full flex-col items-start gap-5 border border-solid border-black p-20 rounded-2xl">
                <h2 className="font-bold text-3xl md:text-5xl">Our Mission</h2>
                <p className="flex-col text-[#808080] max-[479px]:text-sm">
                  At Elder Consult, our mission is to deliver trusted,
                  transparent, and high-quality real estate and facilities
                  management solutions that create lasting value for our
                  clients. We are committed to professionalism, integrity, and
                  excellence in helping individuals, businesses, and investors
                  make smart and secure property decisions across Nigeria.
                  <br />
                  <br />
                  Our vision is to become a leading and respected real estate
                  and facilities management firm in Nigeria, known for
                  reliability, ethical practices, and exceptional service
                  delivery. We aim to set new standards in property transactions
                  and facilities management through innovation, consistency, and
                  client-focused solutions.
                </p>
                <div className="flex  justify-end ">
                  <h1 className="text-xl font-bold justify-end ml-28 ">
                    Oluyomi Ojo
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Chatbot />
      </section>

      {/* <section>
        <div className="py-12 md:py-16  mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">
            <div className="flex-col flex items-start gap-2">
              <div>
                <div className="flex-col flex items-start">
                  <div className="flex-col flex items-start gap-2">
                    <p className="flex-col text-[#808080] text-sm sm:text-xl">
                      Co-Founder
                    </p>
                    <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-6 lg:mb-8">
                      Yinka Rahman
                    </h1>
                    <p className="flex-col text-[#808080] text-sm sm:text-xl">
                      A Geospatial Engineer and Real Estate Developer, he brings
                      to the table over a decade of extensive experience in the
                      real estate sector. His professional journey is marked by
                      a unique combination of technical acumen and an innate
                      understanding of the real estate industry. With a
                      background in geospatial engineering, he specializes in
                      harnessing the power of advanced geographic information
                      systems (GIS) and geospatial data to revolutionize
                      decision-making processes within the real estate domain.
                      His expertise is invaluable in assessing land use, zoning
                      regulations, and environmental factors. This, in turn,
                      minimizes risks and maximizes returns on investments. This
                      ability to integrate geospatial technology with real
                      estate development has made him a critical player in
                      shaping urban landscapes and planning for sustainable,
                      future-proof cities.
                    </p>
                  </div>
                  <div className="mb-8 mt-8 h-px w-full bg-black"></div>

                  <div className="flex items-center justify-start gap-4 flex-wrap mb-6 md:mb-10 lg:mb-12">
                    <a
                      href="#"
                      className="flex max-w-full items-center justify-center gap-2.5 text-center text-sm font-bold uppercase text-black"
                    >
                      <p>All Achievements</p>
                      <img
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg"
                        alt=""
                        className="inline-block"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[320px] overflow-hidden  rounded-md">
              <img src={Yinka} />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutUs;
