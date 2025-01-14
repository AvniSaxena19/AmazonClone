// src/components/Contents/Contents.js
import React from "react";

// Importing images correctly
import img1 from './img1.png';  // Assuming the image is in the same folder


const Contents = () => {
  return (
    <div className="flex-grow bg-gray-100 p-6 relative">
      {/* First image (img1) */}
      <img
        src={img1}  // Referencing the imported img1
        alt="Amazon Clone Banner 1"
        className="w-full h-auto object-cover rounded-lg"
      />



    </div>
  );
};

export default Contents;
