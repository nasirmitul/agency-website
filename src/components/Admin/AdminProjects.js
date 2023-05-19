import React from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';
import edit from '../../images/edit.svg'
import deleteIcon from '../../images/Delete.svg'
import close from '../../images/close.svg'
import project from '../../images/prototype.png'

const AdminProjects = () => {
    return (
        <div>

            <div className='admin-container'>
                <AdminPageTitle title='Admin Projects Section'></AdminPageTitle>


                <div className="admin-projects admin-common">

                    <div className="admin-projects-top common-section">
                        <div className="heading">
                            <p className="title">Heading</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>


                        <div className="body">
                            <div className="data">
                                <p className="content-title">Title:</p>
                                <p className="content-data">Projects we have done so far </p>
                            </div>
                            <div className="data">
                                <p className="content-title">Description:</p>
                                <p className="content-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti optio perspiciatis atque nemo. Officia officiis dolore iure in ipsam veniam placeat maiores ipsum labore? Optio quasi distinctio molestias laudantium.</p>
                            </div>
                        </div>
                    </div>


                    <div className="admin-projects-heading common-section">
                        <div className="heading">
                            <p className="title">All Projects <span className='number-count'>06</span></p>
                            <div className="actions">
                                <img src={close} alt="" className="plus" />
                            </div>
                        </div>
                        <div className="body">
                            <div className="data">
                                <p className="count">01</p>
                                <div className="project-img">
                                    <img src={project} alt="" />
                                </div>
                                <p className="project-name">Take A Trip</p>
                                <p className="project-type">Web Application</p>
                                <div className="edit-delete-icon">
                                    <img src={edit} alt="" />
                                    <img src={deleteIcon} alt="" className='delete' />
                                </div>
                            </div>
                            <div className="data">
                                <p className="count">02</p>
                                <div className="project-img">
                                    <img src={project} alt="" />
                                </div>
                                <p className="project-name">Take A Trip</p>
                                <p className="project-type">Web Application</p>
                                <div className="edit-delete-icon">
                                    <img src={edit} alt="" />
                                    <img src={deleteIcon} alt="" className='delete' />
                                </div>
                            </div>
                            <div className="data">
                                <p className="count">03</p>
                                <div className="project-img">
                                    <img src={project} alt="" />
                                </div>
                                <p className="project-name">Take A Trip</p>
                                <p className="project-type">Web Application</p>
                                <div className="edit-delete-icon">
                                    <img src={edit} alt="" />
                                    <img src={deleteIcon} alt="" className='delete' />
                                </div>
                            </div>
                            <div className="data">
                                <p className="count">04</p>
                                <div className="project-img">
                                    <img src={project} alt="" />
                                </div>
                                <p className="project-name">Take A Trip</p>
                                <p className="project-type">Web Application</p>
                                <div className="edit-delete-icon">
                                    <img src={edit} alt="" />
                                    <img src={deleteIcon} alt="" className='delete' />
                                </div>
                            </div>
                            <div className="data">
                                <p className="count">05</p>
                                <div className="project-img">
                                    <img src={project} alt="" />
                                </div>
                                <p className="project-name">Take A Trip</p>
                                <p className="project-type">Web Application</p>
                                <div className="edit-delete-icon">
                                    <img src={edit} alt="" />
                                    <img src={deleteIcon} alt="" className='delete' />
                                </div>
                            </div>
                            <div className="data">
                                <p className="count">06</p>
                                <div className="project-img">
                                    <img src={project} alt="" />
                                </div>
                                <p className="project-name">Take A Trip</p>
                                <p className="project-type">Web Application</p>
                                <div className="edit-delete-icon">
                                    <img src={edit} alt="" />
                                    <img src={deleteIcon} alt="" className='delete' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminProjects;