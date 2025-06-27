export default function OurFocusSection() {
  return (
    <section className="bg-[#091221] text-white py-24 px-6" id="ourFocus">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-left text-blue-200">
          Our <span className="text-white">Focus</span>
        </h2>

      <div className="max-w-6xl mx-auto space-y-20">

        {/* Block 1 */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="relative">
            <div className="absolute -bottom-6 -left-6 w-60 h-72 bg-gradient-to-br from-[#003973] to-[#E5E5BE] rounded-[30px] blur-[60px] opacity-30 z-0"></div>
            <img
              src="/robotic-arm.webp"
              alt="IOT Arm"
              className="relative z-10 rounded-[20px] shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-neutral-200 mb-4">
              IOT And <br /> Automation Solutions
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Sri Lanka’s first Robotics & AI Lab, driving innovation in smart mobility, physical AI,
              and industrial automation. Sri Lanka’s first Robotics & AI Lab, driving innovation in smart mobility, physical AI, and industrial automation.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid md:grid-cols-2 items-center gap-10 md:flex-row-reverse">
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-60 h-72 bg-gradient-to-br from-[#003973] to-[#E5E5BE] rounded-[30px] blur-[60px] opacity-30 z-0"></div>
            <img
              src="/ai-car.webp"
              alt="AI Car"
              className="relative z-10 rounded-[20px] shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-neutral-200 mb-4">
              Next-Gen Sensing
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Sri Lanka’s first Robotics & AI Lab, driving innovation in smart mobility, physical AI,
              and industrial automation. Sri Lanka’s first Robotics & AI Lab, driving innovation in smart mobility, physical AI, and industrial automation.
            </p>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
