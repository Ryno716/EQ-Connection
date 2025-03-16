import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({
  id,
  name,
  breed,
  age,
  height,
  discipline,
  price,
  images = [],
  status,
}) => {
  const [currentImage, setCurrentImage] = useState(
    images[0] || "/images/placeholder.jpg"
  );

  return (
    <motion.div
      className="border rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <Link to={`/listing/${id}`} className="block">
        <div
          className="relative"
          onMouseEnter={() => images[1] && setCurrentImage(images[1])}
          onMouseLeave={() => setCurrentImage(images[0])}
        >
          <img
            src={currentImage}
            alt={name}
            className="w-full h-56 object-cover"
            onError={(e) => (e.target.src = "/images/placeholder.jpg")}
          />
          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded capitalize">
            {discipline}
          </div>

          {status && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {status}
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {breed} | {age} | {height}
          </p>
          <p className="text-blue-600 font-bold text-xl mt-2">${price}</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-3 text-center py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            View Details
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  discipline: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string,
};

export default Card;
