import React from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';
import edit from '../../images/edit.svg'
import close from '../../images/close.svg'
import man from '../../images/manImage.png'

const AdminAbout = () => {
    return (
        <div>


            <div className='admin-container'>
                <AdminPageTitle title='Admin About Section'></AdminPageTitle>

                <div className="admin-about admin-common">
                    <div className="admin-about-heading common-section">
                        <div className="heading">
                            <p className="title">Heading</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>
                        <div className="body">
                            <div className="data">
                                <p className="content-title">Title:</p>
                                <p className="content-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>

                    <div className="admin-about-we-value common-section number-two-nested">
                        <div className="heading">
                            <p className="title">Why we are different</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>


                        <div className="body">
                            <div className="data">
                                <p className="content-title">01</p>
                                <div className="content-data-nested-two">
                                    <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">02</p>
                                <div className="content-data-nested-two">
                                    <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">03</p>
                                <div className="content-data-nested-two">
                                    <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">04</p>
                                <div className="content-data-nested-two">
                                    <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-about-different common-section number-two-nested">
                        <div className="heading">
                            <p className="title">5 things we value</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>


                        <div className="body">
                            <div className="data">
                                <p className="content-title">01</p>
                                <div className="content-data-nested-two">
                                    <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">02</p>
                                <div className="content-data-nested-two">
                                    <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">03</p>
                                <div className="content-data-nested-two">
                                    <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">04</p>
                                <div className="content-data-nested-two">
                                    <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">05</p>
                                <div className="content-data-nested-two">
                                    <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-about-team common-section">
                        <div className="heading">
                            <p className="title">Our Amazing Team</p>
                            <div className="actions">
                                <img src={close} alt="" className="close" />
                            </div>
                        </div>

                        <div className="member-gap">
                            <div className="member-in-row section">
                                <p className="text">Number or member in a row(3 - 6)</p>
                                <p className="number">3</p>
                                <img src={edit} alt="" className='edit' />
                            </div>
                            <div className="gap-between-member section">
                                <p className="text">Gap between member image(30 - 100)</p>
                                <p className="number">70</p>
                                <img src={edit} alt="" className='edit' />
                            </div>
                        </div>

                        <div className="body">
                            <div className="data">
                                <div className="member-img">
                                    <img src={man} alt="" className="member-img" />
                                </div>
                                <p className="name">Niloy Sarker</p>
                                <p className="position">CEO</p>
                                <p className="role">App Developer</p>
                                <div className="edit-icon">
                                    <img src={edit} alt="" className="edit" />
                                </div>
                            </div>
                            <div className="data">
                                <div className="member-img">
                                    <img src={man} alt="" className="member-img" />
                                </div>
                                <p className="name">Abu Al Nasir Mitul</p>
                                <p className="position">CTO</p>
                                <p className="role">Web Developer</p>
                                <div className="edit-icon">
                                    <img src={edit} alt="" className="edit" />
                                </div>
                            </div>
                            <div className="data">
                                <div className="member-img">
                                    <img src={man} alt="" className="member-img" />
                                </div>
                                <p className="name">Mahfuzur Rahman</p>
                                <p className="position">CTO</p>
                                <p className="role">Web Developer</p>
                                <div className="edit-icon">
                                    <img src={edit} alt="" className="edit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminAbout;