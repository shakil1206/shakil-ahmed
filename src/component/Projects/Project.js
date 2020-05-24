import React from 'react';
import './Projects.css';

const Project = (props) => {

    const { img, title, description, gitHub, liveLink } = props.project;

    return (
        <div className="col-md-4">
            <div className="card-group card-style">
                <div className="card">
                    <img src={img} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{title}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;