import React from 'react';
import PageTopStyleBg from '../Utilities/PageTopStyleBg';
import SectionTitle from '../Utilities/SectionTitle';
import plane from '../../images/plane.svg'
import scrollToTop from '../Utilities/ScrollToTop';
import { toast } from 'react-hot-toast';


const Contact = () => {
    scrollToTop();

    const handleContactForm = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const contactData = {
            name,
            email,
            message,
            markRead: false,
            time: new Date()
        }
        console.log(contactData);



        fetch('https://projitize.vercel.app/contact-mail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contactData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Thanks for the contact. we will reach you soon.', {
                        duration: 7000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
                else {
                    toast.error('Sorry, mail not sent. Please try again.', {
                        duration: 7000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
            })
            .catch(error => console.log(error))
    }




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
                    <form onSubmit={handleContactForm}>
                        <div className="name-email">
                            <div className="name">
                                <input name='name' type="text" placeholder='Name' required />
                                <div className="line-after"></div>
                            </div>
                            <div className="email">
                                <input name='email' type="email" placeholder='Email' required />
                                <div className="line-after"></div>
                            </div>
                        </div>
                        <div className="message">
                            <textarea name='message' placeholder='Message' required ></textarea>
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