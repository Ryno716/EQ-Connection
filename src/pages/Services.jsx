import { motion } from "framer-motion";
import { FaStethoscope, FaHorseHead, FaHammer } from "react-icons/fa";

const Services = () => {
  return (
    <motion.div
      className="container mx-auto px-6 py-10 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
        Equine Services
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Find top-rated farriers, vets, and trainers near you.
      </p>

      {/* Services List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {/* Veterinary Care */}
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaStethoscope className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Veterinary Care
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Connect with top-rated equine veterinarians.
          </p>
        </motion.div>

        {/* Farrier Services */}
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaHammer className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Farrier Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Find skilled professionals for horse shoeing and hoof care.
          </p>
        </motion.div>

        {/* Training & Coaching */}
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaHorseHead className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Training & Coaching
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Work with expert trainers to improve your horse’s performance.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
