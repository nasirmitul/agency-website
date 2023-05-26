import React, { useEffect, useState } from 'react';
import edit from '../../../images/edit.svg'
import plus from '../../../images/close.svg'
import deleteIcon from '../../../images/Delete.svg'
import { toast } from 'react-hot-toast';

const AdminFAQ = () => {

    const [openAddNewFAQ, setOpenAddNewFAQ] = useState(false);
    const [refetch, setRefetch] = useState(false);
    const [deleteFAQ, setDeleteFAQ] = useState(null)
    const [editFAQ, setEditFAQ] = useState(null)

    const [allFAQ, setAllFAQ] = useState([]);

    useEffect(() => {
        fetch('https://projitize.vercel.app/home/all-faq')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllFAQ(data)
            })
    }, [refetch])

    const handleAddNewFAQ = (e) => {
        toast.loading('Adding new FAQ...');
        setOpenAddNewFAQ(false);
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;

        const addNewFAQ = {
            title,
            description,
            time: new Date()
        }

        fetch('https://projitize.vercel.app/home/add-faq', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewFAQ)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    setRefetch(!refetch);
                    toast.dismiss();
                    toast.success('New FAQ added.', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
                else {
                    setOpenAddNewFAQ(true);
                    toast.dismiss();
                    toast.error('Sorry, FAQ not added. Please try again.', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
            })
    }


    const handleDeleteFAQ = () => {
        toast.loading('deleting faq ...');
        fetch(`https://projitize.vercel.app/home/delete-faq/${deleteFAQ}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount >= 1) {
                    setDeleteFAQ(null)
                    console.log(data);
                    setRefetch(!refetch);
                    toast.dismiss();
                    toast.error('FAQ Deleted')
                }
                else {
                    setDeleteFAQ(null)
                    console.log(data);
                    toast.dismiss();
                    toast.error('Sorry, faq not deleted. try again.')
                }
            })
    }


    const handleEditFAQ = (e) => {
        toast.loading('Editing FAQ...');
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;

        const editFAQData = {
            title,
            description,
        }

        fetch(`https://projitize.vercel.app/home/edit-faq/${editFAQ._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editFAQData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount >= 1) {
                    form.reset();
                    setRefetch(!refetch);
                    setEditFAQ(null);
                    toast.dismiss();
                    toast.success('FAQ edited', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
                else {
                    toast.dismiss();
                    toast.error('Sorry, FAQ not edited. Please try again.', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
            })
    }


    return (
        <div>


            <div className={`confirm-popup ${deleteFAQ && 'open'}`}>
                <div className="confirm-box">
                    <p className="message">Are you sure you want to <span>delete</span>?</p>
                    <div className="actions">
                        <button onClick={() => setDeleteFAQ(null)} className="cancel">Cancel</button>
                        <button onClick={handleDeleteFAQ} className="delete">Delete</button>
                    </div>
                </div>
            </div>


            <div className={`common-popup-bg ${openAddNewFAQ && 'open'}`}>
                <div className="common-popup">
                    <div className="home-add-faq">
                        <h4 className="common-popup-heading">Add new FAQ</h4>
                        <form onSubmit={handleAddNewFAQ} action="">
                            <input type="text" placeholder='Title' name='title' required />
                            <input type="text" placeholder='Description' name='description' required />
                            <div className="actions">
                                <div onClick={() => setOpenAddNewFAQ(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={`common-popup-bg ${editFAQ && 'open'}`}>
                <div className="common-popup">
                    <div className="home-edit-faq">
                        <h4 className="common-popup-heading">Edit FAQ</h4>
                        <form onSubmit={handleEditFAQ} action="">

                            <div className="input-field">
                                <span>Title</span>
                                <input type="text" placeholder='Title' name='title' defaultValue={editFAQ?.title} required />
                            </div>
                            <div className="input-field">
                                <span>Description</span>
                                <input type="text" placeholder='Description' name='description' defaultValue={editFAQ?.description} required />
                            </div>

                            <div className="actions">
                                <div onClick={() => setEditFAQ(null)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="admin-home-faq common-section number-two-nested">
                <div className="heading">
                    <p className="title">FAQ<span className='number-count'>{allFAQ.length}</span></p>
                    <div className="actions">
                        <img onClick={() => setOpenAddNewFAQ(true)} src={plus} alt="" className="plus" />
                    </div>
                </div>
                <div className="body">
                    {
                        allFAQ.length <= 0 ? <p className='not-available'>No FAQ available</p> :
                            allFAQ.map((faq, i) =>
                                <div key={faq._id} className="data">
                                    <p className="content-title">{i + 1}</p>
                                    <div className="content-data-nested-two">
                                        <div className="nested-two-title-heading">
                                            <p className="nested-two-title">{faq.title}</p>
                                            <div className="nested-two-title-actions">
                                                <img onClick={() => setEditFAQ(faq)} className='edit' src={edit} alt="" />
                                                <img onClick={() => setDeleteFAQ(faq._id)} className='delete' src={deleteIcon} alt="" />
                                            </div>
                                        </div>
                                        <p className="nested-two-body">{faq.description}</p>
                                    </div>
                                </div>
                            )
                    }

                </div>
            </div>
        </div>
    );
};

export default AdminFAQ;