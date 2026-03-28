import { FiSearch, FiUser } from "react-icons/fi";
import { TbBuildingEstate } from "react-icons/tb";

const navLinks = ["Home", "Service", "Agents", "Contact"];

export default function Header2() {
  return (
    <nav
      className="w-full lg:px-16 py-4 flex items-center justify-between"
      style={{
        backgroundColor: "#FAF7F2",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-1.5 select-none">
        <TbBuildingEstate className="text-gray-800 text-xl" />
        <span
          className="text-lg font-semibold tracking-tight text-gray-900"
          style={{ letterSpacing: "-0.02em" }}
        >
          Dwello
        </span>
      </div>

      {/* Nav Links */}
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-normal"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-1"
          aria-label="Search"
        >
          <FiSearch className="text-base" />
        </button>
        <button
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-1"
          aria-label="Account"
        >
          <FiUser className="text-base" />
        </button>
        <button className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200 font-medium">
          Sign up
        </button>
      </div>
    </nav>
  );
}
