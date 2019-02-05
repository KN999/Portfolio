import React, {Component} from "react";
import "./AboutMe.css";

class AboutMe extends Component {
    render () {

        var Heading = (
                        <header id = "AboutMe"> 
                        <h1 className="AboutMe-Heading"> AboutMe </h1>
                        </header>

        );

        var myimage = (
                        <img src = {require("./photo1.jpg")} className="myimage"/>

        );

        var aboutme = (
                        <p className="goodstuff">
                            Few good lines about me.So, That when a person reads it , makes them feel good about me. How you doin that
                            was said by joey and then blah blah blah blah lol lol lol lol giggle giggle giggle hehehehehehehhe more giggle
                            ha ha ha ha ha ha ha kik kik k i k i. 
                        </p>
        );

        return (
                <div className="whole-aboutme-div">
                    {Heading} 
                    <div className="aboutme-content-div"> 
                        <table className="aboutme-content-table">
                            <tr>
                                <td className="aboutme-image-td">{myimage}</td>
                                <td className="aboutme-goodstuff-td">{aboutme}</td>
                            </tr>
                        </table>
                    </div>
                </div>
        )
    }
}

export default AboutMe;