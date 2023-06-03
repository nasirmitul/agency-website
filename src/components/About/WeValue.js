import React, { useEffect, useState } from 'react';

const WeValue = () => {

    const [weValueOne, setWeValueOne] = useState([])
    const [weValueTwo, setWeValueTwo] = useState([])
    const [weValueThree, setWeValueThree] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/about/we-value/row-one')
            .then(res => res.json())
            .then(data => setWeValueOne(data))
    }, [])
    useEffect(() => {
        fetch('https://projitize.vercel.app/about/we-value/row-two')
            .then(res => res.json())
            .then(data => setWeValueTwo(data))
    }, [])
    useEffect(() => {
        fetch('https://projitize.vercel.app/about/we-value/row-three')
            .then(res => res.json())
            .then(data => setWeValueThree(data))
    }, [])



    return (
        <div className='we-value'>
            <div className="container">
                <section>
                    <h2 className="section-title">5 things we value</h2>
                    <div className="points">
                        <div className="row row-one">
                            {
                                weValueOne.map((value, i) =>
                                    <div key={value._id} className="point left">
                                        <p className="count">0{i + 1}.</p>
                                        <h5 className="title">{value.title}</h5>
                                        <p className="desc">{value.description}</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className="row row-two">
                            {
                                weValueTwo.map((value, i) =>
                                    <div key={value._id} className="point left">
                                        <p className="count">0{i + 3}.</p>
                                        <h5 className="title">{value.title}</h5>
                                        <p className="desc">{value.description}</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className="row row-three">
                            <div className="point center">
                                <p className="count">0{weValueTwo.length + 3}.</p>
                                <h5 className="title">{weValueThree.title}</h5>
                                <p className="desc">{weValueThree.description}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WeValue;