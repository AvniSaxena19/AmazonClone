import React from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="bg-gray-800 text-center py-4 cursor-pointer text-gray-200 hover:text-white"
      onClick={scrollToTop}
    >
      
        Back to top
     
    </div>
  );
};

export default BackToTop;
