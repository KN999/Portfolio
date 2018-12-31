import React, { PropTypes } from 'react';
import "./Header.css";

class Header extends React.Component {
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

export default Header;