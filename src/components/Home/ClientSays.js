import React from 'react';
import arrowRight from '../../images/arrowRight.svg'
import manImage from '../../images/manImage.png'

const ClientSays = () => {
    return (
        <div className='container'>
            <div className="client-says">
                <h2 className="title">What our client's says!</h2>

                <div className="content">
                    <div className="review">
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
                    </div>
                    <div className="action">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSays;