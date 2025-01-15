import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contents from "./components/Contents/Contents";
import Navbar2 from "./components/Navbar2/Navbar2";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Contents/>
      <Footer/>
    </div>
  );
}

export default App;
