import React from 'react';
import './Projects.css';
import doctorsPortal from '../../images/projectImage/doctorsPortal.JPG';
import emaJohn from '../../images/projectImage/emaJohn.JPG';
import hotOnion from '../../images/projectImage/hotOnion.JPG';
import hotGadgets from '../../images/projectImage/hotGadgets.JPG';
import pandaCommerce from '../../images/projectImage/pandaCommerce.JPG';
import Project from './Project';

const Projects = () => {

    const allProjects=[
        {id:'01',img:""+doctorsPortal, title:"Doctors Portal", description:"A fullstack doctors portal website.",
         gitHub:"https://github.com/shakil1206/doctors-portal", liveLink:"https://doctorsportal-b406a.web.app/"},

         {id:'02',img:""+hotOnion, title:"Hot Onion Restaurant", description:"A fullstack hot onion restaurant website.",
         gitHub:"https://github.com/shakil1206/hot-onion-restaurent", liveLink:"https://hot-onion-resturent.firebaseapp.com/"},

         {id:'03',img:""+emaJohn, title:"Ema-John", description:"A fullstack Ema-John e-commerce website.",
         gitHub:"https://github.com/shakil1206/ema-john-simple", liveLink:"https://nifty-dijkstra-258270.netlify.app/"},

         {id:'04',img:""+hotGadgets, title:"Hot Gatgets", description:"A front-end E-commerce website.",
         gitHub:"https://github.com/shakil1206/hot-gadgets", liveLink:"https://shakil1206.github.io/hot-gadgets/"},

         {id:'05',img:""+pandaCommerce, title:"Panda Commerce", description:"A front-end Panda Commerce website.",
         gitHub:"https://github.com/shakil1206/panda-commerce1", liveLink:"https://shakil1206.github.io/panda-commerce1/"}
    ]


    return (
        <div className="container skill">
            <div className="back-line d-flex align-items-center skill-title">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">Projects</p>
                </div>
            </div>

            <div className="row">
                {
                    allProjects.map(project=><Project key={project.id} project={project} ></Project>)
                }
            </div>

        </div>
    );
};

export default Projects;