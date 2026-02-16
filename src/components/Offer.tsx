import {
  FaHome,
  FaLightbulb,
  FaShieldAlt,
  FaStar,
  FaCog,
  FaTools,
  FaUsers,
} from "react-icons/fa";

const Offer = () => {
  return (
    <section className="bg-orange-300 bg-cover bg-center text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Why Choose <span className="text-[#2d6ae0]">Elder Consult</span>
          </h2>
          <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
            <p className="text-white">
              Our Exceptional Qualities that make us unique
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch">
          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase text-sm">
                Integrated Property Solutions
              </p>
              <div className="flex flex-col items-center justify-center">
                <FaHome className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-8 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-white">
                We offer both real estate and facilities management services
                under one trusted brand. From property acquisition and leasing
                to ongoing maintenance and management, Elder Consult provides
                end-to-end solutions that save our clients time, cost, and
                stress.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase text-sm">
                Strong Market Knowledge
              </p>
              <div className="flex flex-col items-center justify-center">
                <FaLightbulb className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-8 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-white">
                Our deep understanding of Nigeria's real estate and facilities
                management landscape allows us to identify genuine
                opportunities, navigate market complexities, and deliver
                practical advice that supports smart decision-making.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase text-sm">
                Integrity and Transparency
              </p>
              <div className="flex flex-col items-center justify-center">
                <FaShieldAlt className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-8 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-white">
                We operate with honesty, accountability, and clear
                communication. Proper documentation, thorough property
                verification, and transparent processes are central to how we
                protect our clients' interests.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase text-sm">
                Professional Service Delivery
              </p>
              <div className="flex flex-col items-center justify-center">
                <FaStar className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-8 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-white">
                Our team of trained professionals is committed to high service
                standards, attention to detail, and timely execution. We
                approach every engagement with professionalism and a
                results-driven mindset.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase text-sm">
                Customized to Your Needs
              </p>
              <div className="flex flex-col items-center justify-center">
                <FaCog className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-8 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-white">
                We understand that every client and property is unique. Whether
                serving the general public, corporate clients, or luxury buyers,
                we provide customized solutions that align with specific needs,
                budgets, and goals.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase text-sm">
                Proactive Facilities Management
              </p>
              <div className="flex flex-col items-center justify-center">
                <FaTools className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-8 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-white">
                We adopt a preventive maintenance approach that ensures
                facilities remain safe, functional, and cost-efficient, while
                preserving long-term property value.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase text-sm">
                Client-Centered Approach
              </p>
              <div className="flex flex-col items-center justify-center">
                <FaUsers className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-8 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-white">
                Client satisfaction is at the core of our operations. We focus
                on building long-term relationships through trust, consistency,
                and reliable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
