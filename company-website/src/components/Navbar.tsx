// src/components/Navbar.tsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="labs-logo"></div>
        <div className="hidden md:flex space-x-6">
          <a href="#careers" className="text-[#9BC6EB] hover:text-blue-600">Careers</a>
          <a href="#ourTeam" className="text-[#9BC6EB] hover:text-blue-600">Our Team</a>
          <a href="#letsTalk" className="text-[#9BC6EB] hover:text-blue-600">Let's Talk</a>
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
          <a href="#careers" className="block text-[#9BC6EB] hover:text-blue-600">Careers</a>
          <a href="#ourTeam" className="block text-[#9BC6EB] hover:text-blue-600">Our Team</a>
          <a href="#letsTalk" className="block text-[#9BC6EB] hover:text-blue-600">Let's Talk</a>
        </div>
      )}
    </nav>
  );
}