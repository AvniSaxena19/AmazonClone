import React from "react";
import Carousel from "../Carousel/Carousel";
import CardsSection from "../CardSection/CardSection";
import CardsSection1 from "../CardSection1/CardSection1";
import BackToTop from "../backToTop/BackToTop";

const Body = () => {
  return (
    <div className="body-container">
      <Carousel />
      <CardsSection />
      <CardsSection1 />
      <BackToTop/>
    </div>
  );
};

export default Body;
