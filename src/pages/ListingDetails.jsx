import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Temporary mock data
  const mockListings = [
    {
      id: "1",
      name: "Champion Show Jumper",
      description: "A well-trained horse with excellent jumping abilities.",
      price: 15000,
      image: "/images/horse1.jpg",
    },
    {
      id: "2",
      name: "Dressage Star",
      description:
        "Perfect for dressage enthusiasts, well-behaved and talented.",
      price: 12000,
      image: "/images/horse2.jpg",
    },
    {
      id: "3",
      name: "Western Trail Horse",
      description: "Great for leisurely rides and trail riding.",
      price: 8000,
      image: "/images/horse3.jpg",
    },
    {
      id: "4",
      name: "Horse Grooming Kit",
      description: "A complete set of grooming tools and supplies.",
      price: 75,
      image: "/images/horse4.jpg",
    },
  ];

  useEffect(() => {
    setLoading(true);

    // Simulate an API call delay
    setTimeout(() => {
      const foundListing = mockListings.find((l) => l.id === id);
      if (!foundListing) {
        setError("Listing not found.");
      } else {
        setListing(foundListing);
      }
      setLoading(false);
    }, 1000); // Simulates 1 second delay
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src={listing.image || "/images/placeholder.jpg"}
          alt={listing.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">
          {listing.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {listing.description || "No description available."}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-500">
            ${listing.price || "N/A"}
          </span>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
