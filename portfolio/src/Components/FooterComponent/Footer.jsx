import React, { Component } from 'react';
import LogoImg from './../wally.jpg';
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

    /*var ul = [];
      
      for(var item in items) {
        var image = item.imageurl;
        ul.push(
          <li>
            <img src={require( "./FooterImage/google+.png")} alttext={item.altext}/> 
            <a href={item.url}/>
          </li>)
          console.log(item["imageurl"]);
          ;
      }*/

    return (
      <footer>
        <div>
          <ul className="images">
          <li>
            <a href="https://plus.google.com/116455659890987722461">
              <img src={require( "./FooterImage/google+.png")} alttext="Google+" /> 
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100009753709063">
              <img src={require( "./FooterImage/facebook.png")} alttext="Facebook"/> 
            </a>
          </li>
          <li>
            <a href = "https://github.com/KN999">
              <img src={require( "./FooterImage/github.png")} alttext="Github"/> 
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/navin-kumar-42a261177/">
              <img src={require( "./FooterImage/linkedin.png")} alttext="Linkedin"/> 
            </a>
          </li>
         </ul>
        </div>
      </footer>
    )
  }
}
export default Footer;