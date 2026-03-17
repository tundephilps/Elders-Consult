import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";

import House1 from "../../src/assets/Prop1A.jpg";

import House2 from "../../src/assets/Prop1B.jpg";

import House3 from "../../src/assets/Prop2A.jpg";

import House from "../../src/assets/House.jpg";

export interface Property {
  id: number;
  type: string;
  image?: string;
  homeimage1?: string;
  homeimage2?: string;
  agentImage: string;
  agentName: string;
  postedDate: string;
  bgColor: string;
  description: string;
  color: string;
  mode: string;
  title: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  location: string;
  fullDescription: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  status: string;
  videos?: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    type: "For Sale",
    title: "Semi detached (4 B/R duplex)",
    image: House1,
    agentImage:
      "https://images.arrivedhomes.com/properties/541/ea9b0425a74167fae835bf091dfc613a.jpg",
    agentName: "Agent Yomi Ojo",
    postedDate: "1/03/26",
    mode: "Available",
    bgColor: "#E01A2D1A",
    color: "#E01A2D",
    location: "Green Hill Estate Pen Cinema Agege",
    price: "N200m",
    originalPrice: "",
    rating: 5,
    reviews: 47,
    status: "Available",
    description:
      "Semi detached (4 B/R duplex) with solar inverter and all rooms en suite.",
    fullDescription: `
Beautiful semi detached duplex with 3.5kv solar inverter, all rooms en suite and guaranteed security.
-----------------------------------
For sale: Semi detached (4 B/R duplex)

N200m

Location: Green Hill Estate Pen Cinema Agege.

It comes with 3.5kv solar inverter 

All rooms en suite 

Security guaranteed
`,
    videos: [
      "https://www.youtube.com/embed/9R9WOtIH6bw",
      "https://www.youtube.com/embed/6CIvSZ3LWFc",
      "https://www.youtube.com/embed/1Icy4Db8gMY",
      // "https://www.youtube.com/embed/AWM5OTm89Xo?si=twU-P--PM3mUJcK_",
      // "https://www.youtube.com/embed/5E8yXugWj_Y?si=ASEk53OMeKtZOvnO",
      // "https://www.youtube.com/embed/U9BVgvs2cDQ?si=TNuId68vZc2EWmb1",
    ],
    homeimage1: House1,

    homeimage2: House2,
  },
  {
    id: 2,
    type: "For Sale",
    title: "CITY VIEW STUDIO APARTMENTS",
    image: House,
    agentImage:
      "https://images.arrivedhomes.com/properties/541/ea9b0425a74167fae835bf091dfc613a.jpg",
    agentName: "Agent Yomi Ojo",
    postedDate: "1/03/26",
    mode: "Available",
    bgColor: "#E01A2D1A",
    color: "#E01A2D",
    location: "",
    price: "N200m",
    originalPrice: "",
    rating: 5,
    reviews: 47,
    status: "Available",
    description: "CITY VIEW STUDIO APARTMENTS",
    fullDescription: `
-----------------------------------
*Reportage Tower Price Update*

*CITYVIEW*
Studio Apartment  - SOLD OUT
1 Bedroom Apartment:  $199,000 - $228,000
2 Bedroom Apartment: $299,000  - $343,000

*LAGOON VIEW*
Studio Apartment: SOLD OUT
1 Bedroom Apartment: $210,000  - $237,000
2 Bedroom Apartment: $314,000  - $358,000
3 Bedroom Apartment: $424,000 - $464,000
`,
    videos: [
      "https://www.youtube.com/embed/AWM5OTm89Xo?si=twU-P--PM3mUJcK_",
      "https://www.youtube.com/embed/5E8yXugWj_Y?si=ASEk53OMeKtZOvnO",
      "https://www.youtube.com/embed/U9BVgvs2cDQ?si=TNuId68vZc2EWmb1",
    ],
    homeimage1: House3,
  },
];
const PropertyListing = () => {
  return (
    <section className="bg-orange-100 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-800">
            The latest properties on our Portfolio
          </h2>
          <p className="mt-4 text-[#7c8aaa]">
            Discover premium listings tailored for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link
              key={property.id}
              to={`/PropertyDetails/${property.id}`}
              className="bg-orange-600 rounded-lg p-4 hover:scale-105 transition"
            >
              {/* Image (only if exists) */}
              <div className="relative h-auto w-full">
                {property.image && (
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-60 w-full object-cover rounded-md"
                  />
                )}
                <div
                  className="absolute bottom-[-1%] right-[8%] flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-solid border-[#f2f2f7]"
                  style={{ backgroundColor: property.color }}
                >
                  <img
                    src="https://assets.website-files.com/647e296b89c00bcfafccf696/647e2bc55406ff0f6d8d2f1c_Vector.svg"
                    alt="Blog Icon Image"
                  />
                  <p className="text-xs">{property.mode}</p>
                </div>
              </div>
              <div
                className={`rounded-lg px-2 w-auto mt-4 py-1.5 text-[#2d6ae0]`}
                style={{ backgroundColor: property.bgColor }}
              >
                <p className="font-semibold" style={{ color: property.color }}>
                  {property.type}
                </p>
              </div>

              <h3 className="mt-4 font-bold">{property.title}</h3>
              <p className="text-gray-100 whitespace-pre-line">
                {property.fullDescription}
              </p>
              <div className="h-px w-full bg-black my-3"></div>
              <div className="flex flex-row items-center">
                <img
                  src={property.agentImage}
                  alt="Blog Author Image"
                  className="mr-4 inline-block h-8 w-8 rounded-full"
                />
                <div className="flex flex-row items-center">
                  <h6 className="mr-1 text-xs font-bold md:m-0 md:text-base">
                    {property.agentName}
                  </h6>
                  <div className="flex items-start lg:items-center">
                    <p className="ml-2 mr-2 text-sm text-gray max-[991px]:hidden">
                      -
                    </p>
                    <p className="text-xs font-medium text-gray">
                      Posted {property.postedDate}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="#"
            className="rounded-full bg-indigo-700 px-6 py-4 font-bold text-white hover:bg-[#081631] transition"
          >
            Load More Properties
          </Link>
        </div>
      </div>

      <Chatbot />
    </section>
  );
};

export default PropertyListing;
