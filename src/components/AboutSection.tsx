import { useEffect, useRef, useState } from "react";
import House2 from "../assets/House2.png";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface StatItemProps extends Stat {
  trigger: boolean;
}

const stats: Stat[] = [
  { value: 8, suffix: "K+", label: "Houses Available" },
  { value: 6, suffix: "K+", label: "Houses Sold" },
  { value: 2, suffix: "K+", label: "Trusted Agents" },
];

function useCountUp(
  target: number,
  duration: number = 1800,
  trigger: boolean
): number {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

function StatItem({ value, suffix, label, trigger }: StatItemProps) {
  const count = useCountUp(value, 1600, trigger);
  return (
    <div className="flex flex-col gap-1">
      <span
        className="text-4xl font-bold text-gray-900"
        style={{
          fontFamily: "'Playfair Display', serif",
          letterSpacing: "-0.02em",
        }}
      >
        {count}
        {suffix}
      </span>
      <span className="text-sm text-gray-400 font-normal">{label}</span>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTriggered(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full lg:px-16 px-4 py-20"
      style={{
        backgroundColor: "#FAF7F2",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="mx-auto flex lg:flex-row flex-col items-center gap-16">
        {/* Left: House image */}
        <img src={House2} alt="Dream Home" className="h-auto w-1/2" />

        {/* Right: Text + Stats */}
        <div className="flex flex-col gap-6">
          <h2 className="lg:text-5xl text-4xl text-uppercase font-bold text-[#3b2f2f] leading-tight">
            We help you to maintain and manage your facilities
          </h2>

          <p
            className="text-sm text-gray-500 leading-relaxed"
            style={{ maxWidth: "380px" }}
          >
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring efficient management
            and maintenance of your property become a reality.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-12 mt-2">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} trigger={triggered} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
