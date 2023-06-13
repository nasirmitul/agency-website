import React from 'react';
import PageTopStyleBg from '../Utilities/PageTopStyleBg';
import circles from '../../images/circles.svg'
import rightArrowWhite from '../../images/rightArrowWhite.svg'
import { Link } from 'react-router-dom';
import projitize from '../../images/logoFull.svg'


const Footer = () => {
    return (
        <div className='footer'>
            <PageTopStyleBg></PageTopStyleBg>
            <img src={circles} alt="" className="circles" />

            <div className="container">

                <div className="heading">
                    <div className="logo">
                        <Link to='/'><img src={projitize} alt="" /></Link>
                    </div>
                    <div className="get-started">
                        <h3>Ready to get started?</h3>
                        <button className="custom-button">Get Started</button>
                    </div>
                </div>

                <div className="email-links">
                    <div className="enter-email">
                        <h3 className="email-heading">Enter Your Email Address <br /> to make us communicate with you</h3>

                        <form action="">
                            <input type="email" placeholder='Email Address' required />
                            <button type='submit'><img src={rightArrowWhite} alt="" /></button>
                        </form>
                    </div>

                    <div className="links">
                        <div className="service column">
                            <h5 className="link-title">Service</h5>
                            <Link className='link' to='/home#services'>App Development</Link>
                            <Link className='link' to='/'>Web Development</Link>
                            <Link className='link' to='/'>Web Design</Link>
                            <Link className='link' to='/'>Digital Marketing</Link>
                        </div>
                        <div className="about-us column">
                            <h5 className="link-title">About Us</h5>
                            <Link className='link' to='/'>Our Story</Link>
                            <Link className='link' to='/'>Benefit</Link>
                            <Link className='link' to='/'>Team</Link>
                            <Link className='link' to='/'>Carrier</Link>
                        </div>
                        <div className="help column">
                            <h5 className="link-title">Help</h5>
                            <Link className='link' to='/'>FAQ</Link>
                            <Link className='link' to='/contact-us'>Contact</Link>
                        </div>
                    </div>
                </div>

                <div className="terms-policy">
                    <Link to=''>Terms and Conditions</Link>
                    <Link to=''>Privacy Policy</Link>
                </div>


                <p className="copyright">&copy; 2023, Projitize, All rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;