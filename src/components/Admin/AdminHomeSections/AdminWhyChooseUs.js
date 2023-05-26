import React, { useEffect, useState } from 'react';
import edit from '../../../images/edit.svg'
import { toast } from 'react-hot-toast';

const AdminWhyChooseUs = () => {
    const [chooseUs, setChooseUs] = useState([])
    const [refetch, setRefetch] = useState(false)
    const [openEditChooseUs, setOpenEditChooseUs] = useState(null);
    const [holdChoosingPoint, setHoldChoosingPoint] = useState([])
    const [currentPoint, setCurrentPoint] = useState('')

    useEffect(() => {
        fetch('https://projitize.vercel.app/home-data/why-choose-us')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setChooseUs(data)
            })
    }, [refetch])


    let allPoint = [];
    const handleEditOpen = () => {
        setOpenEditChooseUs(chooseUs)
        if (chooseUs?.choosingPoint?.length >= 1) {
            allPoint = [...chooseUs?.choosingPoint]
            setHoldChoosingPoint(allPoint)
        }
    }

    const addNewChoosingPoint = () => {
        if (currentPoint === '') {
            return;
        }
        allPoint = [...holdChoosingPoint, currentPoint]
        setHoldChoosingPoint(allPoint)
        setCurrentPoint('')
    }

    const handleRemoveItem = (i) => {
        const updatedItems = [...holdChoosingPoint];
        updatedItems.splice(i, 1);
        setHoldChoosingPoint(updatedItems);
    }

    const handleEditChooseUs = (e) => {
        toast.loading('Updating your choosing us details...');
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;
        const points = holdChoosingPoint;

        console.log('points', points);

        const updateChoosingData = {
            title,
            description,
            choosingPoint: points
        }

        const url = `https://projitize.vercel.app/home/edit-choose-us`

        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateChoosingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount >= 1) {
                    form.reset();
                    setRefetch(!refetch);
                    setOpenEditChooseUs(null)
                    setHoldChoosingPoint([]);
                    toast.dismiss();
                    toast.success('Choosing us details edited', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
                else {
                    setOpenEditChooseUs(null)
                    setHoldChoosingPoint([]);
                    toast.dismiss();
                    toast.error('Sorry, choosing us details not edited. Please try again.', {
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


    return (
        <div>

            <div className={`common-popup-bg ${openEditChooseUs && 'open'}`}>
                <div className="common-popup">
                    <div className="home-work-process-edit edit">
                        <h4 className="common-popup-heading">Edit why choose us section</h4>
                        <form onSubmit={handleEditChooseUs} action="">

                            <div className="input-field">
                                <span>Title</span>
                                <input type="text" placeholder='Title' name='title' defaultValue={openEditChooseUs?.title} required />
                            </div>

                            <div className="input-field">
                                <span>Description</span>
                                <input type="text" placeholder='Description' name='description' defaultValue={openEditChooseUs?.description} required />
                            </div>

                            <div className="input-field add-point">
                                <span>Points</span>
                                <input type="text" value={currentPoint} onChange={(e) => setCurrentPoint(e.target.value)} placeholder='Add new Point' name='servicePoint' />
                                <div onClick={addNewChoosingPoint} className='add'>add</div>
                            </div>

                            <div className="work-process-previous-point">
                                {
                                    holdChoosingPoint.map((point, i) =>
                                        <div key={i} className="point">
                                            <span>{point}</span>
                                            <div onClick={() => handleRemoveItem(i)} className='cancel-button'>x</div>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenEditChooseUs(null)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            <div className="admin-home-why-choose-use common-section">
                <div className="heading">
                    <p className="title">Why Choose us</p>
                    <div className="actions">
                        <img onClick={handleEditOpen} src={edit} alt="" className="edit" />
                    </div>
                </div>
                <div className="body">
                    <div className="data">
                        <p className="content-title">Title:</p>
                        <p className="content-data">{chooseUs.title}</p>
                    </div>
                    <div className="data">
                        <p className="content-title">Description:</p>
                        <p className="content-data">{chooseUs.description}</p>
                    </div>

                    <div className="data">
                        <div className="nested-others-items">

                            {
                                chooseUs?.choosingPoint?.map((point, i) =>
                                    <div key={i} className="nested-others-single-item">
                                        <p className="others-item-count">{i + 1}</p>
                                        <p className="other-item-data">{point}</p>
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

export default AdminWhyChooseUs;