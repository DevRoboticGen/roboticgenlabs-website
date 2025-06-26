export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative hero-bg min-h-screen text-white pt-28 pb-20 px-6"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="font-Alexandria leading-tight text-[80px]">
          Shaping The Future of<br />Robotics & AI - Today
        </h1>
        <p className="text-Inter mt-6 text-lg text-gray-200">
          Sri Lanka’s first Robotics & AI Lab, driving innovation in smart mobility,<br /> physical AI, and industrial automation.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#services"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}