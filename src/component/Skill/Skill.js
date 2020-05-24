import React, { useState, useEffect } from 'react';
import './Skill.css';
import Progress from '../Progress/Progress';


const Skill = () => {

    const allSkill = [
        { id: "01", skillType: 'web', skill: "HTML", expertLevel: 95 },
        { id: "02", skillType: 'web', skill: "CSS", expertLevel: 95 },
        { id: "03", skillType: 'web', skill: "Bootstrap", expertLevel: 95 },
        { id: "04", skillType: 'web', skill: "Meterial-UI", expertLevel: 95 },
        { id: "05", skillType: 'web', skill: "React", expertLevel: 90 },
        { id: "06", skillType: 'web', skill: "Redux", expertLevel: 90 },
        { id: "07", skillType: 'web', skill: "Node.JS", expertLevel: 65 },
        { id: "08", skillType: 'web', skill: "MongoDB", expertLevel: 90 },
        { id: "09", skillType: 'web', skill: "MySQL", expertLevel: 98 },

        { id: "10", skillType: 'programming', skill: "JavaScript", expertLevel: 90 },
        { id: "11", skillType: 'programming', skill: "Java", expertLevel: 90 },
        { id: "12", skillType: 'programming', skill: "C++", expertLevel: 75 },
        { id: "13", skillType: 'programming', skill: "C", expertLevel: 80 },
        { id: "14", skillType: 'programming', skill: "PHP", expertLevel: 75 },

        { id: "15", skillType: 'tools', skill: "Git", expertLevel: 95 },
        { id: "16", skillType: 'tools', skill: "Web Pack", expertLevel: 90 },
        { id: "17", skillType: 'tools', skill: "VSCode", expertLevel: 95 },
        { id: "18", skillType: 'tools', skill: "Dev Tool", expertLevel: 90 },
        { id: "19", skillType: 'tools', skill: "Photoshop", expertLevel: 85 },
        { id: "20", skillType: 'tools', skill: "Illustrator", expertLevel: 70 },
    ];

    const [getSkill, setGetSkill] = useState([]);
    const [webStyle, setWebStyle] = useState(true);
    const [progStyle, setProgStyle] = useState(false);
    const [toolsStyle, setToolsStyle] = useState(false);


    useEffect(() => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'web');
        setGetSkill(specificSkill);

    }, [])


    const handleWeb = () => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'web');
        setGetSkill(specificSkill);

        setWebStyle(true);
        setProgStyle(false);
        setToolsStyle(false);

    }

    const handleProgramming = () => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'programming');
        setGetSkill(specificSkill);

        setWebStyle(false);
        setProgStyle(true);
        setToolsStyle(false);
    }

    const handleTools = () => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'tools');
        setGetSkill(specificSkill);

        setWebStyle(false);
        setProgStyle(false);
        setToolsStyle(true);
    }

    return (
        <div id="skill-section" className="container skill">
            <div  className="back-line d-flex align-items-center skill-title">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">My Skills</p>
                </div>
            </div>
            
            <button onClick={handleWeb} className={webStyle? "btn btn-success my-2 my-sm-0 btn-style" : "btn btn-outline-success my-2 my-sm-0 btn-style"} >Web</button>
            <button onClick={handleProgramming} className={progStyle ? "btn btn-success my-2 my-sm-0 btn-style" : "btn btn-outline-success my-2 my-sm-0 btn-style"}>Programming</button>
            <button onClick={handleTools} className={toolsStyle ? "btn btn-success my-2 my-sm-0 btn-style" : "btn btn-outline-success my-2 my-sm-0 btn-style"}>Tools</button>

            <div className="row">
                {
                    getSkill.map(skill => <Progress key={skill.id} done={skill.expertLevel} title={skill.skill}></Progress>)
                }
            </div>
        </div>
    );
};

export default Skill;