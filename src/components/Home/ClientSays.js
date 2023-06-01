import React, { useEffect, useState } from 'react';
import arrowRight from '../../images/arrowRight.svg'
import manImage from '../../images/manImage.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const ClientSays = () => {


    const [allReviews, setAllReviews] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/home/all-review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllReviews(data)
            })
    }, [])

    return (
        <div className='container'>
            <div className="client-says">

                <div className="heading">
                    <h2 className="title">What our client's says!</h2>

                    {/* <div className="actions">
                        <img className='left swiper-button-prev' src={arrowRight} alt="" />
                        <img className='right swiper-button-next' src={arrowRight} alt="" />
                    </div> */}
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

                            {
                                allReviews.map(review =>
                                    <SwiperSlide key={review._id}>
                                        <div className="review-content">
                                            <div className="name-info">
                                                <img className='client-img' src={review.clientDp} alt="" />
                                                <div className="name-position">
                                                    <p className="name">{review.name}</p>
                                                    <p className="position">{review.role}</p>
                                                </div>
                                            </div>
                                            <div className="statement">
                                                <q>{review.message}</q>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSays;