import React, { useEffect, useState } from 'react';
import projectImage from '../../images/prototype.png'
const AllProjects = () => {

    const [allProjects, setAllProjects] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/all-project')
            .then(res => res.json())
            .then(data => {
                setAllProjects(data);
            })
    }, [])

    return (
        <div className='container'>
            <div className="all-projects">

                {
                    allProjects.map(project =>
                        <div key={project._id} className="project-data">
                            <div className="project">
                                <div className="main-data">
                                    <img src={project.projectImages[0]} alt="" className="project-img" />
                                    <div className="project-info">
                                        <h5 className="project-name">{project.projectName}</h5>
                                        <p className="project-type">{project.projectType}</p>
                                        <a className="project-live-view" href={project.projectLiveLink} target='_blank'>Live View</a>
                                        <p className="details">Details {`>>`}</p>
                                    </div>
                                </div>
                                <div className="style-data">
                                    <div className="line-after"></div>
                                    <div className="dot"></div>
                                </div>
                                <div className="black-data"></div>
                            </div>
                        </div>
                    )
                }




                {/* <div className="project-data">
                    <div className="project">
                        <div className="main-data">
                            <img src={projectImage} alt="" className="project-img" />
                            <div className="project-info">
                                <h5 className="project-name">Habito</h5>
                                <p className="project-type">Mobile Application</p>
                                <p className="details">Details {`>>`}</p>
                            </div>
                        </div>
                        <div className="style-data">
                            <div className="line-after"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="black-data"></div>
                    </div>
                </div>
                <div className="project-data">
                    <div className="project">
                        <div className="main-data">
                            <img src={projectImage} alt="" className="project-img" />
                            <div className="project-info">
                                <h5 className="project-name">Habito</h5>
                                <p className="project-type">Mobile Application</p>
                                <p className="details">Details {`>>`}</p>
                            </div>
                        </div>
                        <div className="style-data">
                            <div className="line-after"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="black-data"></div>
                    </div>
                </div>
                <div className="project-data">
                    <div className="project">
                        <div className="main-data">
                            <img src={projectImage} alt="" className="project-img" />
                            <div className="project-info">
                                <h5 className="project-name">Habito</h5>
                                <p className="project-type">Mobile Application</p>
                                <p className="details">Details {`>>`}</p>
                            </div>
                        </div>
                        <div className="style-data">
                            <div className="line-after"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="black-data"></div>
                    </div>
                </div>
                <div className="project-data">
                    <div className="project">
                        <div className="main-data">
                            <img src={projectImage} alt="" className="project-img" />
                            <div className="project-info">
                                <h5 className="project-name">Habito</h5>
                                <p className="project-type">Mobile Application</p>
                                <p className="details">Details {`>>`}</p>
                            </div>
                        </div>
                        <div className="style-data">
                            <div className="line-after"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="black-data"></div>
                    </div>
                </div>
                <div className="project-data">
                    <div className="project">
                        <div className="main-data">
                            <img src={projectImage} alt="" className="project-img" />
                            <div className="project-info">
                                <h5 className="project-name">Habito</h5>
                                <p className="project-type">Mobile Application</p>
                                <p className="details">Details {`>>`}</p>
                            </div>
                        </div>
                        <div className="style-data">
                            <div className="line-after"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="black-data"></div>
                    </div>
                </div>
                <div className="project-data">
                    <div className="project">
                        <div className="main-data">
                            <img src={projectImage} alt="" className="project-img" />
                            <div className="project-info">
                                <h5 className="project-name">Habito</h5>
                                <p className="project-type">Mobile Application</p>
                                <p className="details">Details {`>>`}</p>
                            </div>
                        </div>
                        <div className="style-data">
                            <div className="line-after"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="black-data"></div>
                    </div>
                </div>
                <div className="project-data">
                    <div className="project">
                        <div className="main-data">
                            <img src={projectImage} alt="" className="project-img" />
                            <div className="project-info">
                                <h5 className="project-name">Habito</h5>
                                <p className="project-type">Mobile Application</p>
                                <p className="details">Details {`>>`}</p>
                            </div>
                        </div>
                        <div className="style-data">
                            <div className="line-after"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="black-data"></div>
                    </div>
                </div>
                <div className="project-data">
                    <div className="project">
                        <div className="main-data">
                            <img src={projectImage} alt="" className="project-img" />
                            <div className="project-info">
                                <h5 className="project-name">Habito</h5>
                                <p className="project-type">Mobile Application</p>
                                <p className="details">Details {`>>`}</p>
                            </div>
                        </div>
                        <div className="style-data">
                            <div className="line-after"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="black-data"></div>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default AllProjects;