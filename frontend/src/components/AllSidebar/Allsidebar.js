import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        className="p-2 text-white bg-gray-800 rounded-md flex items-center space-x-2"
        onClick={toggleSidebar}
      >
        <FaBars />
        <span> All</span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 z-50`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <Link to="/SignUp">
            <h2 className="text-lg font-semibold"> Hello, Sign in</h2>
          </Link>
          {/* Close Sidebar Button */}
          <button onClick={toggleSidebar}>
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-80px)]">
          {/* Trending Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-700 uppercase">Trending</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Best Sellers
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                New Releases
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Movers and Shakers
              </li>
            </ul>
          </div>

          {/* Digital Content Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-700 uppercase">
              Digital Content and Devices
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Echo & Alexa
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Fire TV
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Kindle E-Readers & eBooks
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Audible Audiobooks
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Amazon Prime Video
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Amazon Prime Music
              </li>
            </ul>
          </div>

          {/* Shop by Category Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-700 uppercase">
              Shop by Category
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Mobiles, Computers
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                TV, Appliances, Electronics
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Music, Fashion
              </li>
            </ul>
          </div>

          {/* Help & Settings Section */}
          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase">
              Help & Settings
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Your Account
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Customer Service
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                Sign Out
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-100 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2025 Amazon Clone. All rights reserved.
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default AllSidebar;
