import React from "react";
import HomePage from "./HomePage"
import NavBar  from "./HeaderComponent/NavBar"
import Home from "./HeaderComponent/Home"
import "./../App.css";
import Footer from "./FooterComponent/Footer"
const App = () => {
  return (
    <div >
      <NavBar/>
      <HomePage/>
      <Footer />
    </div>
    );
};

export default App;