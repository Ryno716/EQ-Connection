import { useState } from "react";
import Card from "../components/ui/Card";
import { motion } from "framer-motion";

const sampleListings = [
  {
    id: 1,
    title: "Champion Show Jumper",
    price: "$15,000",
    image: "/images/horse1.jpg", // ✅ Use local image
  },
  {
    id: 2,
    title: "Premium Leather Saddle",
    price: "$450",
    image: "/images/horse2.jpg", // ✅ Use local image
  },
  {
    id: 3,
    title: "Experienced Dressage Horse",
    price: "$20,000",
    image: "/images/horse3.jpg", // ✅ Use local image
  },
  {
    id: 4,
    title: "High-Quality Riding Boots",
    price: "$120",
    image: "/images/horse4.jpg", // ✅ Use local image
  },
];

const Listings = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
        Browse Listings
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for horses, tack, or services..."
          className="w-2/3 md:w-1/2 px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Listings Grid */}
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
    </div>
  );
};

export default Listings;
