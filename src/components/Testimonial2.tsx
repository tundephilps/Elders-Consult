import { useState } from "react";
import { IoChevronBack, IoChevronForward, IoStar } from "react-icons/io5";
import tayo from "../assets/Test1.jpg";
import adeyemi from "../assets/Test2.jpg";
import tunde from "../assets/tunde.jpg";

interface TestimonialData {
  text: string;
  author: string;
  position: string;
  imageSrc: string;
  rating?: number;
  location?: string;
  accentColor?: string;
  roomGradient?: string;
}

const testimonials: TestimonialData[] = [
  {
    text: "Outstanding service! The Elders Consult real estate made finding our dream home a breeze. Professional, efficient, and reliable.",
    author: "Oludare Koleade",
    position: "Lawyer",
    imageSrc: tayo,
    rating: 4.9,
    location: "Lagos",
    accentColor: "#b8906a",
    roomGradient:
      "linear-gradient(135deg, #c8a888 0%, #e8d0b8 50%, #d8b898 100%)",
  },
  {
    text: "I can't thank the real estate team enough. They turned our house-hunting into a delightful experience with their expertise and friendliness.",
    author: "Faruq Lawal",
    position: "Business Man",
    imageSrc: adeyemi,
    rating: 4.8,
    location: "Abuja",
    accentColor: "#8898a8",
    roomGradient:
      "linear-gradient(135deg, #a8b8c8 0%, #d8e0e8 50%, #c8d8e0 100%)",
  },
  {
    text: "Absolutely top-notch! Elders Consult exceeded all our expectations. We found the perfect property and couldn't be happier. Highly recommended!",
    author: "Tunde Philps",
    position: "Developer",
    imageSrc: tunde,
    rating: 5.0,
    location: "Ibadan",
    accentColor: "#c8a078",
    roomGradient:
      "linear-gradient(135deg, #d8c0a8 0%, #f0e0d0 50%, #e8d0b8 100%)",
  },
];

// Room interior SVG illustration per card
function RoomScene({ accent }: { gradient: string; accent: string }) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect width="280" height="180" fill="url(#roomGrad)" rx="12" />
      <defs>
        <linearGradient
          id="roomGrad"
          x1="0"
          y1="0"
          x2="280"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect
        x="0"
        y="128"
        width="280"
        height="52"
        fill={accent}
        opacity="0.18"
      />
      <rect
        x="170"
        y="18"
        width="90"
        height="70"
        rx="6"
        fill="white"
        opacity="0.35"
      />
      <line
        x1="215"
        y1="18"
        x2="215"
        y2="88"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <line
        x1="170"
        y1="53"
        x2="260"
        y2="53"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <rect
        x="165"
        y="14"
        width="14"
        height="76"
        rx="4"
        fill={accent}
        opacity="0.35"
      />
      <rect
        x="261"
        y="14"
        width="12"
        height="76"
        rx="4"
        fill={accent}
        opacity="0.35"
      />
      <rect
        x="20"
        y="88"
        width="130"
        height="56"
        rx="6"
        fill="white"
        opacity="0.55"
      />
      <rect
        x="20"
        y="88"
        width="130"
        height="22"
        rx="6"
        fill={accent}
        opacity="0.35"
      />
      <rect
        x="30"
        y="92"
        width="32"
        height="16"
        rx="4"
        fill="white"
        opacity="0.85"
      />
      <rect
        x="70"
        y="92"
        width="32"
        height="16"
        rx="4"
        fill="white"
        opacity="0.85"
      />
      <rect
        x="20"
        y="108"
        width="130"
        height="6"
        rx="2"
        fill={accent}
        opacity="0.2"
      />
      <rect
        x="155"
        y="112"
        width="32"
        height="32"
        rx="4"
        fill={accent}
        opacity="0.3"
      />
      <rect
        x="163"
        y="100"
        width="16"
        height="14"
        rx="2"
        fill="white"
        opacity="0.5"
      />
      <rect
        x="168"
        y="112"
        width="6"
        height="8"
        rx="1"
        fill={accent}
        opacity="0.4"
      />
      <rect
        x="230"
        y="128"
        width="8"
        height="18"
        rx="2"
        fill={accent}
        opacity="0.4"
      />
      <ellipse
        cx="234"
        cy="122"
        rx="16"
        ry="14"
        fill="#6aaa60"
        opacity="0.55"
      />
      <ellipse cx="226" cy="118" rx="10" ry="9" fill="#5a9a50" opacity="0.5" />
      <ellipse cx="85" cy="152" rx="60" ry="12" fill={accent} opacity="0.2" />
    </svg>
  );
}

function Avatar({
  name,
  imageSrc,
  accent,
}: {
  name: string;
  imageSrc: string;
  accent: string;
}) {
  return (
    <div
      className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2"
      style={{ borderColor: accent }}
    >
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to initials if image fails
          const el = e.currentTarget;
          el.style.display = "none";
          const parent = el.parentElement!;
          parent.style.backgroundColor = accent;
          parent.style.display = "flex";
          parent.style.alignItems = "center";
          parent.style.justifyContent = "center";
          parent.innerHTML = `<span style="color:white;font-size:14px;font-weight:700">${name
            .split(" ")
            .map((n) => n[0])
            .join("")}</span>`;
        }}
      />
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <IoStar
          key={i}
          className="text-xs"
          style={{ color: i <= Math.round(rating) ? "#e8a030" : "#d8d0c8" }}
        />
      ))}
      <span className="text-xs text-gray-500 ml-1">{rating}</span>
    </div>
  );
}

export default function Testimonial2() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () =>
    [0, 1, 2].map((offset) => testimonials[(current + offset) % total]);

  return (
    <section
      className="w-full lg:px-10 px-4 py-20"
      style={{
        backgroundColor: "#FAF7F2",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="lg:px-16 px-4 mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <h2 className="lg:text-5xl text-4xl text-uppercase text-center font-bold text-[#3b2f2f] leading-tighttext-center leading-tight">
          What People Say
          <br />
          About Us
        </h2>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5 w-full">
          {getVisible().map((t, idx) => (
            <div
              key={t.author + idx}
              className="flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              style={{ backgroundColor: "#EDE8E0" }}
            >
              {/* Room image */}
              <div className="w-full h-36 overflow-hidden">
                <RoomScene gradient={t.roomGradient!} accent={t.accentColor!} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-4">
                {/* Author row */}
                <div className="flex items-center gap-3">
                  <Avatar
                    name={t.author}
                    imageSrc={t.imageSrc}
                    accent={t.accentColor!}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">
                      {t.author}
                    </span>
                    <span className="text-xs text-gray-400">{t.position}</span>
                  </div>
                  <div className="ml-auto">
                    <StarRating rating={t.rating!} />
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
          >
            <IoChevronBack className="text-sm" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
          >
            <IoChevronForward className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
