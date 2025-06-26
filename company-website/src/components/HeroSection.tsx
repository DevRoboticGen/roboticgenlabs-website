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
        <div/>
    
                <div className="pt-8">
                    <button className="relative inline-flex h-12 min-w-[120px] overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-base">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-base font-medium text-white backdrop-blur-3xl">
                            Let's Talk
                        </span>
                    </button>
                </div>
      </div>
    </section>
  );
}