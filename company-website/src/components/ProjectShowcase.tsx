import React from "react";
import projectImage from "../assets/stem-kit.png"; // Use your image

export default function ProjectShowcase() {
  const projects = [
    {
      title: "Transport Management Solution",
      desc: "Sri Lanka’s first Robotics & AI Lab, driving innovation in smart mobility, physical AI, and industrial automation.",
    },
    {
      title: "Premise Security Tracking",
      desc: "Sri Lanka’s first Robotics & AI Lab, driving innovation in smart mobility, physical AI, and industrial automation.",
    },
    {
      title: "Stem Learner Kits Development",
      desc: "Sri Lanka’s first Robotics & AI Lab, driving innovation in smart mobility, physical AI, and industrial automation.",
      img: projectImage,
    },
  ];

  return (
    <section className="bg-[#091221] text-white py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-left text-blue-200">
          Project <span className="text-white">Showcase</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="rounded-3xl bg-[#0e1625] p-6 hover:scale-[1.02] transition-transform shadow-lg hover:shadow-blue-500/10"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {proj.img && (
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-34 h-34 object-contain mx-auto mb-4 hover:scale-105 transition-transform rounded-lg"
                />
              )}
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-400">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
