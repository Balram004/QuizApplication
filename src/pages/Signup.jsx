import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain at least one number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm() && username && email && password) {
      const users = JSON.parse(localStorage.getItem('quiz_users')) || [];
      const newUser = { username, email, password };
      users.push(newUser);
      localStorage.setItem('quiz_users', JSON.stringify(users));
      alert('Signup successful! Please login.');
      navigate('/');
    } else {
      if (!username || !email || !password) {
        alert('Please fill in all fields');
      }
    }
  };

  const handleGoogleSignup = () => {
    // Yahan Google signup ka logic aayega
    alert('Continue with Google - Feature coming soon!');
  };

  const handleMobileSignup = () => {
    // Yahan Mobile number signup ka logic aayega
    alert('Continue with Mobile Number - Feature coming soon!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/30 backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/">
              Already have an account? Login
            </Link>
          </div>
        </form>
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col gap-4">
          <button onClick={handleGoogleSignup} className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50">
            <img src="https://www.google.com/favicon.ico" alt="Google icon" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
          <button onClick={handleMobileSignup} className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M17.926 8.036a1 1 0 01.97 1.22l-1.5 6a1 1 0 01-1.22.744l-4.5-1.125a1 1 0 01-.572-1.22l1.5-6a1 1 0 011.22-.744l2.002.501.022-.005a7.002 7.002 0 00-3.96-6.337 1 1 0 01.548-1.928 9.002 9.002 0 015.012 8.154l.023.005 2.14-.535zM5 3a1 1 0 000 2c1.134 0 2.19.39 3 .994a1 1 0 101.414-1.414A6.969 6.969 0 005 3zM3 7a1 1 0 100 2c.553 0 1.08.07 1.587.204a1 1 0 10.39-1.958A4.962 4.962 0 003 7z" clipRule="evenodd" /></svg>
            Continue with Mobile Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;