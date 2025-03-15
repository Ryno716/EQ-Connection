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
    price: 0,
    image: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.breed || !formData.price) {
      setError("Please fill in required fields: Name, Breed, and Price.");
      return;
    }
    setError("");
    onAddHorse(formData);
    setFormData({
      name: "",
      breed: "",
      age: "",
      height: "",
      discipline: "",
      price: 0,
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

      {/* Error Message */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "name", placeholder: "Horse Name" },
          { name: "breed", placeholder: "Breed" },
          { name: "age", placeholder: "Age", type: "number" },
          { name: "height", placeholder: "Height (hh)" },
          {
            name: "discipline",
            placeholder: "Discipline (e.g., Dressage, Jumping)",
          },
          { name: "price", placeholder: "Price", type: "number" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type || "text"}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
          />
        ))}
      </div>

      {/* Image Upload */}
      <div className="mt-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Upload Image
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files.length > 0) {
              setFormData({
                ...formData,
                image: URL.createObjectURL(e.target.files[0]),
              });
            }
          }}
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
        />
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
