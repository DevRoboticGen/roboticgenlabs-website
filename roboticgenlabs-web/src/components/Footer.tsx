import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../public/labs-logo.svg"; // or .png/.webp if needed

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Block */}
        <div className="space-y-4">
          <a
            href="https://roboticgen.co"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#9BC6EB] text-[#9BC6EB] hover:bg-[#9BC6EB] hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <p className="text-sm">
            <strong>RoboticGen (Pvt) Ltd</strong>
            <br />
            Level 01, Parkland 01
            <br />
            No 33, Park Street, Colombo 02
          </p>

          <a href="mailto:hello@roboticgen.co" className="underline text-sm">
            hello@roboticgen.co
          </a>

          <p className="text-sm text-gray-400">
            2025 © RoboticGen Pvt Ltd. All Rights Reserved
          </p>

          <div className="flex gap-4 mt-2 text-xl text-white">
            <a
              href="https://www.facebook.com/RoboticGenInc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/roboticgen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/roboticgen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@RoboticGen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex items-center mt-4 md:mt-0">
          <img
            src={logo}
            alt="RoboticGen Labs Logo"
            className="w-48 md:ml-auto"
          />
        </div>
      </div>
    </footer>
  );
}
