import Hero from "../components/Hero";
import HowitWorks from "../components/HowitWorks";
import Offer from "../components/Offer";
import Results from "../components/Results";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import Chatbot from "../components/Chatbot";
import Hero2 from "../components/Hero2";
import AboutSection from "../components/AboutSection";

export const Homepage = () => {
  return (
    <>
      <Hero2 />
      <AboutSection />
      {/* <HowitWorks /> */}
      {/* <Offer /> */}
      <Results />
      <Testimonial />
      <NewsLetter />
      <Chatbot />
    </>
  );
};
