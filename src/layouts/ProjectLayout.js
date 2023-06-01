import React from 'react';
import Heading from '../components/Projects/Heading';
import AllProjects from '../components/Projects/AllProjects';
import scrollToTop from '../components/Utilities/ScrollToTop';
import GoToTop from './GoToTop';

const ProjectLayout = () => {
    scrollToTop();
    return (
        <div>
            <GoToTop></GoToTop>
            <Heading></Heading>
            <AllProjects></AllProjects>
        </div>
    );
};

export default ProjectLayout;