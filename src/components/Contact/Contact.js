import React from 'react';
import PageTopStyleBg from '../Utilities/PageTopStyleBg';
import SectionTitle from '../Utilities/SectionTitle';
import plane from '../../images/plane.svg'


const Contact = () => {
    return (
        <div className='container pt-110'>
            <div className="contact">
                <div className="contact-heading">
                    <div className="heading-texts">
                        <h2 className="title">Let’s Make it Happen Together</h2>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    </div>
                </div>

                <div className="contact-form">
                    <form>
                        <div className="name-email">
                            <div className="name">
                                <input type="text" placeholder='Name' required />
                                <div className="line-after"></div>
                            </div>
                            <div className="email">
                                <input type="email" placeholder='Email' required />
                                <div className="line-after"></div>
                            </div>

                        </div>
                        <div className="message">
                            <input type="text" placeholder='Message' required />
                            <div className="line-after"></div>
                        </div>
                        <button type="submit" className="custom-button">Send</button>
                    </form>

                    <img className='planeSvg' src={plane} alt="" />
                </div>


                <div className="other-possible-way">
                    <SectionTitle title='Other Possible Way'></SectionTitle>

                    <div className="possible-ways">
                        <div className="ways">
                            <div className="ways-line">
                                <p className="ways-count">01</p>
                                <div className="line"></div>
                            </div>
                            <div className="ways-detail">
                                <h5 className="ways-title">Contact Through</h5>
                                <ul className="contact-way">
                                    <li>email</li>
                                    <li>phone</li>
                                    <li>whatsapp</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ways">
                            <div className="ways-line">
                                <p className="ways-count">02</p>
                                <div className="line"></div>
                            </div>
                            <div className="ways-detail">
                                <h5 className="ways-title">Social</h5>
                                <ul className="contact-way">
                                    <li>facebook</li>
                                    <li>instagram</li>
                                    <li>linkedin</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <PageTopStyleBg></PageTopStyleBg>
        </div>
    );
};

export default Contact;