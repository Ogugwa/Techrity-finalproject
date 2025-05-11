import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SignIn = () => {
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

    // Submit logic here (e.g., API call)
    console.log({ email, password });
  };

  return (
    <div className="mt-5 flex flex-col md:flex-row justify-around items-center sigin-gradient font-work-sans min-h-screen overflow-hidden">
      {/* Optional Left Panel for image/design */}
      <div className="hidden md:hidden lg:flex lg:w-1/2 justify-center items-center lg:ml-[-5.7rem]">
      <img src='/images/signin fram1.png ' alt='backdrop image' className="w-[80%] object-contain"/>
      </div>

      {/* Sign In Form */}
      <div className="flex flex-col justify-center  items-center w-full md:w-1/2 lg:mt-[-12rem] lg:ml-[-4rem]">
        <div className="p-6 ">
          <h2 className="bg-gradient-to-r from-[#9F04FF] to-[#222AE2] text-transparent bg-clip-text font-bold text-3xl mb-6 text-center lg:text-left">
            Sign into your account
          </h2>
        </div>

        <div className="w-full md:w-2xl max-w-3xl bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-center items-center gap-2 mb-6">
            <img src="images/logo.png" alt="Web3 logo" className="w-[4rem] h-[3.2rem]" />
            <p className="font-bold gradient-text leading-tight">
              Web 3.0 <br />
              MarketPlace
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Johndoes@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword1 ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  onClick={togglePassword1}
                  className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
                >
                  {showPassword1 ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block mb-1 font-medium">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword2 ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <div
                  onClick={togglePassword2}
                  className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
                >
                  {showPassword2 ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </div>
              </div>
            </div>

            <div className="text-right mt-1">
              <Link to="/forgot-password" className="text-sm text-blue-600 underline">
                Forgot Password?
              </Link>
            </div>
            <div>
              <label htmlFor="remember" className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                Remember me always
              </label>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className=" mx-auto block w-full md:w-[13.8rem] h-12 bg-gradient-to-r from-[#9F04FF] to-[#222AE2] text-white py-2 rounded-3xl font-extrabold text-xl"
            >
              Sign In
            </button>

            <p className="text-sm text-center mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
