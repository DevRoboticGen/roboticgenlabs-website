import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-[#0e162580]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="labs-logo"></div>
        <div className="hidden md:flex space-x-6">
          <a href="#ourFocus" className="text-[#9BC6EB] hover:text-white">
            Our Focus
          </a>
          <a href="#projects" className="text-[#9BC6EB] hover:text-white">
            Projects
          </a>
          <a href="#ourServices" className="text-[#9BC6EB] hover:text-white">
            Services
          </a>
          <a
            href="https://roboticgen.co"
            className="block text-[#9BC6EB] hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <a
            href="mailto:hello@roboticgen.co"
            className="block text-[#9BC6EB] hover:text-white"
          >
            Let's Talk
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-3xl text-[#9BC6EB]">&#9776;</span>
        </button>
      </div>
      {isOpen && (
        <div
          className="md:hidden fixed top-16 right-4 w-48 px-4 py-4 space-y-2 bg-[#0e1625] text-white rounded-lg shadow-lg transition-transform duration-300 ease-out"
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(-20px)",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <a href="#ourFocus" className="block text-[#9BC6EB] hover:text-white">
            Our Focus
          </a>
          <a href="#projects" className="block text-[#9BC6EB] hover:text-white">
            Projects
          </a>
          <a
            href="#ourServices"
            className="block text-[#9BC6EB] hover:text-white"
          >
            Services
          </a>
          <a
            href="https://roboticgen.co"
            className="block text-[#9BC6EB] hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <a
            href="mailto:hello@roboticgen.co"
            className="block text-[#9BC6EB] hover:text-white"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}
