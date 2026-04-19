import { useState } from "react";
import { IoMailOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

export default function NewsLetter2() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section
      className="w-full px-10 py-24"
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-7">
        {/* Heading */}
        <h2 className="lg:text-5xl text-4xl text-uppercase font-bold text-[#3b2f2f] leading-tight leading-tight text-center">
          Do You Have Any Questions?
          <br />
          Get Help From Us
        </h2>

        {/* Support options */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-gray-500">
            <IoCheckmarkCircleOutline className="text-base shrink-0 text-gray-400" />
            <span className="text-sm">Chat live with our support team</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <IoCheckmarkCircleOutline className="text-base shrink-0 text-gray-400" />
            <span className="text-sm">Browse our FAQ</span>
          </div>
        </div>

        {/* Email input row */}
        <div className="flex items-stretch w-full gap-3 mt-1">
          {/* Input */}
          <div
            className="flex items-center gap-2 flex-1 px-4 py-3 rounded-lg"
            style={{ backgroundColor: "#EDE8E0" }}
          >
            <IoMailOutline className="text-gray-400 text-base shrink-0" />
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
            />
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="px-7 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 shrink-0"
            style={{ backgroundColor: submitted ? "#5a8a50" : "#3d2c20" }}
          >
            {submitted ? "Sent ✓" : "Submit"}
          </button>
        </div>
      </div>
    </section>
  );
}
