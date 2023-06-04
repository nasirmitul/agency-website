import React from 'react';
import arrowTopRightDiagonalBigger from '../../images/arrowTopRightDiagonalBigger.svg'
import { Link } from 'react-router-dom';

const GotAProject = () => {
    return (
        <div className='container'>
            <div className="got-a-project">
                <h1 className='title'>Got a Project in Mind? <br />Cool, Let's Create Together!</h1>
                <Link className='icon' to='/contact-us'><img className='action-img' src={arrowTopRightDiagonalBigger} alt="" /></Link>

                <Link className='button' to='/contact-us'>
                    <button className='custom-button'>Contact Us</button>
                </Link>
                
            </div>
        </div>
    );
};

export default GotAProject;