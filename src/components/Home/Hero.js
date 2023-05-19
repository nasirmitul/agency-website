import React from 'react';
import heroImage from '../../images/hero-image-two.svg'
import heroIcon1 from '../../images/heroIcon1.svg'
import heroIcon2 from '../../images/heroIcon2.svg'
import PageTopStyleBg from '../Utilities/PageTopStyleBg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='container'>
            <div className="hero-section pt-110">

                <section className="left-section">
                    <div className="left-content">
                        <div className="heading">
                            <h1>
                                Lorem ipsum dolor sit amet, con se
                                {/* <img className='img1' src={heroIcon1} alt="" /> */}
                                cte turadipiscing elit, sed do eiusmod.
                                {/* <img className='img2' src={heroIcon2} alt="" /> */}
                            </h1>
                        </div>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        <Link to='contact-us'>
                            <div className="cta">
                                <button className="custom-button">Contact Us</button>
                                <div className="right-triangle"></div>
                            </div>
                        </Link>
                        <div className="numbers">
                            <div className="number-one">
                                <h2 className="number">20</h2>
                                <p className="number-info">total <br />projects</p>
                            </div>
                            <div className="divider"></div>
                            <div className="number-two">
                                <h2 className="number">03</h2>
                                <p className="number-info">months <br />of experience</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="right-section">
                    <img src={heroImage} alt="" />
                </section>



                <PageTopStyleBg></PageTopStyleBg>
            </div>
        </div>
    );
};

export default Hero;