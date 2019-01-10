import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
  render() {
    var items = {
      linkedin: {
        url: "https://www.linkedin.com/in/navin-kumar-42a261177/",
        imageurl: "./FooterImage/linkedin.png",
        alttext: "Linkedin"
      },
      github: {
        url: "https://github.com/KN999",
        imageurl: "./FooterImage/github.png",
        alttext: "Github"
      },
      facebook: {
        url: "https://www.facebook.com/profile.php?id=100009753709063&sk=friends&collection_token=100009753709063%3A2356318349%3A33&lst=100009753709063%3A100009753709063%3A1542742370",
        imageurl: "./FooterImage/facebook.png",
        alttext: "Facebook"
      },
      google: {
        url: "https://plus.google.com/116455659890987722461",
        imageurl: "./FooterImage/google+.png",
        alttext: "Google"
      }
    };

    var thumbnails = [];
      
      for(var key in items) {
        thumbnails.push(
          <li className="Footer-li">
            <a href={items[key].url} className="Footer-a">
              <img src={require(`${items[key].imageurl}`)} alttext={items[key].imageurl}/> 
            </a>
          </li>)
      }

    return (
      <footer>
        <div>
          <ul className="Footer-ul">
            {thumbnails}
         </ul>
        </div>
      </footer>
    )
  }
}

export default Footer;

