import React, { useEffect } from 'react';
import './About.css';
import shakil from '../../images/ShakilAhmed.png';
import Aos from "aos";
import "aos/dist/aos.css";
import CV from '../../images/CV/ShakilAhmed.pdf';


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div id="about-section" className="container about">
            <div  className="back-line d-flex align-items-center">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">About Me</p>
                </div>
            </div>
            <div className="row">
                <div data-aos="flip-down" className="col-md-4 img-size">
                    <img src={shakil} alt="Shakil Ahmed" />
                </div>
                <div data-aos="flip-up" className="col-md-8 about-mySelf">
                    <p>Hello, I'm Shakil Ahmed, a passionate computer engineer. I currently develop web and desktop applications. My core skill is based on JavaScript and Java. I love to make the web more open to the world. I love programming. (Curious Programmer). I am currently pursuing my bachelor's degree at the Green University of Bangladesh, Dhaka, Bangladesh(7th Semester Running). I am available for any good opportunities.</p>
                    <a href={CV} download="Shakil Ahmed CV"><button className="btn btn-success my-2 my-sm-0 btn-style">Get Resume</button></a>
                    <a href="#skill-section"><button className="btn btn-outline-success my-2 my-sm-0 btn-style">My Skill</button></a>
                </div>
            </div>
        </div>
    );
};

export default About;