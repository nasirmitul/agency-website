import React, { useEffect, useState } from 'react';
import PageTopStyleBg from '../Utilities/PageTopStyleBg';
import SectionTitle from '../Utilities/SectionTitle';

import lineBend from '../../images/lineBend.svg'

const Heading = () => {

    const [headingData, setHeadingData] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/about/heading')
            .then(res => res.json())
            .then(data => setHeadingData(data))
    }, [])

    return (
        <div className='container pt-110'>
            <div className="about-heading">
                <SectionTitle title='What We Do'></SectionTitle>
                <h1 className='title'>{headingData.title}</h1>
            </div>

            <img className='heading-line-svg' src={lineBend} alt="" />

            <PageTopStyleBg></PageTopStyleBg>
        </div>
    );
};

export default Heading;