import React, { useState } from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';
import edit from '../../images/edit.svg'
import show from '../../images/Show.svg'
import hide from '../../images/Hide.svg'
import deleteIcon from '../../images/Delete.svg'

const AdminContact = () => {

    const [openMail, setOpenMail] = useState(false);

    return (
        <div>
            <div className={`view-mail-popup-bg ${openMail && 'open'}`}>
                <div className="view-mail-popup">
                    <div className="heading">
                        <p className="subject">Contacting you for an web project</p>
                        <p onClick={() => setOpenMail(!openMail)} className="mark-read">mark as read</p>
                    </div>

                    <div className="email-account">
                        <a href="mailto:niloysarker@gmail.com" className="email">From: niloysarker@gmail.com</a>
                    </div>

                    <div className="mail-body">
                        <p className="body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam inventore nisi aut fugiat consequuntur labore cupiditate pariatur, totam molestiae! Corporis commodi quo totam sapiente beatae incidunt consequatur laboriosam deserunt blanditiis! <br /><br /> Quod sunt recusandae hic aliquam. A hic asperiores, aspernatur quo placeat error adipisci. Laudantium obcaecati porro corporis nesciunt nisi enim.</p>
                    </div>
                </div>
            </div>



            <div className="admin-container">
                <AdminPageTitle title='Admin Contact Section'></AdminPageTitle>

                <div className="admin-contact-top-heading admin-common">
                    <div className="admin-Contact-top common-section">
                        <div className="heading">
                            <p className="title">Heading</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>


                        <div className="body">
                            <div className="data">
                                <p className="content-title">Title:</p>
                                <p className="content-data">Let's make it happen together</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Description:</p>
                                <p className="content-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti optio perspiciatis atque nemo. Officia officiis dolore iure in ipsam veniam placeat maiores ipsum labore? Optio quasi distinctio molestias laudantium.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="admin-contact-other-possible-ways admin-common">
                    <div className="common-section">
                        <div className="heading">
                            <p className="title">Contact Though</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>

                        <div className="body">
                            <div className="data">
                                <p className="content-title">Email:</p>
                                <a href='' className="content-data">niloysarker@gmail.com</a>
                            </div>
                            <div className="data">
                                <p className="content-title">Phone:</p>
                                <a href='' className="content-data">01700000000</a>
                            </div>
                            <div className="data">
                                <p className="content-title">WhatsApp:</p>
                                <a href='' className="content-data">01700000000</a>
                            </div>
                        </div>
                    </div>
                    <div className="common-section">
                        <div className="heading">
                            <p className="title">Social</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>

                        <div className="body">
                            <div className="data">
                                <p className="content-title">Facebook:</p>
                                <a href='' className="content-data">facebook.com/niloysarker</a>
                            </div>
                            <div className="data">
                                <p className="content-title">Instagram:</p>
                                <a href='' className="content-data">instagram.com/niloysarker</a>
                            </div>
                            <div className="data">
                                <p className="content-title">Twitter:</p>
                                <a href='' className="content-data">twitter.com/niloysarker</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="admin-contact admin-common">




                    <div className="admin-contact-heading common-section">
                        <div className="heading">
                            <p className="title">Contact Emails <span>04</span></p>
                            <div className="actions">
                                <p className='mark-read'>mark all as read</p>
                            </div>
                        </div>


                        <div onClick={() => setOpenMail(!openMail)} className="body">
                            <div className="data">
                                <p className="content-count">01</p>
                                <p className="content-title">This is email subject </p>
                                <p className="content-data">This is email body and Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <div className="mark-read-action-delete">
                                    <div className="mark-read-action">
                                        <img className='mark-read-show-icon' src={show} alt="" />
                                    </div>
                                    <img className='delete-icon' src={deleteIcon} alt="" />
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-count">02</p>
                                <p className="content-title">This is email subject </p>
                                <p className="content-data">This is email body and Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <div className="mark-read-action-delete">
                                    <div className="mark-read-action">
                                        <img className='mark-read-show-icon' src={show} alt="" />
                                    </div>
                                    <img className='delete-icon' src={deleteIcon} alt="" />
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-count">03</p>
                                <p className="content-title">This is email subject </p>
                                <p className="content-data">This is email body and Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <div className="mark-read-action-delete">
                                    <div className="mark-read-action">
                                        <img className='mark-read-show-icon' src={show} alt="" />
                                    </div>
                                    <img className='delete-icon' src={deleteIcon} alt="" />
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-count">04</p>
                                <p className="content-title">This is email subject </p>
                                <p className="content-data">This is email body and Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <div className="mark-read-action-delete">
                                    <div className="mark-read-action">
                                        <img className='mark-read-show-icon' src={show} alt="" />
                                    </div>
                                    <img className='delete-icon' src={deleteIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminContact;