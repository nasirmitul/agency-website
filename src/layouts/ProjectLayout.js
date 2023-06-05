import React, { useContext, useState } from 'react';
import Heading from '../components/Projects/Heading';
import AllProjects from '../components/Projects/AllProjects';
import scrollToTop from '../components/Utilities/ScrollToTop';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../contexts/UserContext';

const ProjectLayout = () => {
    scrollToTop();

    const { loading } = useContext(AuthContext);

    // const [loading, setLoading] = useState(true);

    /* setTimeout(() => {
        setLoading(false);
    }, 2000); */

    return (
        <div>
            {loading && <Loader></Loader>}
            <Heading></Heading>
            <AllProjects></AllProjects>
        </div>
    );
};

export default ProjectLayout;