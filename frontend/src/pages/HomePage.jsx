import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16 md:py-24 max-w-6xl mx-auto">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Welcome to <span className="text-blue-600">Our Website</span>
          </h1>
          <p className="text-lg text-gray-600">
            Your one-stop platform to explore amazing features, connect with others,
            and make your experience seamless and enjoyable. 🚀
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/signup"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Homepage Illustration"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
