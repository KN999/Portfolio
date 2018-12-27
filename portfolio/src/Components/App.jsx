import React from "react";
import HomePage from "./HomePage"
import NavBar  from "./HeaderComponent/NavBar"
import Home from "./HeaderComponent/Home"
import "./../App.css";
const App = () => {
  return (
    <div >
      <NavBar/>
      <HomePage/>
    </div>
    );
};

export default App;