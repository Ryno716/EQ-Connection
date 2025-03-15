import { useState } from "react";
import Card from "../components/ui/Card";
import { motion } from "framer-motion";
import horse1 from "../assets/horse1.jpg";
import horse2 from "../assets/horse2.jpg";
import horse3 from "../assets/horse3.jpg";
import horse4 from "../assets/horse4.jpg";

const sampleListings = [
  { id: 1, title: "Champion Show Jumper", price: "$15,000", image: horse1 },
  { id: 2, title: "Premium Leather Saddle", price: "$450", image: horse2 },
  { id: 3, title: "Western Trail Saddle", price: "$250", image: horse3 },
  { id: 4, title: "Horse Grooming Kit", price: "$75", image: horse4 },
];

const Listings = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
        Browse Listings
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for horses, tack, or services..."
          className="w-2/3 md:w-1/2 px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {sampleListings
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((listing) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={listing.id}
            >
              <Card {...listing} />
            </motion.div>
          ))}
      </motion.div>

      {/* No Listings Found Message */}
      {sampleListings.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ).length === 0 && (
        <p className="text-center text-lg text-gray-500 mt-6">
          No listings found.
        </p>
      )}
    </div>
  );
};

export default Listings;
