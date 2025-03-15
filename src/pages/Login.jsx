import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      className="container mx-auto px-6 py-10 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        Login
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Access your account.
      </p>

      {/* Login Form */}
      <motion.form
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            placeholder="Enter your email"
            autoComplete="email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Login
        </button>
      </motion.form>
    </motion.div>
  );
};

export default Login;
