import React from 'react';
import AdminNavigation from '../components/Navigation/AdminNavigation';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <AdminNavigation></AdminNavigation>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;