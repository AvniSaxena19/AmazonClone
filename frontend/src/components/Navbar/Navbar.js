import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-24 cursor-pointer"
        />
      </div>
      <div className="text-sm text-center cursor-pointer">
          <p className="text-gray-300">Delivering to Lucknow 226001</p>
          <p className="font-bold"> Update location</p>
        </div>

      {/* Search Bar */}
      <div className="flex-grow flex items-center max-w-2xl mx-4">
        <input
          type="text"
          placeholder="Search Amazon"
          className="w-full py-2 px-4 rounded-l-md focus:outline-none"
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-r-md">
          🔍
        </button>
      </div>

      {/* Links */}
      <div className="flex items-center space-x-6">
        <div className="text-sm text-center cursor-pointer">
          <p className="text-gray-300">Hello, Sign in</p>
          <p className="font-bold">Account & Lists</p>
        </div>
        <div className="text-sm text-center cursor-pointer">
          <p className="text-gray-300">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>
        <div className="text-sm text-center cursor-pointer">
          <p className="text-gray-300">Your</p>
          <p className="font-bold">Prime</p>
        </div>
        <div className="flex items-center cursor-pointer">
          🛒
          <span className="ml-2 bg-yellow-500 text-black rounded-full px-2 text-xs font-bold">
            0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


