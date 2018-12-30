import React, { Component } from 'react';
import "./HomePage.css";
import wally from './wally.jpg';

class HomePage extends Component {
  render() {
    return (
      <div className = "HomePage">
        <h1 className = "HomeHeading">Navin Kumar</h1>
        <p className = "HomeContent">Few Good lines about me. Think About it Later :) .</p>
      </div>
    )
  }
}
export default HomePage;