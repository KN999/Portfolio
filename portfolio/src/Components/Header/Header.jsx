import React, { PropTypes } from 'react';
import "./Header.css";

class Header extends React.Component {
  render () {
    return (
      <header>
        <ul className="Header-ul">
          <li className="Header-li">
            <a href="/" className="Header-a">
                Home
            </a>
          </li>
          <li className="Header-li">
            <a href="/" className="Header-a">
                Project
            </a>
          </li>
          <li className = "Header-li">
            <a href="/" className="Header-a">
                Skills
            </a>
          </li>
          <li className = "Header-li">
            <a href="/" className="Header-a">
                Contacts
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;