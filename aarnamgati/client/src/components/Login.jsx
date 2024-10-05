import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService'; // Import your authentication service

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate('/profile'); // Redirect to profile page upon successful login
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
