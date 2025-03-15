import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Card = ({ id, name, breed, age, height, discipline, price, image }) => {
  return (
    <motion.div
      className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
        onError={(e) =>
          (e.target.src = "/client/public/images/default-horse.jpg")
        }
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">
          {breed} | {age} | {height}
        </p>
        <p className="text-gray-700 font-semibold">{discipline}</p>
        <p className="text-blue-600 font-bold">{price}</p>
        <Link
          to={`/listing/${id}`}
          className="block mt-2 text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
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
  image: PropTypes.string.isRequired,
};

export default Card;
