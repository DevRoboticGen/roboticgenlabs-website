import { useEffect , lazy, Suspense} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const ProjectShowcase = lazy(() => import("./components/ProjectShowcase"));
const OurFocusSection = lazy(() => import("./components/OurFocusSection"));

function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
      <OurFocusSection />
      <ProjectShowcase />
      </Suspense>
    </div>
  );
}

export default App;
