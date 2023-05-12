import React from 'react';
import Heading from '../components/About/Heading';
import WhyDifferent from '../components/About/WhyDifferent';
import WeValue from '../components/About/WeValue';
import Team from '../components/About/Team';

const AboutLayout = () => {
    return (
        <div>
            <Heading></Heading>
            <WhyDifferent></WhyDifferent>
            <WeValue></WeValue>
            <Team></Team>
        </div>
    );
};

export default AboutLayout;