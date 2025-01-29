// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import OrganizationSetupPage from "./pages/OrganizationSetupPage";
import ChatbotIntegrationPage from "./pages/ChatbotIntegrationPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/organization-setup" element={<OrganizationSetupPage />} />
          <Route path="/chatbot-integration" element={<ChatbotIntegrationPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
