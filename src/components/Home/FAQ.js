import React, { useEffect, useState } from 'react';
import add from '../../images/add.svg'

const FAQ = () => {

    const [viewFaq, setViewFaq] = useState(null);

    const [allFAQ, setAllFAQ] = useState([]);

    useEffect(() => {
        fetch('https://projitize.vercel.app/home/all-faq')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllFAQ(data)
            })
    }, [])

    const toggle = (i) => {
        if (viewFaq === i) {
            return setViewFaq(null)
        }

        setViewFaq(i)
    }

    return (
        <div className='container'>
            <div className="faqs">
                <h2 className="heading">FAQ</h2>


                <div className="contents">
                    {
                        allFAQ.map((faq, i) => (
                            <div onClick={() => toggle(i)} key={faq._id} className="faq">
                                <div className="count">
                                    <p>{i + 1}/</p>
                                </div>
                                <div className="faq-name-info">
                                    <p className="name">{faq.title}</p>
                                    <div className={`info ${viewFaq === i ? 'show' : ''}`}>
                                        <p className="detail">{faq.description}</p>
                                    </div>
                                </div>
                                <div className="action">
                                    <img className={`more-info ${viewFaq === i ? 'show' : ''}`} src={add} alt="" />
                                    {/* <p >+</p> */}
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    );
};

export default FAQ;