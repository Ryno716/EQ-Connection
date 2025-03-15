import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`p-4 flex justify-between items-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <Link
        to="/"
        className="text-2xl font-bold hover:text-blue-600 transition"
      >
        Equine Marketplace
      </Link>
      <div className="hidden md:flex gap-6">
        <Link to="/listings" className="hover:text-blue-500 transition">
          Listings
        </Link>
        <Link to="/services" className="hover:text-blue-500 transition">
          Services
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 bg-gray-300 rounded-md text-sm"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Button>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
