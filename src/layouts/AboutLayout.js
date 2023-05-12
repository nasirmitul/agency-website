import React from 'react';
import Heading from '../components/About/Heading';
import WhyDifferent from '../components/About/WhyDifferent';
import WeValue from '../components/About/WeValue';

const AboutLayout = () => {
    return (
        <div>
            <Heading></Heading>
            <WhyDifferent></WhyDifferent>
            <WeValue></WeValue>
        </div>
    );
};

export default AboutLayout;