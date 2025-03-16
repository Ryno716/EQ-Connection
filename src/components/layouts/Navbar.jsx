import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Equine Marketplace
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/listings" className="hover:text-blue-500 transition">
            Listings
          </Link>
          <Link to="/services" className="hover:text-blue-500 transition">
            Services
          </Link>
          <Link to="/login" className="hover:text-blue-500 transition">
            Login
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {menuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-md absolute w-full left-0 top-[70px] flex flex-col items-center py-4"
          >
            <Link
              to="/listings"
              className="py-2 text-lg hover:text-blue-500 transition"
              onClick={toggleMenu}
            >
              Listings
            </Link>
            <Link
              to="/services"
              className="py-2 text-lg hover:text-blue-500 transition"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/login"
              className="py-2 text-lg hover:text-blue-500 transition"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <button
              onClick={() => {
                toggleDarkMode();
                toggleMenu();
              }}
              className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
