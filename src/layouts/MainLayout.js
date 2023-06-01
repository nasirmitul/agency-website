import React from 'react';
import AgencyNavigation from '../components/Navigation/AgencyNavigation';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import AnimatedCursor from "react-animated-cursor"

const MainLayout = () => {
    return (
        <div>
            <AgencyNavigation></AgencyNavigation>
            <Outlet></Outlet>
            <Footer></Footer>

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
                showSystemCursor={false}
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
                    '.all-projects .project .project-img'
                ]}
            />
        </div>
    );
};

export default MainLayout;