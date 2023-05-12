import React from 'react';
import PageTopStyleBg from '../Utilities/PageTopStyleBg';
import SectionTitle from '../Utilities/SectionTitle';

import lineBend from '../../images/lineBend.svg'

const Heading = () => {
    return (
        <div className='container pt-110'>
            <div className="about-heading">
                <SectionTitle title='What We Do'></SectionTitle>
                <h1 className='title'>We make strategies, design & development to create valuable products.</h1>
            </div>

            <img className='heading-line-svg' src={lineBend} alt="" />

            <PageTopStyleBg></PageTopStyleBg>
        </div>
    );
};

export default Heading;