import React from 'react';
import Heading from '../components/Projects/Heading';
import AllProjects from '../components/Projects/AllProjects';
import scrollToTop from '../components/Utilities/ScrollToTop';

const ProjectLayout = () => {
    scrollToTop();
    return (
        <div>
            <Heading></Heading>
            <AllProjects></AllProjects>
        </div>
    );
};

export default ProjectLayout;