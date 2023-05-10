import React from 'react';
import Hero from '../components/Home/Hero';
import Achievements from '../components/Home/Achievements';
import ServiceProvide from '../components/Home/ServiceProvide';

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <Achievements></Achievements>
            <ServiceProvide></ServiceProvide>
        </div>
    );
};

export default HomeLayout;