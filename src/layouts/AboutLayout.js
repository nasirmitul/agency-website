import React from 'react';
import Heading from '../components/About/Heading';
import WhyDifferent from '../components/About/WhyDifferent';
import WeValue from '../components/About/WeValue';
import Team from '../components/About/Team';
import StartProject from '../components/About/StartProject';
import scrollToTop from '../components/Utilities/ScrollToTop';

const AboutLayout = () => {
    scrollToTop();
    return (
        <div>
            <Heading></Heading>
            <WhyDifferent></WhyDifferent>
            <WeValue></WeValue>
            <Team></Team>
            <StartProject></StartProject>
        </div>
    );
};

export default AboutLayout;