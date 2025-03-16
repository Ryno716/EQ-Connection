import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AddHorseForm = ({ setListings }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState("");

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({ ...prevData, image: imageUrl }));
      setPreview(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.breed || !formData.age || !formData.price) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setLoading(true);

    const newHorse = {
      id: Date.now(),
      ...formData,
      images: formData.image ? [formData.image] : ["/images/placeholder.jpg"],
    };

    setListings((prevListings) => [...prevListings, newHorse]);

    setTimeout(() => {
      setLoading(false);
      navigate("/listings");
    }, 500);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
        className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Add New Horse
        </h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form className="mt-4" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            placeholder="Breed"
          />
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <input
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Height"
          />
          <input
            name="discipline"
            value={formData.discipline}
            onChange={handleChange}
            placeholder="Discipline"
          />
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price ($)"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 h-40 w-full object-cover rounded-md"
            />
          )}

          <motion.button
            type="submit"
            className="mt-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition w-full"
            whileHover={{ scale: 1.05 }}
          >
            Add Horse
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddHorseForm;
