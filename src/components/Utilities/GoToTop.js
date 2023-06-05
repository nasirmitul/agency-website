import React, { useEffect, useState } from 'react';

import arrowUp from '../../images/arrowUp.svg'

const GoToTop = () => {

    const [isVisible, setISvisible] = useState(false);

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const listenToScroll = () => {
        let heighToHidden = 700;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heighToHidden) {
            setISvisible(true)
        }
        else {
            setISvisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, [])

    return (
        <div onClick={toTheTop} className='go-to-top'>
            {
                isVisible &&
                <>
                    <div className='to-back-text'>
                        <div className="line-before"></div>
                        <p>Back To Top</p>
                    </div>

                    <div className='arrow-up'>
                        <div className="box">
                            <img src={arrowUp} alt="" />
                        </div>
                    </div>
                </>
            }

        </div>
    );
};

export default GoToTop;