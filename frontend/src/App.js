import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import CardsSection from "./components/CardSection/CardSection";
import Navbar2 from "./components/Navbar2/Navbar2";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <CardsSection/>
      <Footer/>
    </div>
  );
}

export default App;
