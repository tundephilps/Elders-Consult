import { IoLocationOutline } from "react-icons/io5";
import { LuUserCheck, LuClipboardList, LuHeadphones } from "react-icons/lu";

const features = [
  {
    icon: IoLocationOutline,
    title: "Expert Guidance",
    desc: "Benefit from our team's seasoned expertise for a smooth buying experience",
  },
  {
    icon: LuUserCheck,
    title: "Personalized Service",
    desc: "Our services adapt to your unique needs, making your journey stress-free",
  },
  {
    icon: LuClipboardList,
    title: "Transparent Process",
    desc: "Stay informed with our clear and honest approach to buying your home",
  },
  {
    icon: LuHeadphones,
    title: "Exceptional Support",
    desc: "Providing peace of mind with our responsive and attentive customer service",
  },
];

export default function WhyUs() {
  return (
    <section
      className="w-full lg:px-16 px-4 py-20"
      style={{
        backgroundColor: "#FAF7F2",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className=" mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="lg:text-5xl text-4xl text-uppercase font-bold text-[#3b2f2f] leading-tight">
            Why Choose Elder Consult
          </h2>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            We offer both real estate and facilities management services under
            one trusted brand. From property acquisition and leasing to ongoing
            maintenance and management, Elder Consult provides end-to-end
            solutions that save our clients time, cost, and stress.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-4 gap-5 w-full">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col gap-6 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ backgroundColor: "#DDC7BB" }}
            >
              {/* Icon box */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl transition-colors duration-300"
                style={{ backgroundColor: "#FAF7F2" }}
              >
                <Icon className="text-2xl text-gray-700" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
