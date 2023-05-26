import React from 'react';

import AdminPageTitle from '../Utilities/AdminPageTitle';
import AdminHero from './AdminHomeSections/AdminHero';
import AdminAchievements from './AdminHomeSections/AdminAchievements';
import AdminServiceProvide from './AdminHomeSections/AdminServiceProvide';
import AdminWorkProcess from './AdminHomeSections/AdminWorkProcess';
import AdminFAQ from './AdminHomeSections/AdminFAQ';
import AdminWhyChooseUs from './AdminHomeSections/AdminWhyChooseUs';
import AdminClientSays from './AdminHomeSections/AdminClientSays';



const AdminHome = () => {

    return (
        <div>

            <div className='admin-container'>
                <AdminPageTitle title='Admin Home Section'></AdminPageTitle>

                <div className="admin-home admin-common">
                    <AdminHero></AdminHero>
                    <AdminAchievements></AdminAchievements>
                    <AdminServiceProvide></AdminServiceProvide>
                    <AdminWorkProcess></AdminWorkProcess>
                    <AdminFAQ></AdminFAQ>
                    <AdminWhyChooseUs></AdminWhyChooseUs>
                    <AdminClientSays></AdminClientSays>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;