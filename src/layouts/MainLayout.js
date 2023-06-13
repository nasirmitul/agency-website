import React from 'react';
import AgencyNavigation from '../components/Navigation/AgencyNavigation';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import AnimatedCursor from "react-animated-cursor"
import GoToTop from '../components/Utilities/GoToTop';

const MainLayout = () => {
    const screenWidth = window.screen.width;
    console.log(screenWidth);

    return (
        <div>
            <AgencyNavigation></AgencyNavigation>
            <GoToTop></GoToTop>
            <Outlet></Outlet>
            <Footer></Footer>


            {
                screenWidth >= 1000 &&
                <AnimatedCursor
                    innerSize={8}
                    outerSize={30}
                    outerStyle={{
                        "border": "1px solid #202021"
                    }}
                    color='32, 32, 33'
                    outerAlpha={0.08}
                    innerScale={1.5}
                    outerScale={4}
                    showSystemCursor={true}
                    trailingSpeed={6}
                    clickables={[
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="file"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link',
                        '.service-provide .contents .service',
                        '.faqs .contents .faq',
                        '.contact .possible-ways .ways .ways-detail .contact-way li',
                        '.all-projects .project .project-info .details',
                        '.all-projects .project .project-img',
                        '.project-popup .project-name-cancel .cancel'
                    ]}
                />
            }

        </div>
    );
};

export default MainLayout;