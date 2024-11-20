
import { useEffect, useState } from "react";
import { FaHome, FaEnvelope, FaShieldAlt ,FaBars, FaTimes} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

  // Close the menu when the location changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  }, [location]);
  return (
    <header className="bg-main text-white fixed top-0 w-full z-50 shadow-md">
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">
            <img width={60} height={60} className="w-full h-auto max-w-[60px] rounded-lg" src ="https://cdn.shopify.com/s/files/1/0649/9912/9262/files/MG-04_60x60.png?v=1729788970" alt="mg pro"/>
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="flex items-center gap-2 hover:text-blue-200">
        <FaHome /> Home
        </Link>
        <Link to="/privacy-policy" className=" text-white flex items-center gap-2 hover:text-blue-200">
          <FaShieldAlt /> Privacy Policy
        </Link>
        <Link to="/contact" className="text-white flex items-center gap-2 hover:text-blue-200">
          <FaEnvelope /> Contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-main">
        <nav className="flex flex-col items-center py-4 space-y-4">
        <Link to="/" className="flex items-center gap-2 hover:text-blue-200">
        <FaHome /> Home
        </Link>
        <Link to="/privacy-policy" className=" text-white flex items-center gap-2 hover:text-blue-200">
          <FaShieldAlt /> Privacy Policy
        </Link>
        <Link to="/contact" className="text-white flex items-center gap-2 hover:text-blue-200">
          <FaEnvelope /> Contact
        </Link>
        </nav>
      </div>
    )}
  </header>
  );
};

export default Header;


