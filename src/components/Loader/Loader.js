import React from 'react';
import { motion } from 'framer-motion'

const Loader = () => {

    const styleSVG = {
        height: 60,
        width: 60,
    }

    const pathVariants = {
        hidden: {
            pathLength: 0
        },
        visible: {
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className='loader-style'>
            <svg style={styleSVG} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.19 94.68">
                <g
                    style={{ "opacity": 1 }}>
                    <path
                        d="M850.34,492.11h25.48l20,22.78-20,22.67H850.34l20-22.67Z"
                        transform="translate(-803.59 -492.11)"
                        style={{ "fill": "#5928dc" }}
                    />
                    <polygon
                        points="27.08 0 5 94.68 24.66 94.68 46.73 0 27.08 0"
                        style={{ "fill": "#5928dc" }}
                    />
                </g>
                <motion.path
                    d="M845.34,492.11h25.48l20,22.78-20,22.67H845.34l20-22.67Z"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    transform="translate(-803.59 -492.11)"
                    style={{ "fill": "#5928dc" }}
                />
                <motion.polygon
                    points="22.08 0 0 94.68 19.66 94.68 41.73 0 22.08 0"
                    style={{ "fill": "#5928dc" }}
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />
            </svg>


            {/* <div className="page-transition-animation page-bg">
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "0%"}}
                    transition={{ duration: .5, ease: "easeOut" }}
                    exit={{ opacity: 0 }}
                    className="page-one"></motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: .5, ease: "easeOut", delay: .4 }}
                    exit={{ opacity: 0 }}
                    className="page-two"></motion.div>
                <div className="page-three">
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: .5, ease: "easeOut", delay: .8 }}
                        exit={{ opacity: 0 }}
                        className="three-one"></motion.div>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: .5, ease: "easeOut", delay: 1 }}
                        exit={{ opacity: 0 }}
                        className="three-two"></motion.div>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%"  }}
                        transition={{ duration: .5, ease: "easeOut", delay: 1.2 }}
                        exit={{ x: "0%" }}
                        className="three-three"></motion.div>
                </div>
            </div> */}


        </div>
    );
};

export default Loader;