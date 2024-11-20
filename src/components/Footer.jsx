
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-main text-white py-8">
      <div className="container mx-auto px-4 text-center space-y-6">
        {/* Social Icons */}
        <div className="flex justify-center space-x-4"> 
          <a href="https://www.linkedin.com/in/mayankparmar23599/" className="text-blue-200 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.linkedin.com/in/gaurang-dholariya-a119b7203/" className="text-blue-200 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
        {/* Links */}
        <nav className="flex justify-center space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MG Pro PWA App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
