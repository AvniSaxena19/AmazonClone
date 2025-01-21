import React from "react";
import Carousel from "../Carousel/Carousel";
import CardsSection from "../CardSection/CardSection";
import CardsSection1 from "../CardSection1/CardSection1";

const Body = () => {
  return (
    <div className="body-container">
      <Carousel />
      <CardsSection />
      <CardsSection1 />
    </div>
  );
};

export default Body;
