import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import the search bar component

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
          <Link to="/contact-us" className="hover:text-gray-400">Contact Us</Link>
        </div>
        <SearchBar /> {/* Search bar in the navbar */}
        <div className="flex space-x-4">
          <Link to="/login" className="hover:text-gray-400">Login</Link>
          <Link to="/register" className="hover:text-gray-400">Register</Link>
          <Link to="/profile" className="hover:text-gray-400">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
