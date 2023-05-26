import React, { useEffect, useState } from 'react';
import edit from '../../../images/edit.svg'
import { toast } from 'react-hot-toast';

const AdminAboutHeading = () => {
    const [openEditHeading, setOpenEditHeading] = useState(false);
    const [refetch, setRefetch] = useState(false);

    const [headingData, setHeadingData] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/about/heading')
            .then(res => res.json())
            .then(data => setHeadingData(data))
    }, [refetch])


    const handleHeadingUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.loading('Updating about heading data ...')

        const title = form.title.value;
        const updateHeading = {
            title,
        }

        fetch(`https://projitize.vercel.app/about/update-heading`, {
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
    return (
        <div>


            <div className={`common-popup-bg ${openEditHeading && 'open'}`}>
                <div className="common-popup">
                    <div className="update-hero">
                        <h4 className="common-popup-heading">Update Hero Section</h4>
                        <form onSubmit={handleHeadingUpdate} action="">
                            <div className="input-field">
                                <span>Title</span>
                                <input type="text" defaultValue={headingData?.title} placeholder='Title' name='title' required />
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenEditHeading(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="admin-about-heading common-section">
                <div className="heading">
                    <p className="title">Heading</p>
                    <div className="actions">
                        <img onClick={() => setOpenEditHeading(true)} src={edit} alt="" className="edit" />
                    </div>
                </div>
                <div className="body">
                    <div className="data">
                        <p className="content-title">Title:</p>
                        <p className="content-data">{headingData.title || 'loading ...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAboutHeading;