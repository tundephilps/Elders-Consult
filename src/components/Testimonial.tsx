import tayo from "../assets/tayo.jpg";
import adeyemi from "../assets/adeyem.jpg";
import tunde from "../assets/tunde.jpg";

interface TestimonialData {
  text: string;
  author: string;
  position: string;
  imageSrc: string;
}

const testimonialData: TestimonialData[] = [
  {
    text: "Outstanding service! The Tulet real estate  made finding our dream home a breeze. Professional, efficient, and reliable.",
    author: "Tayo",
    position: "Lawyer",
    imageSrc: tayo,
  },
  {
    text: "I can't thank the real estate team enough. They turned our house-hunting into a delightful experience with their expertise and friendliness",
    author: "Adeyemi",
    position: "Business Man",
    imageSrc: adeyemi,
  },
  // Add more testimonials here
  {
    text: "Absolutely top-notch! Tulet Oaks exceeded all our expectations. We found the perfect property and couldn't be happier. Highly recommended!",
    author: "Tunde Philps",
    position: "Developer",
    imageSrc: tunde,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-orange-300 text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="flex flex-col items-center">
          <div className="mb-8 w-full md:mb-12 lg:mb-16">
            <div className=" text-center flex items-center justify-center, flex-col">
              <h2 className="mb-5 text-3xl font-bold md:text-5xl">
                What our clients are saying
              </h2>
              <div className="mx-auto w-full max-w-lg">
                <p className="tracking-[0.2px] text-[#7c8aaa]">
                  Lorem ipsum dolor sit amet elit ut aliquam
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:mb-16 md:grid-cols-3 lg:mb-20">
            {testimonialData.map((testimonial, index) => (
              <div
                key={index}
                className="grid gap-6 rounded-lg bg-orange-600 p-8"
              >
                <div className="flex items-center justify-between text-[#2d6ae0]">
                  <div className="flex text-[#2d6ae0]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="mr-1 w-3.5 flex-none">
                        <svg
                          width="14"
                          height="13"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552591 4.18562 1.63091 3.86775L3.63291 3.27759C3.98591 3.17354 4.29224 2.95097 4.50029 2.6474L5.68021 0.92574Z"
                            fill="#F6E05E"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#636262] text-sm">
                    {testimonial.position}
                  </p>
                </div>
                <p className="text-xl font-bold">{testimonial.text}</p>
                <div className="mt-3 flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.imageSrc}
                    alt={`Testimonial by ${testimonial.author}`}
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#636262]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
