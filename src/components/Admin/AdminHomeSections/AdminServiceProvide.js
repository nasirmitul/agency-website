import React, { useEffect, useState } from 'react';
import edit from '../../../images/edit.svg'
import deleteIcon from '../../../images/Delete.svg'
import plus from '../../../images/close.svg'
import imageIcon from '../../../images/image-icon.svg'
import { toast } from 'react-hot-toast';

const AdminServiceProvide = () => {
    const [openAddService, setOpenAddService] = useState(false);
    const [openEditService, setOpenEditService] = useState(false);
    const [selectedAddServiceImage, setSelectedAddServiceImage] = useState(null)
    const [selectedAddServiceImageEdit, setSelectedAddServiceImageEdit] = useState(null)
    const [refetch, setRefetch] = useState(false);
    const [deleteService, setDeleteService] = useState(null);

    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/home/service-provide')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllServices(data)
            })
    }, [refetch])

    const handleAddServiceImageAdd = (event) => {
        const files = event.target.files[0];
        const imgUrl = URL.createObjectURL(files)
        setSelectedAddServiceImage(imgUrl);
    }

    const handleAddServiceImageEdit = (event) => {
        const files = event.target.files[0];
        const imgUrl = URL.createObjectURL(files)
        setSelectedAddServiceImageEdit(imgUrl);
    }

    const handleAddService = (e) => {
        toast.loading('Adding new service...');
        setOpenAddService(false);
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;
        const addServiceImage = form.addServiceImage.files[0];


        const data = new FormData()
        data.append('file', addServiceImage)
        data.append('upload_preset', 'projitize_project')
        data.append('cloud_name', 'projitize')

        fetch('https://api.cloudinary.com/v1_1/projitize/image/upload', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const addNewService = {
                    title,
                    description,
                    serviceImage: data.url,
                    time: new Date()
                }

                fetch('https://projitize.vercel.app/home/add-services', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(addNewService)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            form.reset();
                            setRefetch(!refetch);
                            setSelectedAddServiceImage(null)
                            toast.dismiss();
                            toast.success('New service added.', {
                                duration: 4000,
                                style: {
                                    minWidth: 'fit-content',
                                },
                            })
                        }
                        else {
                            setOpenAddService(true);
                            toast.dismiss();
                            toast.error('Sorry, service not added. Please try again.', {
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

    const handleDeleteService = () => {
        toast.loading('deleting service ...');
        fetch(`https://projitize.vercel.app/home/delete-service/${deleteService}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount >= 1) {
                    setDeleteService(null)
                    console.log(data);
                    setRefetch(!refetch);
                    toast.dismiss();
                    toast.error('Service Deleted')
                }
                else {
                    setDeleteService(null)
                    console.log(data);
                    toast.dismiss();
                    toast.error('Sorry, service is not deleted. try again.')
                }
            })
    }


    const handleEditService = (e) => {
        toast.loading('Editing service...');
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;
        const addServiceImage = form.addServiceImage.files[0];

        const serviceId = openEditService._id;
        const serviceImage = openEditService.serviceImage;

        if (addServiceImage === undefined) {
            const editService = {
                title,
                description,
                serviceImage: serviceImage
            }

            fetch(`https://projitize.vercel.app/home/edit-service/${serviceId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(editService)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount >= 1) {
                        form.reset();
                        setRefetch(!refetch);
                        setSelectedAddServiceImageEdit(null)
                        setOpenEditService(false);
                        toast.dismiss();
                        toast.success('Service edited', {
                            duration: 4000,
                            style: {
                                minWidth: 'fit-content',
                            },
                        })
                    }
                    else {
                        setSelectedAddServiceImageEdit(null)
                        setOpenEditService(false);
                        toast.dismiss();
                        toast.error('Sorry, service not edited. Please try again.', {
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
            data.append('file', addServiceImage)
            data.append('upload_preset', 'projitize_project')
            data.append('cloud_name', 'projitize')

            fetch('https://api.cloudinary.com/v1_1/projitize/image/upload', {
                method: 'POST',
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const editService = {
                        title,
                        description,
                        serviceImage: data.url,
                    }

                    fetch(`https://projitize.vercel.app/home/edit-service/${serviceId}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(editService)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount >= 1) {
                                form.reset();
                                setRefetch(!refetch);
                                setSelectedAddServiceImageEdit(null)
                                setOpenEditService(false);
                                toast.dismiss();
                                toast.success('Service edited', {
                                    duration: 4000,
                                    style: {
                                        minWidth: 'fit-content',
                                    },
                                })
                            }
                            else {
                                setSelectedAddServiceImageEdit(null)
                                setOpenEditService(false);
                                toast.dismiss();
                                toast.error('Sorry, service not edited. Please try again.', {
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

            <div className={`confirm-popup ${deleteService && 'open'}`}>
                <div className="confirm-box">
                    <p className="message">Are you sure you want to <span>delete</span>?</p>
                    <div className="actions">
                        <button onClick={() => setDeleteService(null)} className="cancel">Cancel</button>
                        <button onClick={handleDeleteService} className="delete">Delete</button>
                    </div>
                </div>
            </div>

            <div className={`common-popup-bg ${openAddService && 'open'}`}>
                <div className="common-popup">
                    <div className="home-add-service">
                        <h4 className="common-popup-heading">Add new service</h4>
                        <form onSubmit={handleAddService} action="">
                            <input type="text" placeholder='Title' name='title' required />
                            <textarea type="text" placeholder='Description' name='description' required></textarea>

                            {
                                selectedAddServiceImage?.length > 0 &&
                                <div className='home-add-service-selected-image'>
                                    <img className='image' src={selectedAddServiceImage} alt="" />
                                </div>
                            }

                            <div className="add-image">
                                <input onChange={handleAddServiceImageAdd} id='serviceImage' type="file" name='addServiceImage' accept="image/png, image/gif, image/jpg, image/svg, image/jpeg" required />
                                <label htmlFor="serviceImage">
                                    <img src={imageIcon} alt="" />
                                    {
                                        selectedAddServiceImage?.length > 0 ?
                                            <p>Change Image</p> :
                                            <p>Add a <span>380x480</span> image. Supports, png, gif, jpg, svg, jpeg.</p>
                                    }

                                </label>
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenAddService(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={`common-popup-bg ${openEditService && 'open'}`}>
                <div className="common-popup">
                    <div className="home-add-service edit">
                        <h4 className="common-popup-heading">Edit service</h4>
                        <form onSubmit={handleEditService} action="">

                            <div className="input-field">
                                <span>Title</span>
                                <input type="text" placeholder='Title' name='title' defaultValue={openEditService?.title} required />
                            </div>
                            <div className="input-field">
                                <span>Description</span>
                                <textarea type="text" placeholder='Description' name='description' defaultValue={openEditService?.description} required></textarea>
                            </div>

                            <div className='home-add-service-selected-image'>
                                <img className='image' src={selectedAddServiceImageEdit ? selectedAddServiceImageEdit : openEditService?.serviceImage} alt="" />
                            </div>

                            <div className="add-image">
                                <input onChange={handleAddServiceImageEdit} id='editServiceImage' type="file" name='addServiceImage' accept="image/png, image/gif, image/jpg, image/svg, image/jpeg" />
                                <label htmlFor="editServiceImage">
                                    <img src={imageIcon} alt="" />
                                    {
                                        selectedAddServiceImageEdit?.length > 0 ?
                                            <p>Change Image</p> :
                                            <p>Add a <span>380x480</span> image. Supports, png, gif, jpg, svg, jpeg.</p>
                                    }
                                </label>
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenEditService(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="admin-home-service-we-provide common-section number-two-nested">
                <div className="heading">
                    <p className="title">Service we provide <span className='number-count'>{allServices.length}</span></p>
                    <div className="actions">
                        <img onClick={() => setOpenAddService(true)} src={plus} alt="" className="plus" />
                    </div>
                </div>
                <div className="body">
                    {
                        allServices.length <= 0 ? <p className='not-available'>No service available</p> :
                            allServices.map((service, i) =>
                                <div key={service._id} className="data">
                                    <p className="content-title">{i + 1}</p>
                                    <div className="content-data-nested-two">
                                        <div className="nested-two-title-heading">
                                            <p className="nested-two-title">{service.title}</p>
                                            <div className="nested-two-title-actions">
                                                <img onClick={() => setOpenEditService(service)} className='edit' src={edit} alt="" />
                                                <img onClick={() => setDeleteService(service._id)} className='delete' src={deleteIcon} alt="" />
                                            </div>
                                        </div>
                                        <p className="nested-two-body">{service.description}</p>
                                        <div className="content-img">
                                            <img src={service.serviceImage} alt="" />
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

export default AdminServiceProvide;