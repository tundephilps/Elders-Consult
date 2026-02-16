import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";

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
            <Link
              to="PropertyDetails"
              className="flex flex-col gap-4 rounded-md bg-[#CCAA00] px-4 py-8 text-white md:p-4"
            >
              <div className="relative h-full w-full">
                <img
                  src="https://images.arrivedhomes.com/properties/541/ea9b0425a74167fae835bf091dfc613a.jpg?tr=dpr-auto,pr-true,di-logo_icon_CwvvbRzw9.svg,c-maintain_ratio,ar-5-3,w-692"
                  alt="Blog Post Image"
                  className="inline-block h-60 w-full rounded-md object-cover"
                />
                <div className="absolute bottom-[-10%] right-[8%] flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-solid border-[#f2f2f7] bg-[#2d6ae0]">
                  <img
                    src="https://assets.website-files.com/647e296b89c00bcfafccf696/647e2bc55406ff0f6d8d2f1c_Vector.svg"
                    alt="Blog Icon Image"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col items-start gap-5">
                <div className="rounded-lg bg-[#2d6ae01a] px-2 py-1.5 text-[#2d6ae0]">
                  <p className="font-semibold">For Sale</p>
                </div>
                <p className="font-bold">
                  Duplex at Lake View Estate, with 4 bedrroms, 4 toilet, 600sq
                  compund, a swimming pool with parking garage
                </p>
                <div className="h-px w-full bg-black"></div>
                <div className="flex flex-row items-center">
                  <img
                    src="https://images.arrivedhomes.com/properties/541/ea9b0425a74167fae835bf091dfc613a.jpg?tr=dpr-auto,pr-true,di-logo_icon_CwvvbRzw9.svg,c-maintain_ratio,ar-5-3,w-692"
                    alt="Blog Author Image"
                    className="mr-4 inline-block h-8 w-8 rounded-full"
                  />
                  <div className="flex flex-row items-center">
                    <h6 className="mr-3 text-sm font-bold md:m-0 md:text-base">
                      Agent Tunji
                    </h6>
                    <div className="flex items-start lg:items-center">
                      <p className="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden">
                        -
                      </p>
                      <p className="text-sm font-medium text-[#7c8aaa]">
                        Posted 1/09/23
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="PropertyDetails"
              className="flex flex-col gap-4 rounded-md bg-[#CCAA00] px-4 py-8 text-white md:p-4"
            >
              <div className="relative h-full w-full">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/468867448.jpg?k=0f7b7af2588987012efe825a199fd26e765400c95c4ea2d187202c01694c010f&o=&hp=1"
                  alt="Blog Post Image"
                  className="inline-block h-60 w-full rounded-md object-cover"
                />
                <div className="absolute bottom-[-10%] right-[8%] flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-solid border-[#f2f2f7] bg-[#ffce50]">
                  <img
                    src="https://assets.website-files.com/647e296b89c00bcfafccf696/647e2bc55406ff0f6d8d2f1c_Vector.svg"
                    alt="Blog Icon Image"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col items-start gap-5">
                <div className="rounded-lg bg-[#b984121a] px-2 py-1.5 text-[#e7ac2f]">
                  <p className="font-semibold">Rental</p>
                </div>
                <div className="font-bold">
                  Bungalow at Lake View Estate, with 4 bedrroms, 4 toilet, 600sq
                  compund, a swimming pool with parking garage
                </div>
                <div className="h-px w-full bg-black"></div>
                <div className="flex flex-row items-center">
                  <img
                    src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f199ab66979935fa34903_Ellipse%2015-1.png"
                    alt="Blog Author Image"
                    className="mr-4 inline-block h-8 w-8 rounded-full"
                  />
                  <div className="flex flex-row items-center">
                    <h6 className="mr-3 text-sm font-bold md:m-0 md:text-base">
                      Agent Eniola
                    </h6>
                    <div className="flex items-start lg:items-center">
                      <p className="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden">
                        -
                      </p>
                      <p className="text-sm font-medium text-[#7c8aaa]">
                        Posted 2/23/23
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="PropertyDetails"
              className="flex flex-col gap-4 rounded-md bg-[#CCAA00] px-4 py-8 text-white md:p-4"
            >
              <div className="relative h-full w-full">
                <img
                  src="https://wakaholic.com/wp-content/uploads/2021/01/IMG_8276.png"
                  alt="Blog Post Image"
                  className="inline-block h-60 w-full rounded-md object-cover"
                />
                <div className="just absolute bottom-[-10%] right-[8%] flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-solid border-[#f2f2f7] bg-[#38c5d0]">
                  <img
                    src="https://assets.website-files.com/647e296b89c00bcfafccf696/647e2bc55406ff0f6d8d2f1c_Vector.svg"
                    alt="Blog Icon Image"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col items-start gap-5">
                <div className="rounded-lg bg-[#31b3d21f] px-2 py-1.5 text-[#31b3d2]">
                  <p className="font-semibold">Short Let</p>
                </div>
                <div className="font-bold">
                  Spaceous 2 bedroom flat,2 toilet, 600sq compund, a swimming
                  pool with parking garage, kitchen, 24hrs electricity
                </div>
                <div className="h-px w-full bg-black"></div>
                <div className="flex flex-row items-center">
                  <img
                    src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1999f67c0926f8b9ecfc_Ellipse%2015-2.png"
                    alt="Blog Author Image"
                    className="mr-4 inline-block h-8 w-8 rounded-full"
                  />
                  <div className="flex flex-row items-center">
                    <h6 className="mr-3 text-sm font-bold md:m-0 md:text-base">
                      Agent Lola
                    </h6>
                    <div className="flex items-start lg:items-center">
                      <p className="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden">
                        -
                      </p>
                      <p className="text-sm font-medium text-[#7c8aaa]">
                        6 mins ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <a
            href="#"
            className="rounded-full bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]"
          >
            Load More&nbsp;Properties
          </a>
        </div>
      </div>
      <Chatbot />
    </section>
  );
};

export default PropertyListing;
