import React from "react";
import Header  from "./../Header/Header";
import HomePage from "./../HomePage/HomePage";
import Footer from "./../Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header/>
      <HomePage/>
      <Footer />
    </div>
    );
};

export default App;