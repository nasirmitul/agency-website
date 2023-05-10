import React from 'react';
import AgencyNavigation from '../components/Navigation/AgencyNavigation';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <AgencyNavigation></AgencyNavigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;