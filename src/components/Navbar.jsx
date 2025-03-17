import React, { useState } from "react";
import koinXlogo from "./images/koinXlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-5">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={koinXlogo} style={{ width: "96px" }} alt="KoinX Logo" />
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="lg:hidden relative">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Dropdown Menu with 100% width */}
          {isMenuOpen && (
            <div className="absolute bg-white shadow-md rounded-lg mt-2 py-4 px-6 space-y-2" style={{width:'60vw',right:'0vw',zIndex:'9999'}}>
              <a href="#" className="block text-gray-700 hover:text-blue-600 w-full">
                Crypto Taxes
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-semibold w-full">
                Free Tools
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-semibold w-full">
                Resource Center
              </a>
              <button
                className="block bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 mt-2 w-full rounded-lg"
                style={{
                  background: "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)",
                  borderRadius: "10px",
                }}
              >
                Get Started
              </button>
            </div>
          )}
        </div>

        {/* Navigation Links for large screens */}
        <div className="hidden lg:flex lg:space-x-8 justify-center items-center">
          <a href="#" className="block text-gray-700 hover:text-blue-600 py-2 lg:py-0 font-medium">
            Crypto Taxes
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-semibold py-2 lg:py-0">
            Free Tools
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-semibold py-2 lg:py-0">
            Resource Center
          </a>
          <button
            className="block bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 mt-2 lg:mt-0 lg:inline-block"
            style={{
              background: "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)",
              borderRadius: "10px",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
