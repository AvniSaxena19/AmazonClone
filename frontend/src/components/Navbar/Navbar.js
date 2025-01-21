import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs"; // Import cart icon
import Language from "../Language/Language";
import SignInDropdown from "../SignInDropdown/SignInDropdown";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state)=>
    state.cart.cartItems.length
  
  )

  return (


    <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-3 flex flex-col sm:flex-row justify-between items-center p-4 bg-black text-white space-y-4 sm:space-y-0 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" // Amazon logo from PNGimg
            alt="Amazon Logo"
            className="w-28 cursor-pointer"
          />
        </Link>
      </div>

      {/* Location */}
      <div className="text-sm text-center cursor-pointer">
        <p className="text-gray-300">Delivering to Lucknow 226001</p>
        <p className="font-bold">Update location</p>
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

      {/* Language Selector */}
      <Language />

      {/* Links */}
      <div className="flex items-center space-x-6">
        {/* Account Dropdown */}
        <SignInDropdown />

        {/* Returns & Orders */}
        <div className="text-sm text-center cursor-pointer">
          <p className="text-gray-300">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        {/* Prime */}
        <div className="text-sm text-center cursor-pointer">
          <p className="text-gray-300">Your</p>
          <p className="font-bold">Prime</p>
        </div>

        {/* Cart */}
        <div className="flex items-center cursor-pointer">
          <Link to="/cart" className="flex items-center space-x-2">
            <div className="relative">
              <BsCart3 size={24} />
              <span className="absolute -top-2 -right-3 bg-yellow-500 text-black rounded-full px-1 text-xs font-bold">
                {count}
              </span>
            </div>
            <span className="text-sm font-bold">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
