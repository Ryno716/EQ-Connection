import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }
    // Simulated authentication check
    if (username === "admin" && password === "password123") {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 flex justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Login
        </h2>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* ✅ Wrap Inputs Inside a Form */}
        <form onSubmit={handleLogin}>
          <div className="mt-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              autoComplete="username" // ✅ Added autocomplete
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              autoComplete="current-password" // ✅ Added autocomplete
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
