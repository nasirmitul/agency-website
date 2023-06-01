import React, { useEffect, useState } from 'react';
import PageTopStyleBg from '../Utilities/PageTopStyleBg';
import SectionTitle from '../Utilities/SectionTitle';

import lineBend from '../../images/lineBend.svg';

const Heading = () => {


    const [projectsHeading, setProjectsHeading] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/projects/heading')
            .then(res => res.json())
            .then(data => setProjectsHeading(data))
    }, [])




    return (
        <div className='container pt-110'>
            <div className="projects-heading">
                <SectionTitle title='Our Projects'></SectionTitle>
                <h1 className='title'>{projectsHeading.title}</h1>
                <p className="desc">{projectsHeading.description}</p>

                <div className="scroll">
                    <p className="text">scroll</p>
                    <div className="line-after"></div>
                </div>
            </div>



            <img className='heading-line-svg' src={lineBend} alt="" />
            <PageTopStyleBg></PageTopStyleBg>
        </div>
    );
};

export default Heading;