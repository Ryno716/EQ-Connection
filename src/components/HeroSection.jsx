import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <motion.div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide">
          Find Your Perfect Equine Partner
        </h1>
        <p className="text-lg mt-4 max-w-xl mx-auto opacity-90">
          Browse top-quality horses, tack, and equine services tailored to your
          needs.
        </p>

        {/* CTA Buttons with Motion */}
        <motion.div
          className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/listings"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            Browse Listings
          </Link>
          <Link
            to="/add-horse"
            className="px-8 py-3 border border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-blue-500 hover:scale-105 transition"
          >
            Sell a Horse
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
