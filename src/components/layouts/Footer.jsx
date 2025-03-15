import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12 shadow-lg">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Equine Marketplace</h2>
          <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
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
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
