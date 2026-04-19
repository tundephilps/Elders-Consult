import { IoLocationOutline } from "react-icons/io5";
import { properties } from "../data/properties"; // adjust path if needed
import { Link } from "react-router-dom";

interface ResidenceCardProps {
  location: string;
  title: string;
  price: string;
  image: string;
}

function ResidenceCard({ location, title, price, image }: ResidenceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-[#FAF7F2]">
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-4">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-700">
          <IoLocationOutline className="text-base" />
          <span className="text-sm font-medium">{location}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-1">
          <Link to="/PropertyListing">
            <button className="text-white text-xs px-4 py-2 rounded-full bg-[#3d2c20] hover:opacity-80 transition">
              View
            </button>
          </Link>

          <span
            className="text-base font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Popular() {
  return (
    <section
      className="w-full lg:px-10 px-4 py-20 bg-[#FAF7F2]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="lg:px-16 px-4 mx-auto flex flex-col gap-10">
        {/* Header */}
        <h2 className="lg:text-5xl text-4xl text-uppercase font-bold text-[#3b2f2f] leading-tight text-center">
          Our Popular Residences
        </h2>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <ResidenceCard
              key={property.id}
              location={property.location || "No location"}
              title={property.title}
              price={property.price}
              image={property.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
