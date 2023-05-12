import React from 'react';
import arrowSvg from '../../images/arrowSvg.svg'

const WhyDifferent = () => {
    return (
        <div className='why-different'>
            <div className="container">
                <section>
                    <h2 className="section-title">Why we are different</h2>
                    <div className="points">
                        <div className="point">
                            <p className="count">01.</p>
                            <h5 className="title">Lorem ipsum dolor sit amet, consectetur </h5>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. <br /><br /> Dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="point">
                            <p className="count">02.</p>
                            <h5 className="title">Lorem ipsum dolor sit amet, consectetur </h5>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.<br /><br /> Dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="point">
                            <p className="count">03.</p>
                            <h5 className="title">Lorem ipsum dolor sit amet, consectetur </h5>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.<br /><br /> Dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="point">
                            <p className="count">04.</p>
                            <h5 className="title">Lorem ipsum dolor sit amet, consectetur </h5>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.<br /><br /> Dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </section>
            </div>

            <img className='arrowSvg' src={arrowSvg} alt="" />
        </div>
    );
};

export default WhyDifferent;