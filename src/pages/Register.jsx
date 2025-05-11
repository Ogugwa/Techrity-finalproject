import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState('');

  const togglePassword1 = () => setShowPassword1(prev => !prev);
  const togglePassword2 = () => setShowPassword2(prev => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Submit logic
    console.log('Registering:', { email, password });
  };

  return (
    <div className="mt-5 flex flex-col md:flex-row justify-center items-center sigin-gradient font-work-sans min-h-screen px-4">
      {/* Optional Left Panel for image/design */}
      <div className="hidden md:hidden lg:flex lg:w-1/2 justify-center items-center lg:ml-[-10.2rem]">
      <img src='/images/signin fram1.png ' alt='backdrop image' className="w-[80%]  object-contain"/>
      </div>

      <div className="flex flex-col justify-center items-center lg:mt-[-12rem] lg:ml-[2rem] w-full md:w-1/2">
        <div className="p-6">
          <h2 className="bg-gradient-to-r from-[#9F04FF] to-[#222AE2] text-transparent bg-clip-text font-bold text-3xl mb-6 text-center">
            Create your account
          </h2>
        </div>

        <div className="w-full md:w-2xl max-w-3xl bg-white shadow-md rounded-lg p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name' className="block mb-1 font-medium">
                    Surname
                </label>
                <input type='name'
                id='suname'
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Doe"
                required/>
            </div>
            <div>
                <label htmlFor='name' className="block mb-1 font-medium">
                   Firstname
                </label>
                <input type='name'
                id='firstname'
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John"
                required/>
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Johndoe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div
                  onClick={togglePassword1}
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-600"
                >
                  {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div
                  onClick={togglePassword2}
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-600"
                >
                  {showPassword2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <p className="text-sm text-center mt-4">
              By Signing Up you agree to our 
              <Link to="/terms" className="text-blue-600 underline"> Terms & Privacy</Link>  
            </p>
            <button
              type="submit"
              className="mx-auto block w-full md:w-[13.8rem] h-12 bg-gradient-to-r from-[#9F04FF] to-[#222AE2] text-white py-2 rounded-3xl font-extrabold text-xl"
            >
              Register
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account?{' '}
              <Link to="/signin" className="text-blue-600 underline">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
