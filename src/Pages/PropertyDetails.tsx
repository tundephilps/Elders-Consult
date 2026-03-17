import { useParams, Link } from "react-router-dom";
import { properties } from "./PropertyListing";
import Chatbot from "../components/Chatbot";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Property not found</h2>
        <Link to="/PropertyListing" className="text-indigo-500 underline">
          Back to listings
        </Link>
      </div>
    );
  }

  const whatsappNumber = "+2348023405754"; // Replace with your WhatsApp number
  const startWhatsAppChat = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-white py-10 px-4 md:px-10">
      <Link to="/PropertyListing" className="text-indigo-500 underline">
        ← Back to listings
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        {/* Left */}
        <div>
          {/* Image */}
          {property.image && (
            <img
              src={property.image}
              alt={property.title}
              className="w-full rounded-lg"
            />
          )}

          {/* Videos */}
          {property.videos && property.videos.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Property Videos</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.videos.slice(0, 6).map((video, index) => (
                  <iframe
                    key={index}
                    src={video}
                    title={`Property video ${index + 1}`}
                    className="w-full h-60 rounded-lg"
                    allowFullScreen
                  />
                ))}
                {property.homeimage1 && (
                  <img
                    src={property.homeimage1}
                    alt={property.title}
                    className="w-full h-fit rounded-lg"
                  />
                )}
                {property.homeimage2 && (
                  <img
                    src={property.homeimage2}
                    alt={property.title}
                    className="w-full h-fit rounded-lg"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right */}
        <div>
          <h2 className="text-3xl font-bold">{property.title}</h2>
          <p className="text-gray-500 mt-2">{property.location}</p>

          <div className="mt-4">
            <span className="text-2xl font-bold">{property.price}</span>
            {property.originalPrice && (
              <span className="ml-3 line-through text-red-500">
                {property.originalPrice}
              </span>
            )}
          </div>

          <div className="mt-6 text-gray-600">{property.fullDescription}</div>

          <div className="mt-8">
            <button
              data-number={whatsappNumber}
              data-message="Hello, I have a question"
              onClick={startWhatsAppChat}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Schedule Inspection
            </button>
          </div>
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

export default PropertyDetails;
