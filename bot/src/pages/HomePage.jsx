// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page!</h1>
      <p className="mb-8">This is the starting page of your app.</p>
      <div>
        <Link to="/registration" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Go to Registration
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
