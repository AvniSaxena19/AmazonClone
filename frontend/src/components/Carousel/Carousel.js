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
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden"> {/* Carousel container */}
      {/* Display current image */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <img
          src={images[currentIndex]}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full z-20"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full z-20"
      >
        &#62;
      </button>
    </div>
  );
};

export default Carousel;
