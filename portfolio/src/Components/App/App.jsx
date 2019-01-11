import React from "react";
import Header  from "./../Header/Header";
import HomePage from "./../HomePage/HomePage";
import Footer from "./../Footer/Footer";
import "./App.css";
import Projects from "./../Projects/Projects";
import Skills from "./../Skills/Skills";

const App = () => {
  return (
    <div className="container">
      <Header/>
        <main>
            <Skills/>
        </main>
      <Footer />
    </div>
    );
};

export default App;

//{this.props.children}