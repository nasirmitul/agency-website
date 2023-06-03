import React from 'react';

import arrowUp from '../../images/arrowUp.svg'

const GoToTop = () => {
    return (
        <div className='go-to-top'>
            <a href="#" className='to-back-text'>
                <div className="line-before"></div>
                <p>Back To Top</p>
            </a>

            <a href="#" className='arrow-up'>
                <div className="box">
                    <img src={arrowUp} alt="" />
                </div>
            </a>
        </div>
    );
};

export default GoToTop;