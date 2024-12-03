import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col justify-center items-centers bg-gray-100 rounded-lg h-[500px]">
      
      <h1 className="text-5xl font-bold text-center text-blue-500 mb-6">
        Welcome to the Role-Based App!
      </h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        Manage roles efficiently and stay organized. Designed for productivity and ease of use.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/register" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 shadow">
          Get Started
        </Link>
        <button className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300 shadow">
          Learn More
        </button>
      </div>
  
    </div>
  );
};

export default Home;
