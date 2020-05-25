import React from 'react';
import './Footer.css';
import { GoRepoForked } from 'react-icons/go';

const Footer = () => {
    return (
        <div className='foooter'>
            <div className="container skill">
                <div className="row copy">
                    <div className="col-md-6 d-flex align-items-center justify-content-center ">
                        Copyright &copy; 2020 Shakil Ahmed
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center dev">
                    <a href="https://github.com/shakil1206/shakil-ahmed" target="_blank" rel="noopener noreferrer" ><GoRepoForked/></a>                     
                    <h4> <span className="heart">&hearts;</span> Developed BY ME</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;