import React, { useEffect, useState } from 'react';
import topRightArrow from '../../images/topRightPrimary.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import cancel from '../../images/add.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const AllProjects = () => {

    const [projectDetails, setProjectDetails] = useState(null);

    const [allProjects, setAllProjects] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/all-project')
            .then(res => res.json())
            .then(data => {
                setAllProjects(data);
            })
    }, [])

    projectDetails ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    return (
        <div>
            <div className={`common-popup-bg-project ${projectDetails && 'open'}`}>
                <div className="common-popup-project project-popup">
                    <div className="project-data">
                        <div className="project-name-cancel">
                            <p className="name">{projectDetails?.projectName}</p>
                            <div onClick={() => setProjectDetails(null)} className="cancel">
                                <img src={cancel} alt="" />
                            </div>
                        </div>

                        <div className="project-all-img">
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                navigation={true}
                                modules={[Navigation, Pagination]}
                                className="project-img">
                                {
                                    projectDetails?.projectImages?.map((image, i) =>
                                        <SwiperSlide key={i}>
                                            <img src={image} alt="" className="project-img" />
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>

                        <div className="project-type-live">
                            <p className="type">{projectDetails?.projectType}</p>
                            <a href={projectDetails?.projectLiveLink} target='_blank' className="live">Live View {'> >'}</a>
                        </div>

                        <div className="short-desc">
                            <div dangerouslySetInnerHTML={{ __html: projectDetails?.projectShortDesc }}></div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='container'>
                <div className="all-projects">
                    {
                        allProjects.map(project =>
                            <div key={project._id} className="project-data">
                                <div className="project">
                                    <div className="main-data">
                                        <div className="project-all-img">
                                            <Swiper
                                                pagination={{
                                                    dynamicBullets: true,
                                                }}
                                                navigation={true}
                                                modules={[Navigation, Pagination]}
                                                className="project-img">
                                                {
                                                    project.projectImages.map((image, i) =>
                                                        <SwiperSlide key={i}>
                                                            <img src={image} alt="" className="project-img" />
                                                        </SwiperSlide>
                                                    )
                                                }
                                            </Swiper>
                                        </div>
                                        <div className="project-info">
                                            <div className="project-name-type">
                                                <h5 className="project-name">{project.projectName}</h5>
                                                <p className="project-type">{project.projectType}</p>
                                            </div>
                                            <div className="project-actions">
                                                <p onClick={() => setProjectDetails(project)} className="details">Details {`>>`}</p>
                                                <a className="project-live-view" href={project.projectLiveLink} target='_blank'><img src={topRightArrow} alt="" /></a>
                                            </div>
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

                </div>
            </div>








            {/* <div className='container'>
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
                                            <div className="project-actions">
                                                <a className="project-live-view" href={project.projectLiveLink} target='_blank'>Live View</a>
                                                <p className="details">Details {`>>`}</p>
                                            </div>
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

                </div>
            </div> */}
        </div>
    );
};

export default AllProjects;