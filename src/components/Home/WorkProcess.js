import React from 'react';
import SectionTitle from '../Utilities/SectionTitle';

const WorkProcess = () => {
    return (
        <div className='work-process'>
            <div className="container">
                <SectionTitle title='Our Work Process'></SectionTitle>


                <div className="process-steps">
                    <div className="process">
                        <div className="step-line">
                            <p className="step-count">01</p>
                            <div className="line"></div>
                        </div>
                        <div className="process-detail">
                            <h5 className="process-name">Plan <br />About Project</h5>
                            <p className="process-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, fuga magni facilis veritatis unde explicabo nobis? Asperiores adipisci accusamus ad ipsa ipsam.</p>
                            <ul className="steps">
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="process">
                        <div className="step-line">
                            <p className="step-count">02</p>
                            <div className="line"></div>
                        </div>
                        <div className="process-detail">
                            <h5 className="process-name">Design <br />Project Prototype</h5>
                            <p className="process-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, fuga magni facilis veritatis unde explicabo nobis? Asperiores adipisci accusamus ad ipsa ipsam.</p>
                            <ul className="steps">
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="process">
                        <div className="step-line">
                            <p className="step-count">03</p>
                            <div className="line"></div>
                        </div>
                        <div className="process-detail">
                            <h5 className="process-name">Develop <br />and make it work</h5>
                            <p className="process-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, fuga magni facilis veritatis unde explicabo nobis? Asperiores adipisci accusamus ad ipsa ipsam.</p>
                            <ul className="steps">
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;