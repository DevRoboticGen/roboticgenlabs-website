// src/components/Navbar.tsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="labs-logo"></div>
        <div className="hidden md:flex space-x-6">
          <a href="#careers" className="text-gray-700 hover:text-blue-600">Careers</a>
          <a href="#ourTeam" className="text-gray-700 hover:text-blue-600">Our Team</a>
          <a href="#letsTalk" className="text-gray-700 hover:text-blue-600">Let's Talk</a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-3xl">&#9776;</span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#home" className="block text-gray-700">Home</a>
          <a href="#services" className="block text-gray-700">Services</a>
          <a href="#about" className="block text-gray-700">About</a>
          <a href="#contact" className="block text-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}