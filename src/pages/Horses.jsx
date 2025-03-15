import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import AddHorseForm from "../components/AddHorseForm";

// Sample Horse Listings (Will be replaced with real data later)
const sampleHorses = [
  {
    id: 1,
    name: "Thunderbolt",
    breed: "Thoroughbred",
    age: "6 years",
    height: "16.2hh",
    discipline: "Show Jumping",
    price: "$25,000",
    image: "/images/horse1.jpg", // ✅ Local image path
  },
  {
    id: 2,
    name: "Midnight Star",
    breed: "Friesian",
    age: "8 years",
    height: "15.3hh",
    discipline: "Dressage",
    price: "$30,000",
    image: "/images/horse2.jpg", // ✅ Local image path
  },
  {
    id: 3,
    name: "Golden Blaze",
    breed: "Quarter Horse",
    age: "5 years",
    height: "15.1hh",
    discipline: "Western Pleasure",
    price: "$18,000",
    image: "/images/horse3.jpg", // ✅ Local image path
  },
  {
    id: 4,
    name: "Storm Chaser",
    breed: "Andalusian",
    age: "7 years",
    height: "16.0hh",
    discipline: "Dressage",
    price: "$28,000",
    image: "/images/horse4.jpg", // ✅ Local image path
  },
  {
    id: 5,
    name: "Shadow Dancer",
    breed: "Arabian",
    age: "4 years",
    height: "15.0hh",
    discipline: "Endurance",
    price: "$22,000",
    image: "/images/horse5.jpg", // ✅ Local image path
  },
];

const Horses = () => {
  const [horses, setHorses] = useState(sampleHorses);

  // Function to add a new horse (Triggered from AddHorseForm)
  const addHorse = (newHorse) => {
    setHorses([...horses, { id: horses.length + 1, ...newHorse }]);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
        Horses for Sale
      </h1>

      {/* Add Horse Form */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AddHorseForm onAddHorse={addHorse} />
      </motion.div>

      {/* Horse Listings */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {horses.map((horse) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={horse.id}
          >
            <Card {...horse} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Horses;
