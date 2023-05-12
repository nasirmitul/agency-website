import React from 'react';
import projectImage from '../../images/prototype.png'
const AllProjects = () => {
    return (
        <div className='container'>
            <div className="all-projects">
                <div className="project">
                    <img src={projectImage} alt="" className="project-img" />
                    <div className="project-info">
                        <h5 className="project-name">Habito</h5>
                        <p className="project-type">Mobile Application</p>
                        <p className="details">Details {`>>`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;