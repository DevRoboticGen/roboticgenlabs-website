import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesSection() {
  const services = [
    "Robotics Engineering",
    "Automation Engineering",
    "Hardware Development",
    "Software Development",
    "Product Design",
  ];

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="bg-[#0B111B] text-white py-12 px-6" id="ourServices">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="be-vietnam-pro-regular text-4xl mb-14 text-center">
          <span className="bg-gradient-to-b from-[#9CC5F2] to-[#5278A9] bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>

        <ul className="space-y-6">
          {services.map((service, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="text-left text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[#bcbcbc20] transition-all duration-300 hover:text-white hover:bg-none"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
