import React, { useEffect, useState } from 'react';

const faqs = [
    {
        "id": 1,
        "faqName": "Lorem ipsum dolor sit amet",
        "faqDetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
        "id": 2,
        "faqName": "Lorem ipsum dolor sit amet",
        "faqDetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
        "id": 3,
        "faqName": "Lorem ipsum dolor sit amet",
        "faqDetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
        "id": 4,
        "faqName": "Lorem ipsum dolor sit amet",
        "faqDetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    }
]

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
                                    <p className={`more-info ${viewFaq === i ? 'show' : ''}`}>+</p>
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