import React from 'react';
import AdminNavigation from '../components/Navigation/AdminNavigation';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <AdminNavigation></AdminNavigation>
            <div className="admin-body">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default AdminLayout;