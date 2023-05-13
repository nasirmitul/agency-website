import React from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';
import edit from '../../images/edit.svg'

const AdminAbout = () => {
    return (
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

            </div>


        </div>
    );
};

export default AdminAbout;