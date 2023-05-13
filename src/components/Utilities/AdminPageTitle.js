import React from 'react';

const AdminPageTitle = ({ title }) => {
    return (
        <div>
            <div className="admin-page-title">
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default AdminPageTitle;