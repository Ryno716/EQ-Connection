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
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Find Your Perfect Equine Partner
        </h1>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          Browse top-quality horses, tack, and equine services.
        </p>

        {/* CTA Buttons with Motion */}
        <motion.div
          className="mt-6 flex justify-center space-x-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/listings"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Browse Listings
          </Link>
          <Link
            to="/add-horse"
            className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-500 transition"
          >
            Sell a Horse
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
