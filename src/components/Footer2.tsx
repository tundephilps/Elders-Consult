// import { TbBuildingEstate } from "react-icons/tb";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGO22.png";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    heading: "About",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Resources", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    heading: "Find Us",
    links: [
      { label: "Events", href: "#" },
      { label: "Locations", href: "#" },
      { label: "Newsletter", href: "#" },
    ],
  },
];

const socials = [
  { label: "Instagram", icon: IoLogoInstagram, href: "#" },
  { label: "Facebook", icon: IoLogoFacebook, href: "#" },
  { label: "Twitter (x)", icon: RiTwitterXLine, href: "#" },
];

export default function Footer2() {
  return (
    <footer
      className="w-full lg:px-16 px-4 py-14"
      style={{
        backgroundColor: "#E8E0D8",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="mx-auto grid grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
          <Link to="#">
            <img src={Logo} alt="" className="inline-block  w-64" />
          </Link>
          <p className="text-sm text-gray-600 leading-relaxed max-w-[160px]">
            Bringing you closer to your dream home, one click at a time.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-gray-900">
              {col.heading}
            </h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-gray-900">Our Social</h4>
          <ul className="flex flex-col gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Icon className="text-base shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom divider + copyright */}
      <div className="mt-12 pt-6 border-t border-[#d0c8c0]">
        <p className="text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Dwello. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
