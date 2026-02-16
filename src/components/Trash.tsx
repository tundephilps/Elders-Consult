import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";

interface Property {
  type: string;
  image: string;
  agentImage: string;
  agentName: string;
  postedDate: string;
  bgColor: string;
  description: string;
  color: string;
}

const properties: Property[] = [
  {
    type: "For Sale",
    image:
      "https://images.arrivedhomes.com/properties/541/ea9b0425a74167fae835bf091dfc613a.jpg?tr=dpr-auto,pr-true,di-logo_icon_CwvvbRzw9.svg,c-maintain_ratio,ar-5-3,w-692",
    agentImage:
      "https://images.arrivedhomes.com/properties/541/ea9b0425a74167fae835bf091dfc613a.jpg?tr=dpr-auto,pr-true,di-logo_icon_CwvvbRzw9.svg,c-maintain_ratio,ar-5-3,w-692",
    agentName: "Agent Tunji",
    postedDate: "1/09/23",
    bgColor: "#2d6ae01a",
    color: "#2d6ae0",
    description:
      "Duplex at Lake View Estate, with 4 bedrooms, 4 toilets, 600sq compound, a swimming pool with parking garage",
  },
  {
    type: "Rental",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/468867448.jpg?k=0f7b7af2588987012efe825a199fd26e765400c95c4ea2d187202c01694c010f&o=&hp=1",
    agentImage:
      "https://assets.website-files.com/647e296b89c00bcfafccf696/647f199ab66979935fa34903_Ellipse%2015-1.png",
    agentName: "Agent Eniola",
    postedDate: "2/23/23",
    bgColor: "#b984121a",
    color: "#e7ac2f",
    description:
      "Duplex at Lake View Estate, with 4 bedrooms, 4 toilets, 600sq compound, a swimming pool with parking garage",
  },
  {
    type: "Short Let",
    image: "https://wakaholic.com/wp-content/uploads/2021/01/IMG_8276.png",
    agentImage:
      "https://assets.website-files.com/647e296b89c00bcfafccf696/647f1999f67c0926f8b9ecfc_Ellipse%2015-2.png",
    agentName: "Agent Lola",
    postedDate: "6 mins ago",
    bgColor: "#31b3d21f",
    color: "#31b3d2",
    description:
      "Duplex at Lake View Estate, with 4 bedrooms, 4 toilets, 600sq compound, a swimming pool with parking garage",
  },
];

const PropertyListing = () => {
  return (
    <section className="bg-[#FFD750] bg-cover bg-center bg-no-repeat text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center">
          <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold md:text-5xl">
              The latest properties on our Portfolio
            </h2>
            <div className="mx-auto mt-4 max-w-[528px]">
              <p className="text-[#7c8aaa]">
                Lorem ipsum dolor sit amet elit ut aliquam
              </p>
            </div>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-16 md:grid-cols-3 lg:mb-20">
            {properties.map((property, index) => (
              <Link
                to="PropertyDetails"
                className="flex flex-col gap-4 rounded-md bg-[#CCAA00] px-4 py-8 text-white md:p-4"
                key={index}
              >
                <div className="relative h-full w-full">
                  <img
                    src={property.image}
                    alt="Blog Post Image"
                    className="inline-block h-60 w-full rounded-md object-cover"
                  />
                  <div
                    className="absolute bottom-[-10%] right-[8%] flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-solid border-[#f2f2f7]"
                    style={{ backgroundColor: property.color }}
                  >
                    <img
                      src="https://assets.website-files.com/647e296b89c00bcfafccf696/647e2bc55406ff0f6d8d2f1c_Vector.svg"
                      alt="Blog Icon Image"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-col items-start gap-5">
                  <div
                    className={`rounded-lg px-2 py-1.5 text-[#2d6ae0]`}
                    style={{ backgroundColor: property.bgColor }}
                  >
                    <p
                      className="font-semibold"
                      style={{ color: property.color }}
                    >
                      {property.type}
                    </p>
                  </div>
                  <p className="font-bold">{property.description}</p>
                  <div className="h-px w-full bg-black"></div>
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
                        <p className="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden">
                          -
                        </p>
                        <p className="text-xs font-medium text-[#7c8aaa]">
                          Posted {property.postedDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <a
            href="#"
            className="rounded-full bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]"
          >
            Load More Properties
          </a>
        </div>
      </div>
      <Chatbot />
    </section>
  );
};

export default PropertyListing;
