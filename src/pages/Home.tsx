import { useEffect, useState, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const ProjectShowcase = lazy(() => import("../components/ProjectShowcase"));
const OurFocusSection = lazy(() => import("../components/OurFocusSection"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const Footer = lazy(() => import("../components/Footer"));

export default function Home() {
  const [animationsReady, setAnimationsReady] = useState(false);

  // Wait until preloader is removed from DOM
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (!preloader) {
      setAnimationsReady(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (!document.getElementById("preloader")) {
        observer.disconnect();
        setAnimationsReady(true);
      }
    });

    observer.observe(document.body, { childList: true });
    return () => observer.disconnect();
  }, []);

  // Initialize AOS after preloader is gone
  useEffect(() => {
    if (animationsReady) {
      AOS.init({ duration: 800, once: true });
    }
  }, [animationsReady]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <OurFocusSection />
        <ProjectShowcase />
        <ServicesSection />
        <Footer />
      </Suspense>
    </>
  );
}
