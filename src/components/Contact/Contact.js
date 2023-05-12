import React from 'react';
import PageTopStyleBg from '../Utilities/PageTopStyleBg';

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
                </div>
            </div>
            <PageTopStyleBg></PageTopStyleBg>
        </div>
    );
};

export default Contact;