import React from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';


import edit from '../../images/edit.svg'


const AdminHome = () => {

    return (
        <div>
            <div className='admin-container'>
                <AdminPageTitle title='Admin Home Section'></AdminPageTitle>


                <div className="admin-home admin-common">

                    <div className="admin-home-hero common-section">
                        <div className="heading">
                            <p className="title">Hero</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>


                        <div className="body">
                            <div className="data">
                                <p className="content-title">Title:</p>
                                <p className="content-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <div className="data">
                                <p className="content-title">Description:</p>
                                <p className="content-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti optio perspiciatis atque nemo. Officia officiis dolore iure in ipsam veniam placeat maiores ipsum labore? Optio quasi distinctio molestias laudantium.</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Projects:</p>
                                <p className="content-data">30+</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Experience:</p>
                                <p className="content-data">03+</p>
                            </div>
                        </div>
                    </div>


                    <div className="admin-home-achievements common-section">
                        <div className="heading">
                            <p className="title">Achievements</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>


                        <div className="body">
                            <div className="data">
                                <p className="content-title">Clients:</p>
                                <p className="content-data">18+</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Projects:</p>
                                <p className="content-data">30+</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Experience:</p>
                                <p className="content-data">03+</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default AdminHome;