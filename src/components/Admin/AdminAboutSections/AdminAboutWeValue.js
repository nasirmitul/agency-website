import React, { useEffect, useState } from 'react';
import edit from '../../../images/edit.svg'
import { toast } from 'react-hot-toast';
const AdminAboutWeValue = () => {
    const [weValue, setWeValue] = useState([])
    const [refetch, setRefetch] = useState(false)
    const [openWeValue, setOpenWeValue] = useState(false)
    useEffect(() => {
        fetch('https://projitize.vercel.app/about/we-value')
            .then(res => res.json())
            .then(data => setWeValue(data))
    }, [refetch])


    const handleEditWeValue = (e) => {
        toast.loading('Editing things we value...');
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;

        const valueId = openWeValue._id;

        const EditValue = {
            title,
            description
        }

        fetch(`https://projitize.vercel.app/about/edit-we-value/${valueId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(EditValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount >= 1) {
                    form.reset();
                    setRefetch(!refetch);
                    setOpenWeValue(false);
                    toast.dismiss();
                    toast.success('Things we value edited', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
                else {
                    setOpenWeValue(false);
                    toast.dismiss();
                    toast.error('Sorry, things we value not edited. Please try again.', {
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

            <div className={`common-popup-bg ${openWeValue && 'open'}`}>
                <div className="common-popup">
                    <div className="about-we-value edit">
                        <h4 className="common-popup-heading">Edit things we value</h4>
                        <form onSubmit={handleEditWeValue} action="">

                            <div className="input-field">
                                <span>Title</span>
                                <textarea  type="text" placeholder='Title' name='title' defaultValue={openWeValue?.title} required></textarea>
                            </div>
                            <div className="input-field">
                                <span>Description</span>
                                <textarea type="text" placeholder='Description' name='description' defaultValue={openWeValue?.description} required></textarea>
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenWeValue(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="admin-about-we-value common-section number-two-nested">
                <div className="heading">
                    <p className="title">5 things we value</p>
                </div>

                <div className="body">
                    {
                        weValue.length <= 1 ? <p className='not-available'>loading ...</p> :
                            weValue.map((value, i) =>
                                <div key={value._id} className="data">
                                    <p className="content-title">{i + 1}</p>
                                    <div className="content-data-nested-two">
                                        <div className="nested-two-title-heading">
                                            <p className="nested-two-title">{value.title || 'loading ...'}</p>
                                            <div className="nested-two-title-actions">
                                                <img onClick={() => setOpenWeValue(value)} className='edit' src={edit} alt="" />
                                            </div>
                                        </div>
                                        <p className="nested-two-body">{value.description || 'loading ...'}</p>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminAboutWeValue;