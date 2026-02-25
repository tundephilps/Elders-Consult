import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo2.png";

const MobileHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <section className="block lg:hidden">
      <div className=" bg-orange-300 py-2 text-white [border-bottom:1px_solid_rgb(91,_103,_130)]">
        <nav className="font-inter mx-auto h-auto  lg:relative lg:top-0">
          <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
            <Link to="#">
              <img src={Logo} alt="" className="inline-block h-14 " />
            </Link>

            {/* Burger Menu */}
            <Link
              to="#"
              className="absolute right-5 top-14 lg:hidden animate-bounce"
              onClick={toggleMenu}
            >
              <svg
                width="1.25rem"
                height="1rem"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
            {isMenuOpen && (
              <div className="  mt-10 flex flex-col items-start space-y-8 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0">
                <Link
                  to=""
                  className="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
                >
                  Home
                </Link>
                <Link
                  to="/AboutUs"
                  className="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
                >
                  AboutUs
                </Link>
                <Link
                  to="/FAQ"
                  className="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
                >
                  FAQ
                </Link>
                <Link
                  to="/Terms"
                  className="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
                >
                  Terms
                </Link>
                <Link
                  to="/ContactUs"
                  className="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
                >
                  Contact Us
                </Link>
                <Link
                  to="/PropertyListing"
                  className="2 ml-5 rounded-full bg-orange-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-[#2d6ae0] md:ml-10 lg:ml-4"
                >
                  Property Listings
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default MobileHeader;
