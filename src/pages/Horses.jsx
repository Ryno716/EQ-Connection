import { useState, useEffect } from "react";
import Card from "../components/ui/Card";

const Horses = () => {
  const [horses, setHorses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/horses") // Update to correct API path if needed
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch horses.");
        }
        return res.json();
      })
      .then((data) => {
        setHorses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading horses...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
        Available Horses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {horses.map((horse, index) => (
          <Card key={horse.id || index} {...horse} />
        ))}
      </div>
    </div>
  );
};

export default Horses;
