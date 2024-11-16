import React from 'react';
import SeedDataButton from './SeedData';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 text-gray-900 border-b border-gray-300 fixed top-0 left-0 w-full p-4 shadow-lg z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Colorful Logo with Gray Scheme */}
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
          <a href = "#trasactions" >
            Roxilar
          </a>
        </h1>

        <div className="flex justify-center items-center space-x-6">
          {/* Navigation Links */}
          <ul className="flex space-x-8 text-lg">
          <li>
              <a
                href="#trasactions"
                className="hover:text-gray-700 hover:opacity-75 transition duration-300"
              >
                Transactions
              </a>
            </li>
          <li>
              <a
                href="#statistics"
                className="hover:text-gray-700 hover:opacity-75 transition duration-300"
              >
                Statistics
              </a>
            </li>
            
            <li>
              <a
                href="#barChart"
                className="hover:text-gray-700 hover:opacity-75 transition duration-300"
              >
                Bar Chart
              </a>
            </li>
            
            <li>
              <a
                href="#pieChart"
                className="hover:text-gray-700 hover:opacity-75 transition duration-300"
              >
                Pie Chart
              </a>
            </li>
            
          </ul>

          {/* Seed Data Button */}
          <div className="ml-4">
            <SeedDataButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
