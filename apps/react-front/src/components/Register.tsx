import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const result = {
      email,
      password
    }
    console.log(result);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <div className="p-6 max-w-md w-full bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 capitalize">Registro</h2>

        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-sm text-gray-800">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm text-gray-800">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Register
            </button>
          </div>
        </form>

        <p className="mt-4">
          Already have an account? <Link to="/" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
} 