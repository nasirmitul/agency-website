import React, { useEffect, useState } from 'react';
import heroImage from '../../images/hero-image-two.svg'
import heroImageMobile from '../../images/hero-image-mobile.svg'
import wordMark from '../../images/wordMark.svg'
import PageTopStyleBg from '../Utilities/PageTopStyleBg';
import { Link } from 'react-router-dom';

import heroRightArrow from '../../images/heroRightArrow.svg'
import heroShape from '../../images/heroShape.svg'
import heroBottom from '../../images/heroBottom.svg'

const Hero = () => {


    const [hero, setHero] = useState([]);
    useEffect(() => {
        fetch('https://projitize.vercel.app/home-data/hero')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHero(data)
            })
    }, [])

    return (
        <div>
            {/* <div className='container'>
            
            <div className="hero-section pt-110">
                <section className="left-section">
                    <div className="left-content">
                        <div className="heading">
                            <h1>
                                Unleash Digital <span className='color'>Brilliance</span>. Your <span className='color'> Gateway</span> to Custom Apps, Websites, and Striking Designs.
                            </h1>
                        </div>
                        <p className="description">{hero.description}</p>
                        <Link to='/projects'>
                            <div className="cta">
                                <button className="custom-button">Our Works</button>
                                <div className="right-triangle"></div>
                            </div>
                        </Link>
                        <div className="numbers">
                            <div className="number-one">
                                <h2 className="number">{hero.projects}</h2>
                                <p className="number-info">total <br />projects</p>
                            </div>
                            <div className="divider"></div>
                            <div className="number-two">
                                <h2 className="number">{hero.experience}</h2>
                                <p className="number-info">years <br />of experience</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="right-section">
                    <img className='heroImage' src={heroImage} alt="" />
                    <img className='heroImageMobile' src={heroImageMobile} alt="" />
                </section>

                <PageTopStyleBg></PageTopStyleBg>
            </div>
            </div> */}


            <div className="wide-container">
                <div className="hero-section">
                    <div className="top-items">
                        <h1 className="heading">Unleash Digital <span className='color'>Brilliance</span>. Your <span className='color'> Gateway</span> to Custom Apps, Websites, and Striking Designs.</h1>
                        <p className="description">{hero.description}</p>

                        <Link to='/projects' className="cta">
                            <button className="button">Check Our Works</button>
                            <div className="right-arrow">
                                <img src={heroRightArrow} alt="" />
                            </div>
                        </Link>

                        
                        <img className='shape-one' src={heroShape} alt="" />
                        <img className='shape-two' src={heroShape} alt="" />
                    </div>
                    <div className="hero-bottom-img">
                        <img src={heroBottom} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;