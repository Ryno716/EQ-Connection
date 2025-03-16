import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 shadow-lg">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Equine Marketplace</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm">
          <Link to="/listings" className="hover:text-blue-400 transition">
            Listings
          </Link>
          <Link to="/services" className="hover:text-blue-400 transition">
            Services
          </Link>
          <Link to="/login" className="hover:text-blue-400 transition">
            Login
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex space-x-4">
          <motion.a
            href="#"
            className="hover:text-blue-400 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-blue-400 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-blue-400 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
