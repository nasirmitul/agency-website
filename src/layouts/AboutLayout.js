import React, { useContext, useState } from 'react';
import Heading from '../components/About/Heading';
import WhyDifferent from '../components/About/WhyDifferent';
import WeValue from '../components/About/WeValue';
import Team from '../components/About/Team';
import StartProject from '../components/About/StartProject';
import scrollToTop from '../components/Utilities/ScrollToTop';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../contexts/UserContext';

const AboutLayout = () => {
    scrollToTop();

    const { loading } = useContext(AuthContext)

    // const [loading, setLoading] = useState(true);

    /* setTimeout(() => {
        
        setLoading(false);
    }, 2000); */

    return (
        <div>
            {loading && <Loader></Loader>}
            <Heading></Heading>
            <WhyDifferent></WhyDifferent>
            <WeValue></WeValue>
            <Team></Team>
            <StartProject></StartProject>
        </div>
    );
};

export default AboutLayout;