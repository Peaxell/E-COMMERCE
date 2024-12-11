// src/Pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userData = {
    email: 'user@example.com',
    password: 'pass123',
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === userData.email && password === userData.password) {
      navigate('/shop');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="h-screen w-screen flex items-center py-24 justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-400">
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-xl p-10 max-w-md w-full transform transition-transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">Welcome Back</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a href="/signup" className="text-pink-500 hover:text-pink-700 font-semibold transition-colors duration-200">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
