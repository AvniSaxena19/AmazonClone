import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
const Language= () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const languages = [
    { name: "English - EN", flag: "🏳‍🌈" },
    { name: "Hindi - HI", flag: "🇮🇳" },
    { name: "Tamil - TA", flag: "🇮🇳" },
    { name: "Telugu - TE", flag: "🇮🇳" },
    { name: "Kannada - KN", flag: "🇮🇳" },
    { name: "Malayalam - ML", flag: "🇮🇳" },
    { name: "Bengali - BN", flag: "🇮🇳" },
    { name: "Marathi - MR", flag: "🇮🇳" },
  ];
  return (
    <div
      className="relative flex items-center space-x-1 cursor-pointer hover:border-2 hover:border-white "
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <span className="text-white">🏳‍🌈 India</span>
      <FaCaretDown />
      {/* Language Dropdown */}
      {isDropdownVisible && (
        <ul className="absolute top-full left-0  bg-white shadow-lg rounded-md w-56 z-10 text-black">
          {languages.map((lang) => (
            <li
              key={lang.name}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => alert(`Language selected: ${lang.name}`)}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </li>
          ))}
          <div className="border-t border-gray-200">
            <li className="text-blue-500 pl-4 py-2 hover:bg-gray-100 cursor-pointer">
              Learn more
            </li>
            <li className="text-blue-500 pl-4 py-2 hover:bg-gray-100 cursor-pointer">
              Change country/region
            </li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Language;