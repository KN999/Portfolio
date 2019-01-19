import React , {Component} from 'react';
import "./Skills.css";

class Skills extends Component {
    render() {

        var Skills = {
            C : {
                url : "./SkillsImages/C.png",
                alt : "C"
            },
            
            Cpp : {
                url : "./SkillsImages/C++.png",
                alt : "C++"
            },

            Python : {
                url : "./SkillsImages/Python.png",
                alt : "Python"
            },

            Linux : {
                url : "./SkillsImages/Linux.png",
                alt : "Linux"
            },

            Html : {
                url : "./SkillsImages/Html5.png",
                alt : "HTML"
            },

            CSS : {
                url : "./SkillsImages/CSS.png",
                alt : "CSS3"
            },

            GitHub : {
                url : "./SkillsImages/GitHub.png",
                alt : "GitHub"
            }
        }

        var Logos = [] ;

        for (var keys in Skills) {
            Logos.push(
                <img src={require(`${Skills[keys].url}`)} className="SkillsImage"/>
            );
        }


       var  Heading = (
        <header id = "Skills"> 
        <h1 className="Skills-Heading">Skills</h1>
        </header>
       );

        return(
        <div>
          {Heading}
            <div className="Logos">  
                {Logos}
            </div>
        </div>
        )
    }
}

export default Skills;