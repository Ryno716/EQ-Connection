import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ListingDetails = ({ listings }) => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const foundListing = listings.find((l) => String(l.id) === id);
    setListing(foundListing);
  }, [id, listings]);

  if (!listing) {
    return <p className="text-center text-red-500 mt-10">Listing not found.</p>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={listing.images[0] || "/images/placeholder.jpg"}
          alt={listing.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">
          {listing.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {listing.breed} | {listing.age} | {listing.height} |{" "}
          {listing.discipline}
        </p>
        <p className="text-blue-600 font-bold text-2xl mt-4">{listing.price}</p>
        <motion.button
          className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold transition"
          whileHover={{ scale: 1.05 }}
        >
          Contact Seller
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ListingDetails;
