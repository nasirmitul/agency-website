import React, { useState } from 'react';
import SectionTitle from '../Utilities/SectionTitle';
import circles from '../../images/circles.svg'
import { Link } from 'react-router-dom';
import arrowTopRightDiagonal from '../../images/arrowTopRightDiagonal.svg'
import webImage from '../../images/web-image.png'


const services = [
    {
        "id": 1,
        "serviceName": "Web Development",
        "serviceDetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
        "id": 2,
        "serviceName": "App Development",
        "serviceDetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
        "id": 3,
        "serviceName": "UI/UX Design",
        "serviceDetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
        "id": 4,
        "serviceName": "Digital Marketing",
        "serviceDetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    }
]

const ServiceProvide = () => {

    const [viewService, setViewService] = useState(null);

    const toggle = (i) => {
        if (viewService === i) {
            return setViewService(null)
        }

        setViewService(i)
    }


    return (
        <div className='service-provide'>
            <img className='circles' src={circles} alt="" />
            <div className="container">
                <SectionTitle title='Service We Provide'></SectionTitle>


                <h1 className="heading">Turning your ideas into <br />process ...</h1>


                <div className="contents">
                    {
                        services.map((service, i) => (
                            <div key={service.id} className="service">
                                <div className="count">
                                    <p>{i + 1}/</p>
                                </div>
                                <div className="service-name-info">
                                    <p className="name">{service.serviceName}</p>
                                    <div className={`info ${viewService === i ? 'show' : ''}`}>
                                        <p className="detail">{service.serviceDetail}</p>

                                        <div className="lets-work">
                                            <Link to='/'>Let's Work Together</Link>
                                            <img src={arrowTopRightDiagonal} alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div className="action-image">
                                    <p onClick={() => toggle(i)} className="more-info">View {viewService === i ? 'Less' : 'More'} Information</p>
                                    <img className={`image ${viewService === i ? 'show' : ''}`} src={webImage} alt="" />

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceProvide;