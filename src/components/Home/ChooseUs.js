import React from 'react';
import SectionTitle from '../Utilities/SectionTitle';
import building from '../../images/building.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const ChooseUs = () => {
    return (
        <div className='container'>
            <div className="choose-us">
                <SectionTitle title='Why Choose Us'></SectionTitle>
                <div className="content">
                    <div className="left-content">
                        <h5 className="title">Reason <br />behind choosing us</h5>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, fuga magni facilis veritatis unde explicabo nobis? Asperiores adipisci accusamus ad ipsa ipsam.</p>
                        <ul className="steps">
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
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