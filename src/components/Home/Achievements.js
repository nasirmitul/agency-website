import React, { useEffect, useState } from 'react';

const Achievements = () => {

    const [achievement, setAchievement] = useState([]);

    useEffect(() => {
        fetch('https://projitize.vercel.app/home-data/achievement')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAchievement(data)
            })
    }, [])


    return (
        <div className="container">
            <div className='achievements'>
                <div className="title"><h3>Achievements</h3></div>
                <div className="achievement">
                    <p className="achievement-name">Our <br />Satisfied Clients</p>
                    <p className="achievement-number">{achievement.clients}</p>
                </div>
                <div className="achievement">
                    <p className="achievement-name">Total <br />Project Completed</p>
                    <p className="achievement-number">{achievement.projects}</p>
                </div>
                <div className="achievement">
                    <p className="achievement-name">Years <br />of Experience</p>
                    <p className="achievement-number">{achievement.experience}</p>
                </div>
            </div>
        </div>
    );
};

export default Achievements;