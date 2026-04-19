import { FaMapMarkerAlt, FaHome, FaDollarSign } from "react-icons/fa";
import HeroImage from "../../src/assets/Hero.png";

export default function Hero2() {
  return (
    <section className="w-full bg-[#f5efeb] lg:py-0 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-7xl font-bold text-[#3b2f2f] leading-tight">
            Find Your <br /> Dream Home
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Explore our curated selection of exquisite properties (residential
            and commercial) meticulously tailored to your unique dream property
            vision
          </p>

          <button className="mt-6 bg-[#3b2f2f] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
            Sign up
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img src={HeroImage} alt="Modern House" className="w-full h-auto" />
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-5xl mx-auto mt-10 bg-[#d9c6b9] p-4 rounded-xl flex flex-col md:flex-row items-center gap-4">
        {/* Location */}
        <div className="flex items-center bg-white pl-4 py-3 rounded-lg w-full">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Location"
            className="outline-none w-full text-sm"
          />
        </div>

        {/* Type */}
        <div className="flex items-center bg-white pl-4 py-3 rounded-lg w-full">
          <FaHome className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Type"
            className="outline-none w-full text-sm"
          />
        </div>

        {/* Price */}
        <div className="flex items-center bg-white pl-4 py-3 rounded-lg w-full">
          <FaDollarSign className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Price Range"
            className="outline-none w-full text-sm"
          />
        </div>

        {/* Button */}
        <button className="bg-[#3b2f2f] text-white text-xs whitespace-nowrap px-6 py-3 rounded-lg w-full md:w-auto">
          Sign up
        </button>
      </div>
    </section>
  );
}
