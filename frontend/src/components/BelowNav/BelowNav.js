import React from 'react';
import AllSidebar from "../AllSidebar/Allsidebar"

const BelowNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Hamburger Icon */}
        <button className="block lg:hidden focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <ul className="flex flex-wrap space-x-4 text-sm">
          {/* <li>
            <a href="#" className="hover:text-yellow-400">
              All
            </a>
          </li> */}
          <AllSidebar/>
          <li>
            <a href="#" className="hover:text-yellow-400">
              MX Player
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Sell
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Best Sellers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Today's Deals
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Mobiles
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Electronics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Customer Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Prime
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Home & Kitchen
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Amazon Pay
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              New Releases
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Fashion
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Computers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Car & Motorbike
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Books
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BelowNavbar;
