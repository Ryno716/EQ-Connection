import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const AddHorseForm = ({ onAddHorse }) => {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    height: "",
    discipline: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.breed || !formData.price) return;
    onAddHorse(formData);
    setFormData({
      name: "",
      breed: "",
      age: "",
      height: "",
      discipline: "",
      price: "",
      image: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Add a Horse
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "name", placeholder: "Horse Name" },
          { name: "breed", placeholder: "Breed" },
          { name: "age", placeholder: "Age" },
          { name: "height", placeholder: "Height (hh)" },
          {
            name: "discipline",
            placeholder: "Discipline (e.g., Dressage, Jumping)",
          },
          { name: "price", placeholder: "Price" },
          { name: "image", placeholder: "Image URL" },
        ].map((field) => (
          <input
            key={field.name}
            type="text"
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
          />
        ))}
      </div>

      <button
        type="submit"
        className="w-full mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        Add Horse
      </button>
    </motion.form>
  );
};

AddHorseForm.propTypes = {
  onAddHorse: PropTypes.func.isRequired,
};

export default AddHorseForm;
