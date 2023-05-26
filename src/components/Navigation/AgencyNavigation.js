import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const AgencyNavigation = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);


    navigationOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    return (
        <div className='navigation-bg'>
            <div className="navigation">
                <div className="logo">
                    <Link to='/'><h2>Projitize</h2></Link>
                </div>
                <div className={`items`}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about-us'>About Us</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/contact-us'>Contact</NavLink>
                </div>
                <div className="cta">
                    <button className="custom-button">Contact Us</button>
                </div>

                <div onClick={() => setNavigationOpen(!navigationOpen)} className={`hamburger-icon ${navigationOpen && 'open'}`}>
                    <div className="line-one"></div>
                    <div className="line-two"></div>
                </div>
            </div>

            <div className={`mobile-items ${navigationOpen && 'open'}`}>
                <NavLink onClick={() => setNavigationOpen(!navigationOpen)} to='/'>Home</NavLink>
                <NavLink onClick={() => setNavigationOpen(!navigationOpen)} to='/about-us'>About Us</NavLink>
                <NavLink onClick={() => setNavigationOpen(!navigationOpen)} to='/projects'>Projects</NavLink>
                <NavLink onClick={() => setNavigationOpen(!navigationOpen)} to='/contact-us'>Contact</NavLink>
            </div>

        </div>
    );
};

export default AgencyNavigation;