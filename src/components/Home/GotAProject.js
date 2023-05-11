import React from 'react';
import arrowTopRightDiagonalBigger from '../../images/arrowTopRightDiagonalBigger.svg'
import { Link } from 'react-router-dom';

const GotAProject = () => {
    return (
        <div className='container'>
            <div className="got-a-project">
                <h1 className='title'>Got a Project in Mind? <br />Cool, Let's Create Together!</h1>

                <Link to='/contact-us'><img className='action-img' src={arrowTopRightDiagonalBigger} alt="" /></Link>

            </div>
        </div>
    );
};

export default GotAProject;