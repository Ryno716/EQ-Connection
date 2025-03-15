import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./ui/Button"; // ✅ Import Button component

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-[600px] flex flex-col items-center justify-center text-center 
                 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg 
                 dark:from-gray-800 dark:to-gray-900 p-10 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff44,_transparent)] dark:bg-[radial-gradient(circle_at_center,_#11111144,_transparent)]" />

      <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg">
        Buy & Sell Horses, Equipment, & Services
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl">
        The ultimate marketplace for horse enthusiasts. Find, sell, and connect
        with professionals.
      </p>

      <div className="mt-6">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="../pages/Listings.jsx">
            <Button className="px-8 py-3 text-lg font-semibold">
              Browse Listings
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
