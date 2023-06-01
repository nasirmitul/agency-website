import React, { useEffect, useState } from 'react';
import SectionTitle from '../Utilities/SectionTitle';
import building from '../../images/building.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const ChooseUs = () => {

    const [chooseUs, setChooseUs] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/home-data/why-choose-us')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setChooseUs(data)
            })
    }, [])

    return (
        <div className='container'>
            <div className="choose-us">
                <SectionTitle title='Why Choose Us'></SectionTitle>
                <div className="content">
                    <div className="left-content">
                        <h5 className="title">{chooseUs.title}</h5>
                        <p className="desc">{chooseUs.description}</p>
                        <ul className="steps">
                            {
                                chooseUs?.choosingPoint?.map((point, i) =>
                                    <li key={i}>{point}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="right-content">

                        <Swiper
                            modules={[Pagination]}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper">
                            <SwiperSlide><img src={building} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={building} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={building} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;