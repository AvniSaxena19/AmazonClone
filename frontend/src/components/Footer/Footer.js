import React from "react";

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

      {/* Bottom Section */}
      {/* <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-24 mb-4 md:mb-0"
        />
        <div className="flex space-x-4 items-center">
          <button className="bg-gray-800 text-white px-3 py-1 rounded-md">
            English
          </button>
          <button className="bg-gray-800 text-white px-3 py-1 rounded-md">
            India
          </button>
        </div>
      </div> */}


      

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
