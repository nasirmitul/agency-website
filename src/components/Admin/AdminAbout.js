import React from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';
import AdminAboutHeading from './AdminAboutSections/AdminAboutHeading';
import AdminAboutDifferent from './AdminAboutSections/AdminAboutDifferent';
import AdminAboutWeValue from './AdminAboutSections/AdminAboutWeValue';
import AdminAboutTeam from './AdminAboutSections/AdminAboutTeam';

const AdminAbout = () => {




    return (
        <div>
            <div className='admin-container'>
                <AdminPageTitle title='Admin About Section'></AdminPageTitle>
                <div className="admin-about admin-common">
                    <AdminAboutHeading></AdminAboutHeading>
                    <AdminAboutDifferent></AdminAboutDifferent>
                    <AdminAboutWeValue></AdminAboutWeValue>
                    <AdminAboutTeam></AdminAboutTeam>
                </div>
            </div>
        </div>
    );
};

export default AdminAbout;