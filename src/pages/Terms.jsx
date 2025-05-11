import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsAccepted(!isAccepted);
  };

  const handleContinue = () => {
    if (isAccepted) {
      navigate('/register');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gray-50">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">Terms and Conditions</h1>
        
        <div className="text-gray-700 mb-6 space-y-4 overflow-y-auto max-h-[300px]">
          <p>
            Welcome to Web 3.0 Marketplace. By using our services, you agree to the following terms and conditions...
          </p>
          <p>
            1. You must be 18 years or older.
          </p>
          <p>
            2. Do not share your password with anyone.
          </p>
          <p>
            3. Respect other users and their content.
          </p>
          <p>
            4. We reserve the right to suspend accounts that violate our policies.
          </p>
          {/* Add more content as needed */}
        </div>

        <div className="mt-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={isAccepted}
              onChange={handleCheckboxChange}
            />
            I have read and accept the Terms
          </label>
        </div>

        <button
          onClick={handleContinue}
          disabled={!isAccepted}
          className={`mt-4 w-full py-3 rounded-lg font-semibold text-white transition-all ${
            isAccepted ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Continue to Register
        </button>
      </div>
    </div>
  );
};

export default Terms;
