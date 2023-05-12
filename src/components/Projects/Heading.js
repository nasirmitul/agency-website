import React from 'react';
import PageTopStyleBg from '../Utilities/PageTopStyleBg';
import SectionTitle from '../Utilities/SectionTitle';

import lineBend from '../../images/lineBend.svg';

const Heading = () => {
    return (
        <div className='container pt-110'>
            <div className="projects-heading">
                <SectionTitle title='Our Projects'></SectionTitle>
                <h1 className='title'>Projects we have<br /> done  so far</h1>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, rerum fugiat dolores repudiandae laboriosam, consequatur esse praesentium alias ducimus expedita at ab illum ipsa quis!</p>

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