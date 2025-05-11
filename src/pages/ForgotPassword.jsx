import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate email sent
    setSubmitted(true);

    // Simulate redirect after 3 seconds
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-indigo-700">
          Forgot Password
        </h2>

        {submitted ? (
          <div className="text-green-600 text-center">
            ✅ A password reset link has been sent to <strong>{email}</strong>.
            <br />
            Redirecting to login...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Johndoes@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md font-bold"
            >
              Send Reset Link
            </button>

            <p className="text-sm text-center mt-4">
              Remembered your password?{' '}
              <Link to="/signin" className="text-blue-600 underline">
                Back to Login
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
