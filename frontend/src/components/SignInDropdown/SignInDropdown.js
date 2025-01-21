import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignInDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
 <div className="cursor-pointer p-2 bg-grey-900 rounded hover:white flex items-center hover:border-2 hover:border-white ">
        Hello, Sign in  <br></br>Accounts & lists
          <FaCaretDown />
        </div>
    
      {/* Dropdown */}
      {isHovered && (
        <div className="absolute right-0  w-96 bg-white border rounded shadow-lg p-4 z-10 ">
          {/* Sign In Section */}
          <div className="text-center mb-4">
          <Link to="/Signup">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-2 px-4 rounded">
              Sign in
            </button>
            </Link> 
            <p className="text-sm text-black mt-2">
              New customer?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Start here.
              </a>
            </p>
          </div>

          <hr className="border-gray-300 my-4" />

          {/* Lists & Account Sections */}
          <div className="flex">
            {/* Your Lists */}
            <div className="w-1/2 pr-4">
              <h3 className="font-semibold mb-2">Your Lists</h3>
              <ul className="space-y-1 text-sm text-black">
                <li className="hover:underline cursor-pointer">
                  Create a Wish List
                </li>
                <li className="hover:underline cursor-pointer">
                  Wish from Any Website
                </li>
                <li className="hover:underline cursor-pointer">
                  Baby Wishlist
                </li>
                <li className="hover:underline cursor-pointer">
                  Discover Your Style
                </li>
                <li className="hover:underline cursor-pointer">
                  Explore Showroom
                </li>
              </ul>
            </div>

            {/* Your Account */}
            <div className="w-1/2">
              <h3 className="font-semibold mb-2">Your Account</h3>
              <ul className="space-y-1 text-sm text-black">
                <li className="hover:underline cursor-pointer">Your Account</li>
                <li className="hover:underline cursor-pointer">Your Orders</li>
                <li className="hover:underline cursor-pointer">
                  Your Wish List
                </li>
                <li className="hover:underline cursor-pointer">
                  Your Recommendations
                </li>
                <li className="hover:underline cursor-pointer">
                  Your Prime Membership
                </li>
                <li className="hover:underline cursor-pointer">
                  Your Prime Video
                </li>
                <li className="hover:underline cursor-pointer">
                  Your Subscribe & Save Items
                </li>
                <li className="hover:underline cursor-pointer">
                  Memberships & Subscriptions
                </li>
                <li className="hover:underline cursor-pointer">
                  Your Seller Account
                </li>
                <li className="hover:underline cursor-pointer">
                  Manage Your Content and Devices
                </li>
                <li className="hover:underline cursor-pointer">
                  Register for a free Business Account
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInDropdown;