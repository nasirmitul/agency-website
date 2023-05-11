import React from 'react';
import Hero from '../components/Home/Hero';
import Achievements from '../components/Home/Achievements';
import ServiceProvide from '../components/Home/ServiceProvide';
import WorkProcess from '../components/Home/WorkProcess';
import FAQ from '../components/Home/FAQ';

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <Achievements></Achievements>
            <ServiceProvide></ServiceProvide>
            <WorkProcess></WorkProcess>
            <FAQ></FAQ>
        </div>
    );
};

export default HomeLayout;