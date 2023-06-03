import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

const NotFound = () => {
    return (
        <div>
            <div className="not-found">
                <div className="not-found-bg">
                    <h1 className="error-code-bg">404</h1>
                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                    <div className="line"></div>
                    <h1 className="we-lost">We <br /> <span className='color'>lost</span> <br /> somewhere</h1>
                    <h1 className="error"><span className='color'>404</span> not found</h1>
                    <div className="action">
                        <Link to='/'>Go back home {'> >'}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;