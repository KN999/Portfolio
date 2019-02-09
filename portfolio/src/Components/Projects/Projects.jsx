import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {

        var Project = {
            projectName1 : {
                url : "./ProjectsImages/ProjectsManagement.png",
                desc : <p className="Projects-p">
                            Ceratosaurus was a theropod dinosaur in the Late Jurassic, around 150 million years ago. This genus was first described in 1884 by American
                            paleontologist Othniel Charles Marsh based on a nearly complete skeleton discovered in Garden Park, Colorado, in rocks belonging to the 
                            Morrison Formation. In 2000 and 2006, a partial specimen from the Lourinhã Formation of Portugal was described, providing evidence for the 
                            presence of the genus outside of North America. Ceratosaurus was a predator with deep jaws supporting long, blade-like teeth. It had a
                            prominent, ridge-like horn on the midline of the snout and a pair of horns over the eyes. The forelimbs were very short but remained fully 
                            functional, with four-fingered hands. 
                         </p>,
                alt : "projects 1" 
            },

            projectsName2 : {
                url : "./ProjectsImages/ProjectsManagement.png",
                desc : <p className="Projects-p">
                            Ceratosaurus was a theropod dinosaur in the Late Jurassic, around 150 million years ago. This genus was first described in 1884 by American
                            paleontologist Othniel Charles Marsh based on a nearly complete skeleton discovered in Garden Park, Colorado, in rocks belonging to the 
                            Morrison Formation. In 2000 and 2006, a partial specimen from the Lourinhã Formation of Portugal was described, providing evidence for the 
                            presence of the genus outside of North America. Ceratosaurus was a predator with deep jaws supporting long, blade-like teeth. It had a
                            prominent, ridge-like horn on the midline of the snout and a pair of horns over the eyes. The forelimbs were very short but remained fully 
                            functional, with four-fingered hands.
                        </p>,

                alt : "projects 2"
            },

            projectsName3 : {
                url : "./ProjectsImages/ProjectsManagement.png",
                desc : <p className="Projects-p">
                            Ceratosaurus was a theropod dinosaur in the Late Jurassic, around 150 million years ago. This genus was first described in 1884 by American
                            paleontologist Othniel Charles Marsh based on a nearly complete skeleton discovered in Garden Park, Colorado, in rocks belonging to the 
                            Morrison Formation. In 2000 and 2006, a partial specimen from the Lourinhã Formation of Portugal was described, providing evidence for the 
                            presence of the genus outside of North America. Ceratosaurus was a predator with deep jaws supporting long, blade-like teeth. It had a
                            prominent, ridge-like horn on the midline of the snout and a pair of horns over the eyes. The forelimbs were very short but remained fully 
                            functional, with four-fingered hands.
                        </p>,
                alt : "projects 3"
            },

            projectsName4 : {
                url : "./ProjectsImages/ProjectsManagement.png",
                desc : <p className="Projects-p">
                            Ceratosaurus was a theropod dinosaur in the Late Jurassic, around 150 million years ago. This genus was first described in 1884 by American
                            paleontologist Othniel Charles Marsh based on a nearly complete skeleton discovered in Garden Park, Colorado, in rocks belonging to the 
                            Morrison Formation. In 2000 and 2006, a partial specimen from the Lourinhã Formation of Portugal was described, providing evidence for the 
                            presence of the genus outside of North America. Ceratosaurus was a predator with deep jaws supporting long, blade-like teeth. It had a
                            prominent, ridge-like horn on the midline of the snout and a pair of horns over the eyes. The forelimbs were very short but remained fully 
                            functional, with four-fingered hands.
                        </p>,
                alt : "projects 4"
            }
        };

        var Heading = (
            <header id = "Projects">
                <h1 className="Projects-Heading">Projects</h1>    
            </header>
        );

        var projects = [];

        for(var key in Project) {
                projects.push(<tr className="Table-Row">
                    <td className="Projects-td-img"><img src={require(`${Project[key].url}`)} className="Projects-Image" /></td>
                    <td className="Projects-td-Description">{Project[key].desc}</td>
                </tr>)
        }
        
    return (
        <div className="Projects-div">
          {Heading}
        <table className="Projects-Table"> 
           {projects}
        </table>
      </div>
    )
  }
}

export default Projects;
