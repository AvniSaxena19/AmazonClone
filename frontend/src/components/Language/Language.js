import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const LanguageDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const languages = [
    { label: "English (EN)", code: "EN" },
    { label: "हिंदी (HI)", code: "HI" },
    { label: "தமிழ் (TA)", code: "TA" },
    { label: "తెలుగు (TE)", code: "TE" },
    { label: "ಕನ್ನಡ (KN)", code: "KN" },
    { label: "മലയാളം (ML)", code: "ML" },
    { label: "বাংলা (BN)", code: "BN" },
    { label: "मराठी (MR)", code: "MR" },
  ];

  const handleCheckboxChange = (code) => {
    if (selectedLanguages.includes(code)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== code));
    } else {
      setSelectedLanguages([...selectedLanguages, code]);
    }
  };

  return (
    <div
      className="relative flex items-center space-x-1 cursor-pointer hover:border-2 hover:border-white"
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      {/* Dropdown Trigger */}
      <span className="text-white">🏳‍🌈 India</span>
      <FaCaretDown />

      {/* Language Dropdown */}
      {isDropdownVisible && (
        <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md w-56 z-10">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 cursor-pointer text-gray-700"
            >
              <input
                type="radio"
                id={lang.code}
                name="language"
                value={lang.code}
                checked={selectedLanguages.includes(lang.code)}
                onChange={() => handleCheckboxChange(lang.code)}
                className="mr-2"
              />
              <label htmlFor={lang.code}>{lang.label}</label>
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

export default LanguageDropdown;