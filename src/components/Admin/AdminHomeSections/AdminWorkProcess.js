import React, { useEffect, useState } from 'react';
import edit from '../../../images/edit.svg'
import { toast } from 'react-hot-toast';


const AdminWorkProcess = () => {
    const [workProcess, setWorkProcess] = useState([])
    const [refetch, setRefetch] = useState([])
    const [openEditWorkProcess, setOpenEditWorkProcess] = useState(null);

    const [holdPrevPoint, setHoldPrevPoint] = useState([]);
    const [currentPoint, setCurrentPoint] = useState('');
    let allPoint = [];

    useEffect(() => {
        fetch('https://projitize.vercel.app/home/work-process')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setWorkProcess(data)
            })
    }, [refetch])

    const handleEditOpen = (process) => {
        setOpenEditWorkProcess(process)

        if (process?.processPoints?.length >= 1) {
            allPoint = [...process.processPoints]
            setHoldPrevPoint(allPoint)
        }


    }

    const addNewServicePoint = () => {
        if (currentPoint === '') {
            return;
        }
        allPoint = [...holdPrevPoint, currentPoint]
        setHoldPrevPoint(allPoint)
        setCurrentPoint('')
    }

    const handleRemoveItem = (i) => {
        const updatedItems = [...holdPrevPoint];
        updatedItems.splice(i, 1);
        setHoldPrevPoint(updatedItems);
    }

    const handleEditWorkProcess = (e) => {
        toast.loading('Updating your working process...');
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;
        const points = holdPrevPoint;

        const updatedProcess = {
            title,
            description,
            processPoints: points
        }


        const processId = openEditWorkProcess._id;
        const url = `https://projitize.vercel.app/home/edit-working-process/${processId}`

        console.log(updatedProcess, processId, url);


        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProcess)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount >= 1) {
                    form.reset();
                    setRefetch(!refetch);
                    setOpenEditWorkProcess(null)
                    setHoldPrevPoint([]);
                    toast.dismiss();
                    toast.success('Working process edited', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
                else {
                    setOpenEditWorkProcess(null)
                    setHoldPrevPoint([]);
                    toast.dismiss();
                    toast.error('Sorry, working process not edited. Please try again.', {
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

            <div className={`common-popup-bg ${openEditWorkProcess && 'open'}`}>
                <div className="common-popup">
                    <div className="home-work-process-edit edit">
                        <h4 className="common-popup-heading">Edit service</h4>
                        <form onSubmit={handleEditWorkProcess} action="">

                            <div className="input-field">
                                <span>Title</span>
                                <input type="text" placeholder='Title' name='title' defaultValue={openEditWorkProcess?.title} required />
                            </div>

                            <div className="input-field">
                                <span>Description</span>
                                <input type="text" placeholder='Description' name='description' defaultValue={openEditWorkProcess?.description} required />
                            </div>

                            <div className="input-field add-point">
                                <span>Points</span>
                                <input type="text" value={currentPoint} onChange={(e) => setCurrentPoint(e.target.value)} placeholder='Add new Point' name='servicePoint' />
                                <div onClick={addNewServicePoint} className='add'>add</div>
                            </div>

                            <div className="work-process-previous-point">
                                {
                                    holdPrevPoint.map((point, i) =>
                                        <div key={i} className="point">
                                            <span>{point}</span>
                                            <div onClick={() => handleRemoveItem(i)} className='cancel-button'>x</div>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenEditWorkProcess(null)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="admin-home-work-process common-section number-two-nested">
                <div className="heading">
                    <p className="title">Our Work Process</p>
                </div>
                <div className="body">
                    {
                        workProcess.map((process, i) =>
                            <div key={process._id} className="data">
                                <p className="content-title">{i + 1}</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">{process.title}</p>
                                        <div className="nested-two-title-actions">
                                            <img onClick={() => handleEditOpen(process)} className='edit' src={edit} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">{process.description}</p>

                                    <div className="nested-others-items">
                                        {
                                            process.processPoints.map((point, itemNo) =>
                                                <div key={itemNo} className="nested-others-single-item">
                                                    <p className="others-item-count">{itemNo + 1}</p>
                                                    <p className="other-item-data">{point}</p>
                                                </div>
                                            )
                                        }

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

export default AdminWorkProcess;