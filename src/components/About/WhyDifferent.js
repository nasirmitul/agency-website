import React, { useEffect, useState } from 'react';
import arrowSvg from '../../images/arrowSvg.svg'

const WhyDifferent = () => {

    const [whyDifferent, setWhyDifferent] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/about/why-we-different')
            .then(res => res.json())
            .then(data => setWhyDifferent(data))
    }, [])

    return (
        <div className='why-different'>
            <div className="container">
                <section>
                    <h2 className="section-title">Why we are different</h2>
                    <div className="points">
                        {
                            whyDifferent.map((different, i) =>
                                <div key={different._id} className="point">
                                    <p className="count">0{i + 1}.</p>
                                    <h5 className="title">{different.title}</h5>
                                    <p className="desc">{different.description}</p>
                                </div>
                            )
                        }
                    </div>
                </section>
            </div>

            <img className='arrowSvg' src={arrowSvg} alt="" />
        </div>
    );
};

export default WhyDifferent;