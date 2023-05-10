import React from 'react';
import { NavLink } from 'react-router-dom';

const AgencyNavigation = () => {
    return (
        <div className='navigation-bg'>
            <div className="navigation">
                <div className="logo">
                    <h2>Noobz</h2>
                </div>
                <div className="items">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about-us'>About Us</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/contact-us'>Contact</NavLink>
                </div>
                <div className="cta">
                    <button className="custom-button">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default AgencyNavigation;