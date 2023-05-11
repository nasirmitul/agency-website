import React from 'react';
import arrowRight from '../../images/arrowRight.svg'
import manImage from '../../images/manImage.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const ClientSays = () => {
    return (
        <div className='container'>
            <div className="client-says">

                <div className="heading">
                    <h2 className="title">What our client's says!</h2>

                    <div className="actions">
                        <img className='left swiper-button-prev' src={arrowRight} alt="" />
                        <img className='right swiper-button-next' src={arrowRight} alt="" />
                    </div>
                </div>


                <div className="content">
                    <div className="review">


                        <Swiper
                            navigation={false}
                            modules={[Pagination, Navigation]}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className="review-content">
                                    <div className="name-info">
                                        <img className='client-img' src={manImage} alt="" />
                                        <div className="name-position">
                                            <p className="name">Nasir Mitul</p>
                                            <p className="position">CEO of nasirmitul</p>
                                        </div>
                                    </div>
                                    <div className="statement">
                                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eiusmod.</q>



                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="review-content">
                                    <div className="name-info">
                                        <img className='client-img' src={manImage} alt="" />
                                        <div className="name-position">
                                            <p className="name">Nasir Mitul</p>
                                            <p className="position">CEO of nasirmitul</p>
                                        </div>
                                    </div>
                                    <div className="statement">
                                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eiusmod.</q>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="review-content">
                                    <div className="name-info">
                                        <img className='client-img' src={manImage} alt="" />
                                        <div className="name-position">
                                            <p className="name">Nasir Mitul</p>
                                            <p className="position">CEO of nasirmitul</p>
                                        </div>
                                    </div>
                                    <div className="statement">
                                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eiusmod.</q>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSays;