import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ui/project-card";

import projectImage from "../assets/stem-kit.webp";
import etmsImage from "../assets/etms.webp";
import smartGuardImage from "../assets/smart-guard.webp";
import oboDogImage from "../assets/obo-dog2.webp";

const projectsData = [
  {
    title: "Transport Management Solution",
    desc: "A smart, AI-powered transport management platform designed to optimize fleet movement, enhance route planning, and enable real-time tracking for logistics and mobility services.",
    img: etmsImage,
  },
  {
    title: "Premise Security Tracking",
    desc: "An intelligent guard patrol monitoring solution that uses IoT and real-time tracking to ensure security personnel accountability, optimize patrol routes, and enhance premises safety through data-driven insights.",
    img: smartGuardImage,
  },
  {
    title: "Stem Learner Kits Development",
    desc: "Hands-on educational kits built for the next generation of innovators combining electronics, coding, and robotics to make STEM learning immersive, accessible, and fun for students and educators.",
    img: projectImage,
  },
  {
    title: "Obo Dog : Quadrupod Robot",
    desc: "A dynamic, four-legged robotic platform engineered for real-world agility and mobility designed to simulate natural movement, support research, and explore applications in search, rescue, and physical AI.",
    img: oboDogImage,
  },
];

// Responsive visible count
function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(
    typeof window !== "undefined" && window.innerWidth < 640 ? 1 : 3
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 640 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return visibleCount;
}

function getClonedSlides(data: typeof projectsData, visibleCount: number) {
  const last = data.slice(-visibleCount);
  const first = data.slice(0, visibleCount);
  return [...last, ...data, ...first];
}

export default function ProjectShowcase() {
  const visibleCount = useVisibleCount();
  const slides = getClonedSlides(projectsData, visibleCount);
  const [index, setIndex] = useState(visibleCount);
  const [transition, setTransition] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset index when visibleCount changes
  useEffect(() => {
    setIndex(visibleCount);
  }, [visibleCount]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line
  }, [index, visibleCount]);

  const handleTransitionEnd = () => {
    if (index === slides.length - visibleCount) {
      setTransition(false);
      setIndex(visibleCount);
    }
    if (index === 0) {
      setTransition(false);
      setIndex(slides.length - 2 * visibleCount);
    }
  };

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 20);
    }
  }, [transition]);

  const handlePrev = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIndex((prev) => prev - 1);
    setTransition(true);
  };

  const handleNext = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIndex((prev) => prev + 1);
    setTransition(true);
  };

  return (
    <section
      className="bg-[#0B111B] text-white py-12 px-2 sm:px-6"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="be-vietnam-pro-regular text-4xl mb-14 text-center">
          <span className="bg-gradient-to-b from-[#9CC5F2] to-[#5278A9] bg-clip-text text-transparent">
            Project Showcase
          </span>
        </h2>
        <div
          className="relative w-full overflow-hidden"
          role="region"
          aria-roledescription="carousel"
        >
          {/* Arrows */}
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#1a2332] hover:bg-[#22304a] rounded-full p-2 shadow transition"
            style={{ outline: "none" }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                d="M13 16l-5-6 5-6"
                stroke="#9CC5F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#1a2332] hover:bg-[#22304a] rounded-full p-2 shadow transition"
            style={{ outline: "none" }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                d="M7 4l5 6-5 6"
                stroke="#9CC5F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`flex ${
              transition ? "transition-transform duration-500 ease-out" : ""
            }`}
            style={{
              transform: `translateX(-${(index * 100) / visibleCount}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((proj, idx) => (
              <div
                key={idx}
                role="group"
                aria-roledescription="slide"
                className={`p-2 sm:p-4`}
                style={{
                  minWidth: `${100 / visibleCount}%`,
                  maxWidth: `${100 / visibleCount}%`,
                }}
              >
                <ProjectCard
                  title={proj.title}
                  desc={proj.desc}
                  img={proj.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
