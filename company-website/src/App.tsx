import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectShowcase from "./components/ProjectShowcase";


function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectShowcase />
    </div>
  );
}

export default App;
