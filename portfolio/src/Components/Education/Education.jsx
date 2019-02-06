import React , {Component} from "React";
import "./Education.css";


class Education extends Component {
    render() {

        var Educations = {
            Secondary : {
                Year : "2013 - 2014",
                Course : "Secondary",
                Place : "Kendriya Vidyalaya BSF Camp Chhawala" 
            },

            Senior_Secondary : {
                Year : "2015 - 2016",
                Course : "Senior Secondary",
                Place : "Kendriya Vidyalaya BSF Camp Chhawala"
            },

            Btech : {
                Year : "2017 - 2021",
                Course : "B.tech (IT)",
                Place : "Maharaja Surajmal Institute of Technology"
            }
        };

        var Education = [];

        for (var key in Educations) {
            Education.push(<li className="list-of-Education">
                <br/><p>{Educations[key].Year}
                <br/>{Educations[key].Course}</p>
                <br/><div><i class="fal fa-circle"></i><span className="single-timeline-horizontal"></span></div>
                <br/><p>{Educations[key].Place}</p>
                </li>
            );
        }

        var Heading = (
            <header id = "Education">
                <h1 className="Education-Heading">Education</h1>
            </header>
        );


        return (
                <div className="whole-education-div">
                    {Heading}
                    <ul className="Education">
                    {Education}
                    </ul>
                </div>
            
        )
    }
}

export default Education;