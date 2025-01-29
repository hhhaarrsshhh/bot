import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const OrganizationSetupPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [webpages, setWebpages] = useState([
    { url: 'https://example.com/page1', status: 'Scraped', dataChunks: ['Data 1', 'Data 2'] },
    { url: 'https://example.com/page2', status: 'Pending', dataChunks: [] },
    { url: 'https://example.com/page3', status: 'Scraped', dataChunks: ['Data 3'] },
  ]);

  const navigate = useNavigate(); 
  const handleSubmit = () => {
    alert('Organization Setup Completed');
    navigate('/chatbot-integration'); // Navigate to the Chatbot Integration page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6">Organization Setup</h2>
        <input
          type="text"
          placeholder="Company Name"
          className="border w-full p-2 mb-4 rounded"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="url"
          placeholder="Company Website URL"
          className="border w-full p-2 mb-4 rounded"
          value={companyUrl}
          onChange={(e) => setCompanyUrl(e.target.value)}
        />
        <textarea
          placeholder="Company Description"
          className="border w-full p-2 mb-4 rounded"
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
        />

        <h3 className="text-xl font-semibold mt-6 mb-4">Webpages Detected</h3>
        <ul>
          {webpages.map((page, index) => (
            <li key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <span>{page.url}</span>
                <span className={`text-sm ${page.status === 'Scraped' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {page.status}
                </span>
              </div>
              {page.status === 'Scraped' && (
                <ul className="pl-4 mt-2">
                  {page.dataChunks.map((chunk, i) => (
                    <li key={i} className="text-sm text-gray-600">{chunk}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button className="bg-blue-500 text-white w-full py-2 rounded mt-4" onClick={handleSubmit}>
          Continue to Chatbot Integration
        </button>
      </div>
    </div>
  );
};

export default OrganizationSetupPage;
