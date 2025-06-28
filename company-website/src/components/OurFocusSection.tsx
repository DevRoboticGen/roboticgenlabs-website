export default function OurFocusSection() {
  return (
    <section className="bg-[#0B111B] text-white py-24 px-6" id="ourFocus">
      <div className="max-w-6xl mx-auto">
        <h2 className="be-vietnam-pro-regular text-4xl mb-14 text-center">
          <span className="bg-gradient-to-b from-[#9CC5F2] to-[#5278A9] bg-clip-text text-transparent">
            Our Focus
          </span>
        </h2>

        <div className="max-w-6xl mx-auto space-y-20">
          {/* Block 1 */}
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Text first, image second for right-side image */}
            <div>
              <h3 className="our-focus-topic-header">
                <span className="our-focus-topic-span">
                  IOT And <br /> Automation Solutions
                </span>
              </h3>
              <p className="our-focus-paragraph">
                <span className="our-focus-span">
                  We specialize in designing custom IoT architectures and
                  automation systems that bridge the physical and digital
                  worlds. Our end-to-end solutions help industries monitor,
                  optimize, and automate operations with real-time data and
                  intelligent control.
                </span>
              </p>
            </div>
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-60 h-72 bg-gradient-to-br from-[#003973] to-[#E5E5BE] rounded-[30px] blur-[60px] opacity-30 z-0"></div>
              <img
                src="/robotic-arm.webp"
                alt="IOT Arm"
                width={446}
                height={584}
                className="relative z-10 rounded-[20px] shadow-2xl transition-transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/10"
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid md:grid-cols-2 items-center gap-10 md:flex-row-reverse">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-60 h-72 bg-gradient-to-br from-[#003973] to-[#E5E5BE] rounded-[30px] blur-[60px] opacity-30 z-0"></div>
              <img
                src="/ai-car.webp"
                alt="AI Car"
                width={446}
                height={584}
                className="relative z-10 rounded-[20px] shadow-2xl transition-transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/10"
              />
            </div>
            <div>
              <h3 className="our-focus-topic-header">
                <span className="our-focus-topic-span">Next-Gen Sensing</span>
              </h3>
              <p className="our-focus-paragraph">
                <span className="our-focus-span">
                  We develop advanced sensing systems that go beyond traditional
                  perception. From multi-modal sensors to context-aware fusion,
                  our technologies give machines the ability to perceive,
                  interpret, and interact with the world around them with
                  human-like precision.
                </span>
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Text first, image second for right-side image */}
            <div>
              <h3 className="our-focus-topic-header">
                <span className="our-focus-topic-span">
                  Physical <br /> AI Applications
                </span>
              </h3>
              <p className="our-focus-paragraph">
                <span className="our-focus-span">
                  Physical AI is the next evolution in embodied intelligence —
                  where software meets the physical world. Roboticgen builds
                  systems that can sense, learn, adapt, and act. We bring AI
                  into motion with robotics that think and respond like living
                  systems.
                </span>
              </p>
            </div>
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-60 h-72 bg-gradient-to-br from-[#003973] to-[#E5E5BE] rounded-[30px] blur-[60px] opacity-30 z-0"></div>
              <img
                src="/ai-robot.webp"
                alt="Ai Robot"
                width={446}
                height={584}
                className="relative z-10 rounded-[20px] shadow-2xl transition-transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/10"
              />
            </div>
          </div>

          {/* Block 4 */}
          <div className="grid md:grid-cols-2 items-center gap-10 md:flex-row-reverse">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-60 h-72 bg-gradient-to-br from-[#003973] to-[#E5E5BE] rounded-[30px] blur-[60px] opacity-30 z-0"></div>
              <img
                src="/obo-dog.webp"
                alt="OBO Dog"
                width={446}
                height={584}
                className="relative z-10 rounded-[20px] shadow-2xl transition-transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/10"
              />
            </div>
            <div>
              <h3 className="our-focus-topic-header">
                <span className="our-focus-topic-span">
                  Smart <br /> Mobile Robotics
                </span>
              </h3>
              <p className="our-focus-paragraph">
                <span className="our-focus-span">
                  Our mobile robotic systems are designed to navigate, explore,
                  and interact in dynamic environments. From warehouse
                  automation to field exploration, we create smart platforms
                  that move with purpose safely, efficiently, and autonomously.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
