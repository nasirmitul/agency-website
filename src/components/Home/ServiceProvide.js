import React, { useEffect, useState } from 'react';
import SectionTitle from '../Utilities/SectionTitle';
import circles from '../../images/circles.svg'
import { Link } from 'react-router-dom';
import arrowTopRightDiagonal from '../../images/arrowTopRightDiagonal.svg'

const ServiceProvide = () => {

    const [viewService, setViewService] = useState(null);
    const [allServices, setAllServices] = useState([])


    useEffect(() => {
        fetch('https://projitize.vercel.app/home/service-provide')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllServices(data)
            })
    }, [])


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
                        allServices.map((service, i) => (
                            <div onClick={() => toggle(i)} key={service._id} className="service">
                                <div className="count-name-action">
                                    <div className="count-name">
                                        <div className="count">
                                            <p>{i + 1}/</p>
                                        </div>
                                        <p className="name">{service.title}</p>
                                    </div>

                                    <p className="more-info">View {viewService === i ? 'Less' : 'More'} Information</p>
                                </div>

                                <div className={`info service-details-image ${viewService === i ? 'show' : ''}`}>
                                    <div className="description-action">
                                        <p className="detail">{service.description}</p>
                                        <Link to='/contact-us'>
                                            <div className="lets-work">
                                                <Link to='/contact-us'>Let's Work Together</Link>
                                                <img src={arrowTopRightDiagonal} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <img className="image" src={service.serviceImage} alt="" />
                                    </div>
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