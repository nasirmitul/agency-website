import React, { useContext } from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';
import { AuthContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AdminProfile = () => {
    const { userSignOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        userSignOut()
            .then(() => {
                navigate('/login')
                toast.error('logged out')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='admin-container'>
            <AdminPageTitle title='Admin Profile Section'></AdminPageTitle>
            <div className="logout">
                <button className="custom-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default AdminProfile;