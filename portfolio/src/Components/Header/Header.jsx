import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  render () {

    var NavItems = {
      Home : {
        Name : "Home",
        url : "#Home"
      },

      AboutMe : {
        Name : "About Me",
        url : "#AboutMe"
      },

      Education : {
        Name : "Education",
        url : "#Education"
      },

      Skills : {
        Name : "Skills",
        url : "#Skills"
      },

      Projects : {
        Name : "Projects",
        url : "#Projects"
      }
    };

    var NavItem = [];

    for(var key in NavItems) {
      NavItem.push(
        <li className="Header-li">
          <a href={NavItems[key].url} className="Header-a">
            {NavItems[key].Name}
          </a>
        </li>
      );
    }

    return (
  
        <ul className="Header-ul">
          {NavItem}
        </ul>
  
    );
  }
}

export default Header;