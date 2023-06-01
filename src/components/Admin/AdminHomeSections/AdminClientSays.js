import React, { useEffect, useState } from 'react';
import imageIcon from '../../../images/image-icon.svg'
import edit from '../../../images/edit.svg'
import plus from '../../../images/close.svg'
import deleteIcon from '../../../images/Delete.svg'
import { toast } from 'react-hot-toast';


const AdminClientSays = () => {
    const [clientSays, setClientSays] = useState(false)
    const [editReview, setEditReview] = useState(false)
    const [selectedClientImage, setSelectedClientImage] = useState(null)
    const [selectedClientImageEdit, setSelectedClientImageEdit] = useState(null)
    const [refetch, setRefetch] = useState(null)
    const [allReviews, setAllReviews] = useState([])
    const [deleteReview, setDeleteReview] = useState(null)

    useEffect(() => {
        fetch('https://projitize.vercel.app/home/all-review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllReviews(data)
            })
    }, [refetch])

    const handleClientImageAdd = (event) => {
        const files = event.target.files[0];
        const imgUrl = URL.createObjectURL(files)
        setSelectedClientImage(imgUrl);
    }

    const handleClientImageEdit = (event) => {
        const files = event.target.files[0];
        const imgUrl = URL.createObjectURL(files)
        setSelectedClientImageEdit(imgUrl);
    }

    const handleClientSaysForm = (e) => {
        toast.loading('Adding new review...');
        setClientSays(false);
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const role = form.role.value;
        const message = form.message.value;
        const clientImage = form.clientImage.files[0];

        console.log('up image', clientImage);


        const data = new FormData()
        data.append('file', clientImage)
        data.append('upload_preset', 'projitize_project')
        data.append('cloud_name', 'projitize')

        fetch('https://api.cloudinary.com/v1_1/projitize/image/upload', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const addNewReview = {
                    name,
                    role,
                    message,
                    clientDp: data.url,
                    time: new Date()
                }

                fetch('https://projitize.vercel.app/home/add-review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(addNewReview)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            form.reset();
                            setRefetch(!refetch);
                            setSelectedClientImage(null)
                            toast.dismiss();
                            toast.success('New review added.', {
                                duration: 4000,
                                style: {
                                    minWidth: 'fit-content',
                                },
                            })
                        }
                        else {
                            setClientSays(true);
                            toast.dismiss();
                            toast.error('Sorry, review not added. Please try again.', {
                                duration: 4000,
                                style: {
                                    minWidth: 'fit-content',
                                },
                            })
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }


    const handleDeleteReview = () => {
        toast.loading('deleting review ...');
        fetch(`https://projitize.vercel.app/home/delete-review/${deleteReview}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount >= 1) {
                    setDeleteReview(null)
                    console.log(data);
                    setRefetch(!refetch);
                    toast.dismiss();
                    toast.error('Review Deleted')
                }
                else {
                    setDeleteReview(null)
                    console.log(data);
                    toast.dismiss();
                    toast.error('Sorry, Review not deleted. try again.')
                }
            })
    }


    const handleEditReview = (e) => {
        toast.loading('Editing review...');
        e.preventDefault();
        const form = e.target;


        console.log('editReview', editReview._id);

        const editId = editReview._id;
        const clientOldImage = editReview.clientDp;

        const name = form.name.value;
        const role = form.role.value;
        const message = form.message.value;
        const clientImage = form.clientImageEdit.files[0];

        if (clientImage === undefined) {
            const editReview = {
                name,
                role,
                message,
                clientDp: clientOldImage,
            }

            fetch(`https://projitize.vercel.app/home/edit-review/${editId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(editReview)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount >= 1) {
                        form.reset();
                        setRefetch(!refetch);
                        setSelectedClientImageEdit(null)
                        setEditReview(false)
                        toast.dismiss();
                        toast.success('Review Edited', {
                            duration: 4000,
                            style: {
                                minWidth: 'fit-content',
                            },
                        })
                    }
                    else {
                        setClientSays(true);
                        toast.dismiss();
                        setEditReview(false)
                        toast.error('Sorry, review not edited. Please try again.', {
                            duration: 4000,
                            style: {
                                minWidth: 'fit-content',
                            },
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            const data = new FormData()
            data.append('file', clientImage)
            data.append('upload_preset', 'projitize_project')
            data.append('cloud_name', 'projitize')

            fetch('https://api.cloudinary.com/v1_1/projitize/image/upload', {
                method: 'POST',
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    const editReview = {
                        name,
                        role,
                        message,
                        clientDp: data.url,
                    }

                    fetch(`https://projitize.vercel.app/home/edit-review/${editId}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(editReview)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount >= 1) {
                                form.reset();
                                setRefetch(!refetch);
                                setSelectedClientImageEdit(null)
                                setEditReview(false)
                                toast.dismiss();
                                toast.success('Review Edited', {
                                    duration: 4000,
                                    style: {
                                        minWidth: 'fit-content',
                                    },
                                })
                            }
                            else {
                                setClientSays(true);
                                toast.dismiss();
                                setEditReview(false)
                                toast.error('Sorry, review not edited. Please try again.', {
                                    duration: 4000,
                                    style: {
                                        minWidth: 'fit-content',
                                    },
                                })
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }

    return (
        <div>

            <div className={`confirm-popup ${deleteReview && 'open'}`}>
                <div className="confirm-box">
                    <p className="message">Are you sure you want to <span>delete</span>?</p>
                    <div className="actions">
                        <button onClick={() => setDeleteReview(null)} className="cancel">Cancel</button>
                        <button onClick={handleDeleteReview} className="delete">Delete</button>
                    </div>
                </div>
            </div>

            <div className={`common-popup-bg ${clientSays && 'open'}`}>
                <div className="common-popup">
                    <div className="home-client-says">
                        <h4 className="common-popup-heading">What Client Says</h4>
                        <form onSubmit={handleClientSaysForm} action="">
                            <input type="text" placeholder='Name' name='name' required />
                            <input type="text" placeholder='Role' name='role' required />
                            <textarea type="text" placeholder='Message' name='message' required></textarea>
                            {
                                selectedClientImage?.length > 0 &&
                                <div className='home-client-says-selected-image'>
                                    <img className='image' src={selectedClientImage} alt="" />
                                </div>
                            }

                            <div className="add-image">
                                <input onChange={handleClientImageAdd} id='client-image' type="file" name='clientImage' accept="image/png, image/gif, image/jpg, image/svg, image/jpeg" required />
                                <label htmlFor="client-image">
                                    <img src={imageIcon} alt="" />
                                    {
                                        selectedClientImage?.length > 0 ?
                                            <p>Change Image</p> :
                                            <p>Add a <span>1:1</span> image. Supports, png, gif, jpg, svg, jpeg.</p>
                                    }
                                </label>
                            </div>
                            <div className="actions">
                                <div onClick={() => setClientSays(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={`common-popup-bg ${editReview && 'open'}`}>
                <div className="common-popup">
                    <div className="home-client-says edit">
                        <h4 className="common-popup-heading">Edit Client Review</h4>
                        <form onSubmit={handleEditReview} action="">
                            <div className="input-field">
                                <span>Name</span>
                                <input type="text" placeholder='Name' name='name' defaultValue={editReview?.name} required />
                            </div>
                            <div className="input-field">
                                <span>Role</span>
                                <input type="text" placeholder='Role' name='role' defaultValue={editReview?.role} required />
                            </div>
                            <div className="input-field">
                                <span>Message</span>
                                <textarea type="text" placeholder='Message' name='message' defaultValue={editReview?.message} required></textarea>
                            </div>

                            <div className='home-client-says-selected-image'>
                                <img className='image' src={selectedClientImageEdit ? selectedClientImageEdit : editReview?.clientDp} alt="" />
                            </div>

                            <div className="add-image">
                                <input onChange={handleClientImageEdit} id='client-image-edit' type="file" name='clientImageEdit' accept="image/png, image/gif, image/jpg, image/svg, image/jpeg" />
                                <label htmlFor="client-image-edit">
                                    <img src={imageIcon} alt="" />
                                    {
                                        selectedClientImageEdit?.length > 0 ?
                                            <p>Change Image</p> :
                                            <p>Add a <span>1:1</span> image. Supports, png, gif, jpg, svg, jpeg.</p>
                                    }
                                </label>
                            </div>
                            <div className="actions">
                                <div onClick={() => setEditReview(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="admin-home-client-says common-section number-two-nested">
                <div className="heading">
                    <p className="title">What our client's says!<span className='number-count'>{allReviews.length}</span></p>
                    <div className="actions">
                        <img onClick={() => setClientSays(true)} src={plus} alt="" className="plus" />
                    </div>
                </div>
                <div className="body">
                    {
                        allReviews.length <= 0 ? <p className='not-available'>No review available</p> :
                            allReviews.map((review, i) =>
                                <div key={review._id} className="data">
                                    <p className="content-title">{i + 1}</p>
                                    <div className="content-data-nested-two">
                                        <div className="client-image-actions">
                                            <img className='client-image' src={review.clientDp} alt="" />
                                            <div className="action">
                                                <img onClick={() => setEditReview(review)} className='edit' src={edit} alt="" />
                                                <img onClick={() => setDeleteReview(review._id)} className='delete' src={deleteIcon} alt="" />
                                            </div>
                                        </div>

                                        <div className="client-name">
                                            <p className="name-title">Name:</p>
                                            <p className="name">{review.name}</p>
                                        </div>
                                        <div className="client-role">
                                            <p className="role-title">Role:</p>
                                            <p className="role">{review.role}</p>
                                        </div>
                                        <div className="client-message">
                                            <p className="message-title">Message:</p>
                                            <p className="message">{review.message}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                    }

                </div>
            </div>
        </div>
    );
};

export default AdminClientSays;