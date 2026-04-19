import { FiSearch, FiUser } from "react-icons/fi";
import Logo from "../assets/Hero.jpg";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "AboutUs", to: "/AboutUs" },
  { label: "FAQ", to: "/FAQ" },
  { label: "Terms", to: "/Terms" },
  { label: "Contact Us", to: "/ContactUs" },
];

export default function Header2() {
  return (
    <nav
      className="w-full lg:px-0 pt-0 lg:flex hidden items-center justify-between"
      style={{
        backgroundColor: "#f5efeb",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="inline-block w-96 rounded-md" />
      </Link>

      {/* Nav Links */}
      <ul className="flex items-center gap-8">
        {navLinks.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="bg-[#2B1b12] text-white text-sm px-5 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              {label}
            </Link>
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
        <Link
          to="/PropertyListing"
          className="bg-[#2B1b12] text-white text-sm px-5 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200 font-medium"
        >
          Property Listings
        </Link>
      </div>
    </nav>
  );
}
