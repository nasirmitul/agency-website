import React from 'react';

const Achievements = () => {
    return (
        <div className="container">
            <div className='achievements'>
                <div className="title"><h3>Achievements</h3></div>
                <div className="achievement">
                    <p className="achievement-name">Our <br />Satisfied Clients</p>
                    <p className="achievement-number">10+</p>
                </div>
                <div className="achievement">
                    <p className="achievement-name">Total <br />Project Completed</p>
                    <p className="achievement-number">22+</p>
                </div>
                <div className="achievement">
                    <p className="achievement-name">Years <br />of Experience</p>
                    <p className="achievement-number">03+</p>
                </div>
            </div>
        </div>
    );
};

export default Achievements;