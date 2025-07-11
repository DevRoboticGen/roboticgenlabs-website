import BackgroundArcs from "./ui/BackgroundArcs";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative hero-bg min-h-screen text-white pt-28 pb-20 px-4 sm:px-6"
    >
      <div className="absolute inset-0 z-0">
        <BackgroundArcs />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/bg-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
            zIndex: 2,
            marginTop: "40px",
          }}
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          <TextGenerateEffect words="Intelligent Machines For A Better Tomorrow" />
        </h1>
        <p className="fade-in-text text-base sm:text-lg md:text-xl mb-6">
          Sri Lanka’s first Robotics & AI Lab, driving innovation in smart
          mobility,
          <br className="hidden sm:block" /> physical AI, and industrial
          automation.
        </p>
        <div />

        <div className="pt-2 flex justify-center">
          <a href="mailto:hello@roboticgen.co">
            <button
              className="relative inline-flex h-10 min-w-[120px] overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-base active:scale-95 transition-transform duration-100 hover:scale-110"
              type="button"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#121A25_0%,#485B74_50%,#485B74_100%)]" />
              <span
                className="manrope-250 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-6 py-2 text-base font-medium text-white backdrop-blur-3xl"
                style={{
                  background:
                    "linear-gradient(180deg, #121A25 0%, #45648B 100%)",
                }}
              >
                Let's Talk
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
