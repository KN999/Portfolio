import React, { Component } from 'react';
import './Project.css';

class Projects extends Component {
  render() {

        var Projects = {
            projectName1 : {
                url : "./ProjectImage/ProjectManagement.png",
                desc : <p>
                            Ceratosaurus was a theropod dinosaur in the Late Jurassic, around 150 million years ago. This genus was first described in 1884 by American
                            paleontologist Othniel Charles Marsh based on a nearly complete skeleton discovered in Garden Park, Colorado, in rocks belonging to the 
                            Morrison Formation. In 2000 and 2006, a partial specimen from the Lourinhã Formation of Portugal was described, providing evidence for the 
                            presence of the genus outside of North America. Ceratosaurus was a predator with deep jaws supporting long, blade-like teeth. It had a
                            prominent, ridge-like horn on the midline of the snout and a pair of horns over the eyes. The forelimbs were very short but remained fully 
                            functional, with four-fingered hands. 
                         </p>,
                alt : "Project 1" 
            },

            projectName2 : {
                url : "./ProjectImage/ProjectManagement.png",
                desc : <p>
                            Ceratosaurus was a theropod dinosaur in the Late Jurassic, around 150 million years ago. This genus was first described in 1884 by American
                            paleontologist Othniel Charles Marsh based on a nearly complete skeleton discovered in Garden Park, Colorado, in rocks belonging to the 
                            Morrison Formation. In 2000 and 2006, a partial specimen from the Lourinhã Formation of Portugal was described, providing evidence for the 
                            presence of the genus outside of North America. Ceratosaurus was a predator with deep jaws supporting long, blade-like teeth. It had a
                            prominent, ridge-like horn on the midline of the snout and a pair of horns over the eyes. The forelimbs were very short but remained fully 
                            functional, with four-fingered hands.
                        </p>,

                alt : "Project 2"
            },

            projectName3 : {
                url : "./ProjectImage/ProjectManagement.png",
                desc : <p>
                            Ceratosaurus was a theropod dinosaur in the Late Jurassic, around 150 million years ago. This genus was first described in 1884 by American
                            paleontologist Othniel Charles Marsh based on a nearly complete skeleton discovered in Garden Park, Colorado, in rocks belonging to the 
                            Morrison Formation. In 2000 and 2006, a partial specimen from the Lourinhã Formation of Portugal was described, providing evidence for the 
                            presence of the genus outside of North America. Ceratosaurus was a predator with deep jaws supporting long, blade-like teeth. It had a
                            prominent, ridge-like horn on the midline of the snout and a pair of horns over the eyes. The forelimbs were very short but remained fully 
                            functional, with four-fingered hands.
                        </p>,
                alt : "Project 3"
            },

            projectName4 : {
                url : "./ProjectImage/ProjectManagement.png",
                desc : <p>
                            Ceratosaurus was a theropod dinosaur in the Late Jurassic, around 150 million years ago. This genus was first described in 1884 by American
                            paleontologist Othniel Charles Marsh based on a nearly complete skeleton discovered in Garden Park, Colorado, in rocks belonging to the 
                            Morrison Formation. In 2000 and 2006, a partial specimen from the Lourinhã Formation of Portugal was described, providing evidence for the 
                            presence of the genus outside of North America. Ceratosaurus was a predator with deep jaws supporting long, blade-like teeth. It had a
                            prominent, ridge-like horn on the midline of the snout and a pair of horns over the eyes. The forelimbs were very short but remained fully 
                            functional, with four-fingered hands.
                        </p>,
                alt : "Project 4"
            }
        };

        var Project = [];

        for(var key in Projects) {
                Project.push(<tr>
                    <td><img src={require(`${Projects[key].url}`)} className="Project-Image" /></td>
                    <td>{Projects[key].desc}</td>
                </tr>)
        }
        
        


    return (
      <div>
        <table className="Project-Table"> 
           {Project}
        </table>
      </div>
    )
  }
}

export default Projects;
