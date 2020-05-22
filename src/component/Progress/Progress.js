import React from 'react';
import './Progress.css';



const Progress = ({ done, title }) => {
    return (

        <div className="col-md-6 ">
            <div className="backStyle">
                <div className="container1">
                    <h3 className="titleStyle">{title}</h3>
                    <div className="progressbar-container">
                        <div className="progressbar-complete" style={{ width: `${done}%` }}>
                            <div className="progressbar-liquid"></div>
                        </div>
                        <span className="progress">{done}%</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Progress;

