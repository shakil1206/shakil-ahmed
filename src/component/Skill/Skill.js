import React from 'react';
import './Skill.css';
import Progress from '../Progress/Progress';

const Skill = () => {
    return (
        <div className="skill-bgColor">
            <div className="container">
                <div className="back-line d-flex align-items-center">
                    <div className="front-box d-flex align-items-center">
                        <p className="d-flex align-items-center">My Skills</p>
                    </div>
                </div>
                <div className="row">
                    <Progress done={85} title={"React"}></Progress>
                    <Progress done={80} title={"NodeJS"}></Progress>
                    <Progress done={90} title={"MongoDB"}></Progress>
                    <Progress done={95} title={"MySQL"}></Progress>
                </div>
            </div>
        </div>
    );
};

export default Skill;