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
    const [openEditHeading, setOpenEditHeading] = useState(false);
    const [openEditContactThrough, setOpenEditContactThrough] = useState(false);
    const [openEditSocial, setOpenEditSocial] = useState(false);

    const [contactHeading, setContactHeading] = useState([]);
    const [contactContactThrough, setContactContactThrough] = useState([]);
    const [contactSocial, setContactSocial] = useState([]);

    useEffect(() => {
        fetch('https://projitize.vercel.app/contact/contact-through')
            .then(res => res.json())
            .then(data => {
                setContactContactThrough(data);
            })
    }, [refetch])

    useEffect(() => {
        fetch('https://projitize.vercel.app/contact/social')
            .then(res => res.json())
            .then(data => {
                setContactSocial(data);
            })
    }, [refetch])

    useEffect(() => {
        fetch('https://projitize.vercel.app/contact/heading')
            .then(res => res.json())
            .then(data => {
                setContactHeading(data);
            })
    }, [refetch])

    useEffect(() => {
        fetch('https://projitize.vercel.app/contact-mail')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setContactMails(data);
            })
    }, [refetch])

    useEffect(() => {
        fetch('https://projitize.vercel.app/contact-mail/unread')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCheckMarkRead(data);
            })

    }, [refetch])


    const handleMailDelete = () => {
        toast.loading('deleting mail...');
        setOpenMail(null);
        fetch(`https://projitize.vercel.app/delete-contact-mail/${deleteMail}`, {
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
        fetch(`https://projitize.vercel.app/update-mark-read/${id}`, {
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
        fetch(`https://projitize.vercel.app/update-mark-un-read/${id}`, {
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
        fetch(`https://projitize.vercel.app/mark-all-as-read`, {
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

    const handleHeadingUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.loading('Updating contact heading data ...')

        const title = form.title.value;
        const description = form.description.value;
        const updateHeading = {
            title,
            description
        }

        fetch(`https://projitize.vercel.app/contact/update-heading`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateHeading)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    setRefetch(!refetch);
                    setOpenEditHeading(false)
                    toast.dismiss();
                    toast.success('Data Updated')
                }
                else {
                    setOpenEditHeading(true)
                    toast.dismiss();
                    toast.error('Sorry, data not updated')
                }
            })
    }

    const handleContactThroughUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.loading('Updating contact through data ...')

        const email = form.email.value;
        const phone = form.phone.value;
        const whatsapp = form.whatsapp.value;
        const telegram = form.telegram.value;
        const updateContactThrough = {
            email,
            phone,
            whatsapp,
            telegram,
        }

        fetch(`https://projitize.vercel.app/contact/update-contact-through`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateContactThrough)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    setRefetch(!refetch);
                    setOpenEditContactThrough(false)
                    toast.dismiss();
                    toast.success('Data Updated')
                }
                else {
                    setOpenEditContactThrough(true)
                    toast.dismiss();
                    toast.error('Sorry, data not updated')
                }
            })
    }

    const handleSocialUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.loading('Updating contact social data ...')

        const linkedin = form.linkedin.value;
        const facebook = form.facebook.value;
        const instagram = form.instagram.value;

        const updateSocial = {
            linkedin,
            facebook,
            instagram
        }

        fetch(`https://projitize.vercel.app/contact/update-social`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSocial)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    setRefetch(!refetch);
                    setOpenEditSocial(false)
                    toast.dismiss();
                    toast.success('Data Updated')
                }
                else {
                    setOpenEditSocial(true)
                    toast.dismiss();
                    toast.error('Sorry, data not updated')
                }
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

            <div className={`common-popup-bg ${openEditHeading && 'open'}`}>
                <div className="common-popup">
                    <div className="update-contact-heading">
                        <h4 className="common-popup-heading">Update Contact Heading</h4>
                        <form onSubmit={handleHeadingUpdate} action="">
                            <div className="input-field">
                                <span>Title</span>
                                <input type="text" defaultValue={contactHeading?.title} placeholder='Title' name='title' required />
                            </div>
                            <div className="input-field">
                                <span>Description</span>
                                <textarea type="text" defaultValue={contactHeading?.description} placeholder='Description' name='description' required ></textarea>
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenEditHeading(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={`common-popup-bg ${openEditContactThrough && 'open'}`}>
                <div className="common-popup">
                    <div className="update-contact-contact-heading">
                        <h4 className="common-popup-heading">Update Contact Through Section</h4>
                        <form onSubmit={handleContactThroughUpdate} action="">
                            <div className="input-field">
                                <span>Email</span>
                                <input type="email" placeholder='Email' defaultValue={contactContactThrough?.email} name='email' required />
                            </div>
                            <div className="input-field">
                                <span>Phone</span>
                                <input type="tel" placeholder='Phone' defaultValue={contactContactThrough?.phone} name='phone' required />
                            </div>
                            <div className="input-field">
                                <span>WhatsApp</span>
                                <input type="tel" placeholder='WhatsApp' defaultValue={contactContactThrough?.whatsapp} name='whatsapp' required />
                            </div>
                            <div className="input-field">
                                <span>Telegram</span>
                                <input type="tel" placeholder='Telegram' defaultValue={contactContactThrough?.telegram} name='telegram' required />
                            </div>
                            <div className="actions">
                                <div onClick={() => setOpenEditContactThrough(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={`common-popup-bg ${openEditSocial && 'open'}`}>
                <div className="common-popup">
                    <div className="update-contact-contact-heading">
                        <h4 className="common-popup-heading">Update Contact Social Section</h4>
                        <form onSubmit={handleSocialUpdate} action="">
                            <div className="input-field">
                                <span>LinkedIn</span>
                                <input type="url" placeholder='LinkedIn' defaultValue={contactSocial?.linkedin} name='linkedin' required />
                            </div>
                            <div className="input-field">
                                <span>FaceBook</span>
                                <input type="url" placeholder='FaceBook' defaultValue={contactSocial?.facebook} name='facebook' required />
                            </div>
                            <div className="input-field">
                                <span>Instagram</span>
                                <input type="url" placeholder='Instagram' defaultValue={contactSocial?.instagram} name='instagram' required />
                            </div>
                            <div className="actions">
                                <div onClick={() => setOpenEditSocial(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
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
                                <img onClick={() => setOpenEditHeading(true)} src={edit} alt="" className="edit" />
                            </div>
                        </div>
                        <div className="body">
                            <div className="data">
                                <p className="content-title">Title:</p>
                                <p className="content-data">{contactHeading.title || 'loading ...'}</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Description:</p>
                                <p className="content-data">{contactHeading.description || 'loading ...'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="admin-contact-other-possible-ways admin-common">
                    <div className="common-section">
                        <div className="heading">
                            <p className="title">Contact Though</p>
                            <div className="actions">
                                <img onClick={() => setOpenEditContactThrough(true)} src={edit} alt="" className="edit" />
                            </div>
                        </div>

                        <div className="body">
                            <div className="data">
                                <p className="content-title">Email:</p>
                                <a href='' className="content-data">{contactContactThrough.email || 'loading ..'}</a>
                            </div>
                            <div className="data">
                                <p className="content-title">Phone:</p>
                                <a href='' className="content-data">{contactContactThrough.phone || 'loading ..'}</a>
                            </div>
                            <div className="data">
                                <p className="content-title">WhatsApp:</p>
                                <a href='' className="content-data">{contactContactThrough.whatsapp || 'loading ..'}</a>
                            </div>
                            <div className="data">
                                <p className="content-title">Telegram:</p>
                                <a href='' className="content-data">{contactContactThrough.telegram || 'loading ..'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="common-section">
                        <div className="heading">
                            <p className="title">Social</p>
                            <div className="actions">
                                <img onClick={() => setOpenEditSocial(true)} src={edit} alt="" className="edit" />
                            </div>
                        </div>
                        <div className="body">
                            <div className="data">
                                <p className="content-title">LinkedIn:</p>
                                <a href='' className="content-data">{contactSocial.linkedin || 'loading ..'}</a>
                            </div>
                            <div className="data">
                                <p className="content-title">Facebook:</p>
                                <a href='' className="content-data">{contactSocial.facebook || 'loading ..'}</a>
                            </div>
                            <div className="data">
                                <p className="content-title">Instagram:</p>
                                <a href='' className="content-data">{contactSocial.instagram || 'loading ..'}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="admin-contact admin-common">
                    <div className="admin-contact-heading common-section">
                        <div className="heading">
                            <p className="title">Contact Emails <span className='number-count'>{(contactMails.length + checkMarkRead.length) - contactMails.length} / {contactMails.length}</span></p>
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