import React from 'react';
import Confetti from 'react-confetti';

const SuccessPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <Confetti />
        <h2 className="text-2xl font-bold mb-6 text-center">Congratulations! Integration Successful!</h2>
        <button className="bg-blue-500 text-white w-full py-2 rounded mb-4">
          Explore Admin Panel
        </button>
        <button className="bg-blue-500 text-white w-full py-2 rounded mb-4">
          Start Talking to Your Chatbot
        </button>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-gray-500 text-white p-2 rounded">Share on Twitter</button>
          <button className="bg-gray-500 text-white p-2 rounded">Share on Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
