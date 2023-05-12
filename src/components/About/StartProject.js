import React from 'react';
import arrowTopRightDiagonalBigger from '../../images/arrowTopRightDiagonalBigger.svg'
import { Link } from 'react-router-dom';

const StartProject = () => {
    return (
        <div className='container'>
            <div className="start-project">
                <h1 className='title'>Interested to start an <br /> project? Let’s Discuss!</h1>

                <Link to='/contact-us'><img className='action-img' src={arrowTopRightDiagonalBigger} alt="" /></Link>

            </div>
        </div>
    );
};

export default StartProject;