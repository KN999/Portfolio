import React, { Component } from 'react';
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className = "homepage" id = "Home">
        <h1 className = "homepage-heading">Navin Kumar</h1>
        <p className = "homepage-content">Few Good lines about me. That makes me happy :) .</p>
      </div>
    )
  }
}

export default HomePage;