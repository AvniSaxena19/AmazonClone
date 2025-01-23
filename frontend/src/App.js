import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BelowNavbar from "./components/BelowNav/BelowNav"; // Correct component import
import Cart from "./pages/CartPages";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home";
import LoginPage from "./components/LoginPage/LoginPage";
import Signup from "./components/SignUp/SignUp";
import Profile from "./components/profile";
import Auth from "./components/auth/Auth";

function layout(element) {
  return (
    <>
      <Navbar />
      <BelowNavbar /> {/* Fixed usage */}
      {element}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={layout(<Home />)} />

          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route element={<Auth />}>
            <Route path="/cart" element={layout(<Cart />)} />
            <Route path="/profile" element={layout(<Profile />)} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
