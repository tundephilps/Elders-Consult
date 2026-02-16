import { MdLocationPin, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="block bg-orange-300">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-full max-w-[560px]">
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-5xl">
              <span className="text-indigo-600">Safe & Secure</span> Real Estate
              Firm
            </h2>
          </div>
          <div className="mt-8 flex-none md:mt-0">
            <div className="mb-4 flex max-w-[272px] flex-row items-start gap-2">
              <MdLocationPin className="text-5xl text-indigo-600" />
              <p className="text-white">
                {" "}
                20 foyeke close, Niger River Basin, Ilorin, Kwara State, Nigeria
              </p>
            </div>
            <div className="mb-4 flex max-w-[272px] flex-row gap-2 items-start">
              <MdEmail className="text-3xl text-indigo-600" />
              <p className="text-white">Tuletoaks@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mb-20 mt-20 w-full [border-bottom:1px_solid_rgb(91,_103,_130)]"></div>

        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-center font-semibold sm:text-center md:mb-0">
            <a
              href="#"
              className="inline-block py-1.5 pr-6 text-[#636262] transition hover:text-white sm:py-2 sm:pr-6 lg:pr-12"
            >
              About
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 text-[#636262] transition hover:text-white sm:py-2 sm:pr-6 lg:pr-12"
            >
              Features
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 text-[#636262] transition hover:text-white sm:py-2 sm:pr-6 lg:pr-12"
            >
              Works
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 text-[#636262] transition hover:text-white sm:py-2 sm:pr-6 lg:pr-12"
            >
              Support
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 text-[#636262] transition hover:text-white sm:py-2 sm:pr-6 lg:pr-12"
            >
              Help
            </a>
          </div>
          <p className="text-[#636262]">
            © Copyright 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
