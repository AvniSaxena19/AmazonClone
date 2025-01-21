import React, { useState } from "react";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';

const Carousel = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8]; // Array of images

  const [currentIndex, setCurrentIndex] = useState(0); // Initial index set to 0

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop to the first image
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length // Loop to the last image
    );
  };

  return (
    <div className="relative w-full h-[85vh]"> {/* Reduce the height slightly */}
      {/* Display current image */}
      <div className="overflow-hidden w-full h-full">
        <div className="flex transition-all duration-500 ease-in-out w-full h-full">
          <div className="flex-shrink-0 w-full h-full">
            <img
              src={images[currentIndex]}
              alt="Background"
              className="w-full h-full object-cover" // Full width, full height, maintain aspect ratio
            />
          </div>
        </div>
      </div>

      {/* Next and Previous Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2"
      >
        &#62;
      </button>
    </div>
  );
};

export default Carousel;
