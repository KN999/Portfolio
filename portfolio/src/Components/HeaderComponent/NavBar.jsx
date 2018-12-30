import React, { PropTypes } from 'react';
//import Home from "./Home";
import "./NavBar.css";
//import  Link  from 'react-router-dom';

class NavBar extends React.Component {
  render () {
    return (
      <header>
        <ul>
          <li>
            <a href="/">
                Home
            </a>
          </li>
          <li className = "inline">
            <a href="/">
                Project
            </a>
          </li>
          <li className = "inline">
            <a href="/">
                Skills
            </a>
          </li>
          <li className = "inline">
            <a href="/">
                Contacts
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default NavBar;