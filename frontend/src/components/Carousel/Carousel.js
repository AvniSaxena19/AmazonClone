import React, { useState } from "react";
import CardsSection from "../CardSection/CardSection"; // Adjust path as needed
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";

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
    <div className="w-full">
      {/* Carousel Slider */}
      <div className="relative overflow-hidden w-full h-[400px]"> {/* Set fixed height */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full h-full"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

              {/* Image */}
              <img
                src={image}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover z-0"
              />
            </div>
          ))}
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

      {/* CardsSection */}
      <div className="mt-8">
        <CardsSection />
      </div>
    </div>
  );
};

export default Carousel;
