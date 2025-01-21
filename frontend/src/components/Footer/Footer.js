import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const sections = [
    {
      title: "Get to Know Us",
      links: ["About Amazon", "Careers", "Press Releases", "Amazon Science"],
    },
    {
      title: "Connect with Us",
      links: ["Facebook", "Twitter", "Instagram"],
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell on Amazon",
        "Sell under Amazon Accelerator",
        "Protect and Build Your Brand",
        "Amazon Global Selling",
        "Supply to Amazon",
        "Become an Affiliate",
        "Fulfilment by Amazon",
        "Advertise Your Products",
        "Amazon Pay on Merchants",
      ],
    },
    {
      title: "Let Us Help You",
      links: [
        "Your Account",
        "Returns Centre",
        "Recalls and Product Safety Alerts",
        "100% Purchase Protection",
        "Amazon App Download",
        "Help",
      ],
    },
  ];



  return (
    <footer className="bg-gray-900 text-white py-10 px-6">


      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-bold mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="text-gray-300 text-sm hover:underline cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Logo Section */}
      <div className="flex justify-center items-center mt-6">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" // Amazon logo from PNGimg
            alt="Amazon Logo"
            className="w-28 cursor-pointer"
          />
        </Link>
      </div>

      {/* Bottom Section (Amazon-Style) */}
      <div className="bg-gray-800 text-gray-400 py-6 px-4 mt-8">
        <div className="flex justify-center space-x-8 flex-wrap">
          <div>
            <h4 className="font-bold mb-2">AbeBooks</h4>
            <p className="text-sm">Books, art & collectibles</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Amazon Web Services</h4>
            <p className="text-sm">Scalable Cloud Computing Services</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Amazon Business</h4>
            <p className="text-sm">Everything For Your Business</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Audible</h4>
            <p className="text-sm">Download Audio Books</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">IMDb</h4>
            <p className="text-sm">Movies, TV & Celebrities</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Amazon Prime Music</h4>
            <p className="text-sm">
              100 million songs, ad-free <br /> Over 15 million podcast episodes
            </p>
          </div>
        </div>
      </div>

      {/* Links and Copyright */}
      <div className="mt-6 text-center text-gray-400 text-xs">
        <div className="space-x-4">
          <a
            href="#"
            className="hover:underline cursor-pointer text-gray-400"
          >
            Conditions of Use
          </a>
          <a
            href="#"
            className="hover:underline cursor-pointer text-gray-400"
          >
            Privacy Notice
          </a>
          <a
            href="#"
            className="hover:underline cursor-pointer text-gray-400"
          >
            Interest-Based Ads
          </a>
        </div>
        <p className="mt-2">© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
