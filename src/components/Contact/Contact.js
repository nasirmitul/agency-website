import React, { useEffect, useState } from 'react';
import PageTopStyleBg from '../Utilities/PageTopStyleBg';
import SectionTitle from '../Utilities/SectionTitle';
import plane from '../../images/plane.svg'
import scrollToTop from '../Utilities/ScrollToTop';
import { toast } from 'react-hot-toast';
import GoToTop from '../Utilities/GoToTop';



const Contact = () => {
    scrollToTop();
    const [copiedText, setCopiedText] = useState('');
    const [contactHeading, setContactHeading] = useState([]);
    const [contactThrough, setContactThrough] = useState([]);
    const [contactSocial, setContactSocial] = useState([]);



    useEffect(() => {
        fetch('https://projitize.vercel.app/contact/contact-through')
            .then(res => res.json())
            .then(data => {
                setContactThrough(data);
            })
    }, [])

    useEffect(() => {
        fetch('https://projitize.vercel.app/contact/social')
            .then(res => res.json())
            .then(data => {
                setContactSocial(data);
            })
    }, [])

    useEffect(() => {
        fetch('https://projitize.vercel.app/contact/heading')
            .then(res => res.json())
            .then(data => {
                setContactHeading(data);
            })
    }, [])






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


    const handleCopyText = (text, field) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopiedText(text);
                toast.success(`${field} ${text} Copied to clipboard`, {
                    duration: 7000,
                    style: {
                        minWidth: 'fit-content',
                    },
                })
            })
            .catch((error) => {
                toast.error(error)
            });
    };


    return (
        <div className='container pt-110'>
            <GoToTop></GoToTop>
            <div className="contact">
                <div className="contact-heading">
                    <div className="heading-texts">
                        <h2 className="title">{contactHeading.title}</h2>
                        <p className="desc">{contactHeading.description}</p>
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
                                    <li onClick={() => handleCopyText(contactThrough.email, 'Email Address')}>Email</li>
                                    <li onClick={() => handleCopyText(contactThrough.phone, 'Phone Number')}>Phone</li>
                                    <a href={`https://wa.me/${contactThrough.whatsapp}`} target='_blank'><li>WhatsApp</li></a>
                                    <a href={`https://telegram.me/${contactThrough.telegram}`} target='_blank'><li>Telegram</li></a>
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
                                    <a href={contactSocial.linkedin} target='_blank'><li>linkedin</li></a>
                                    <a href={contactSocial.facebook} target='_blank'><li>facebook</li></a>
                                    <a href={contactSocial.instagram} target='_blank'><li>instagram</li></a>
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