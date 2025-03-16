import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Listings from "./pages/Listings.jsx";
import ListingDetails from "./pages/ListingDetails.jsx";
import Services from "./pages/Services.jsx";
import Login from "./pages/Login.jsx";
import AddHorseForm from "./pages/AddHorseForm.jsx";
import { sampleHorses } from "./data/horses.js";

function App() {
  // ✅ Proper initialization of listings state with persistence
  const [listings, setListings] = useState(() => {
    const savedListings = localStorage.getItem("listings");
    return savedListings ? JSON.parse(savedListings) : sampleHorses;
  });

  // Dark mode logic
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Persist listings state to localStorage
  useEffect(() => {
    localStorage.setItem("listings", JSON.stringify(listings));
  }, [listings]);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route
          path="/listings"
          element={<Listings listings={listings} setListings={setListings} />}
        />
        <Route
          path="/listing/:id"
          element={<ListingDetails listings={listings} />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-horse"
          element={<AddHorseForm setListings={setListings} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
