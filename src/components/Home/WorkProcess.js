import React, { useEffect, useState } from 'react';
import SectionTitle from '../Utilities/SectionTitle';

const WorkProcess = () => {

    const [workProcess, setWorkProcess] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/home/work-process')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setWorkProcess(data)
            })
    }, [])


    return (
        <div className='work-process'>
            <div className="container">
                <SectionTitle title='Our Work Process'></SectionTitle>


                <div className="process-steps">

                    {
                        workProcess.map((process, i) =>
                            <div key={process._id} className="process">
                                <div className="step-line">
                                    <p className="step-count">0{i + 1}</p>
                                    <div className="line"></div>
                                </div>
                                <div className="process-detail">
                                    <h5 className="process-name">{process.title}</h5>
                                    <p className="process-desc">{process.description}</p>
                                    <ul className="steps">
                                        {
                                            process.processPoints.map((point, i) =>
                                                <li key={i}>{point}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;