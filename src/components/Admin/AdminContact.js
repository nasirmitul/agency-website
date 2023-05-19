import React, { useEffect, useState } from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';
import edit from '../../images/edit.svg'
import show from '../../images/Show.svg'
import hide from '../../images/Hide.svg'
import deleteIcon from '../../images/Delete.svg'
import tick from '../../images/tick.svg'
import { toast } from 'react-hot-toast';

const AdminContact = () => {

    const [openMail, setOpenMail] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const [deleteMail, setDeleteMail] = useState(null);
    const [checkMarkRead, setCheckMarkRead] = useState([])
    const [contactMails, setContactMails] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/contact-mail')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setContactMails(data);
            })
    }, [refetch])


    useEffect(() => {
        fetch('http://localhost:5000/contact-mail/unread')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCheckMarkRead(data);
            })

    }, [refetch])


    const handleMailDelete = () => {
        toast.loading('deleting mail...');
        setOpenMail(null);
        fetch(`http://localhost:5000/delete-contact-mail/${deleteMail}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount >= 1) {
                    console.log(data);
                    setRefetch(!refetch);
                    setDeleteMail(null)
                    toast.dismiss();
                    toast.error('mail deleted')
                }
            })
    }

    const handleUpdateMarkRead = (id) => {
        toast.loading('marking as read...');
        fetch(`http://localhost:5000/update-mark-read/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    console.log(data);
                    setRefetch(!refetch);
                    setOpenMail(null)
                    toast.dismiss();
                    toast.success('marked as read')
                }
            })
    }

    const handleUpdateMarkUnRead = (id) => {
        toast.loading('marking as unread...');
        fetch(`http://localhost:5000/update-mark-un-read/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    console.log(data);
                    setRefetch(!refetch);
                    setOpenMail(null)
                    toast.dismiss();
                    toast.success('marked as unread')
                }
            })
    }

    const handleMarkAllAsRead = () => {
        toast.loading('marking all as read...');
        fetch(`http://localhost:5000/mark-all-as-read`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRefetch(!refetch);
                toast.dismiss();
                toast.success('marked all as read')
            })
    }

    return (
        <div>
            <div className={`view-mail-popup-bg ${openMail && 'open'}`}>
                <div className="view-mail-popup">
                    <div className="heading">
                        <p className="subject">Subject not defined ◉_◉ (hehe, sorry) <img className='tick' onClick={() => setOpenMail(null)} src={tick} alt="" /></p>
                        <div className='read-delete-action'>
                            {
                                openMail?.markRead ?
                                    <p onClick={() => handleUpdateMarkUnRead(openMail?._id)} className="mark-read">mark as unread</p> :
                                    <p onClick={() => handleUpdateMarkRead(openMail?._id)} className="mark-read">mark as read</p>
                            }
                            {
                                <p onClick={() => setDeleteMail(openMail?._id)} className='delete'>delete</p>
                            }
                        </div>
                    </div>
                    <div className="email-account">
                        <a href="mailto:niloysarker@gmail.com" className="email">From: <span>{openMail?.email}</span></a>
                    </div>
                    <div className="mail-body">
                        <p className="body">{openMail?.message}</p>
                    </div>
                </div>
            </div>



            <div className={`confirm-popup ${deleteMail && 'open'}`}>
                <div className="confirm-box">
                    <p className="message">Are you sure you want to <span>delete</span>?</p>
                    <div className="actions">
                        <button onClick={() => setDeleteMail(false)} className="cancel">Cancel</button>
                        <button onClick={handleMailDelete} className="delete">Delete</button>
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
                            <p className="title">Contact Emails <span className='number-count'>{(contactMails.length + checkMarkRead.length) - contactMails.length}</span></p>
                            <div className="actions">

                                {
                                    checkMarkRead.length > 0 ?
                                        <p onClick={handleMarkAllAsRead} className='mark-read'>mark all as read</p> :
                                        <p className='all-viewed'>all mail viewed</p>}

                            </div>
                        </div>


                        <div className="body">
                            {
                                contactMails.length <= 0 ? <p className='not-available'>No mail available</p> :
                                    contactMails.map((mail, i) =>
                                        <div key={mail._id} className={`data ${mail.markRead && 'marked-read'} `} >
                                            <div className="contact-mail-data" onClick={() => setOpenMail(mail)}>
                                                <p className="content-count">{i + 1}</p>
                                                <p className="content-title">{mail.email}</p>
                                                <p className="content-data">{mail.message.slice(0, 120)} {mail.message.length > 120 && '...'}</p>
                                            </div>

                                            <div className="mark-read-action-delete">
                                                <div className="mark-read-action">
                                                    {
                                                        mail?.markRead ?
                                                            <img onClick={() => handleUpdateMarkUnRead(mail._id)} className='mark-read-show-icon' src={hide} alt="" /> :
                                                            <img onClick={() => handleUpdateMarkRead(mail._id)} className='mark-read-show-icon' src={show} alt="" />
                                                    }

                                                </div>
                                                <img onClick={() => setDeleteMail(mail._id)} className='delete-icon' src={deleteIcon} alt="" />
                                            </div>
                                        </div>
                                    )
                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminContact;