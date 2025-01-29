import React, { useState } from 'react';
import Confetti from 'react-confetti';

const ChatbotIntegrationPage = () => {
  const [isIntegrationSuccessful, setIsIntegrationSuccessful] = useState(false);
  const [showChatbotDemo, setShowChatbotDemo] = useState(false); // Added state for chatbot demo

  const handleTestChatbot = () => {
    alert('Opening chatbot demo...');
    setShowChatbotDemo(true); // Show chatbot demo after the alert
  };

  const handleTestIntegration = () => {
    setIsIntegrationSuccessful(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 mt-8">Chatbot Integration & Testing</h2>

        <button
          className="bg-blue-500 text-white w-full py-2 rounded mb-4"
          onClick={handleTestChatbot}
        >
          Test Chatbot
        </button>

        <button
          className="bg-yellow-500 text-white w-full py-2 rounded mb-4"
        >
          Integrate on Your Website
        </button>
        <div className="mt-4 mb-4">
          <p className="text-sm">
            Copy and paste the code into the <strong>&lt;head&gt;</strong> section of your website.
          </p>
        </div>

        <button
          className="bg-green-500 text-white w-full py-2 rounded mb-4"
          onClick={handleTestIntegration}
        >
          Test Integration
        </button>

        {isIntegrationSuccessful && (
          <div className="mt-6">
            <Confetti />
            <h3 className="text-xl font-semibold text-center mb-4">Integration Successful!</h3>
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
        )}

        {showChatbotDemo && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Chatbot Demo</h3>
            {/* Display chatbot UI here */}
            <div className="border-t-2 border-gray-300 mt-4 pt-4">
              <p className="text-sm">This is where the chatbot demo will be shown.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotIntegrationPage;
