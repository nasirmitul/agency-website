import React, { useEffect, useState } from 'react';
import edit from '../../../images/edit.svg'
import { toast } from 'react-hot-toast';

const AdminAboutDifferent = () => {
    const [whyDifferent, setWhyDifferent] = useState([])
    const [openEditDifferent, setOpenEditDifferent] = useState(false)
    const [refetch, setRefetch] = useState(false)
    useEffect(() => {
        fetch('https://projitize.vercel.app/about/why-we-different')
            .then(res => res.json())
            .then(data => setWhyDifferent(data))
    }, [refetch])


    const handleEditDifferent = (e) => {

        toast.loading('Editing we are different...');
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;

        const differentId = openEditDifferent._id;

        const editDifferent = {
            title,
            description
        }

        fetch(`https://projitize.vercel.app/about/edit-why-different/${differentId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editDifferent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount >= 1) {
                    form.reset();
                    setRefetch(!refetch);
                    setOpenEditDifferent(false);
                    toast.dismiss();
                    toast.success('Why we are different edited', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
                else {
                    setOpenEditDifferent(false);
                    toast.dismiss();
                    toast.error('Sorry, Why we are different not edited. Please try again.', {
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


            <div className={`common-popup-bg ${openEditDifferent && 'open'}`}>
                <div className="common-popup">
                    <div className="about-different edit">
                        <h4 className="common-popup-heading">Edit why we are different</h4>
                        <form onSubmit={handleEditDifferent} action="">

                            <div className="input-field">
                                <span>Title</span>
                                <input type="text" placeholder='Title' name='title' defaultValue={openEditDifferent?.title} required />
                            </div>
                            <div className="input-field">
                                <span>Description</span>
                                <input type="text" placeholder='Description' name='description' defaultValue={openEditDifferent?.description} required />
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenEditDifferent(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="admin-about-different common-section number-two-nested">
                <div className="heading">
                    <p className="title">Why we are different</p>
                </div>
                <div className="body">

                    {
                        whyDifferent.length <= 1 ? <p className='not-available'>loading ...</p> :
                            whyDifferent.map((different, i) =>
                                <div key={different._id} className="data">
                                    <p className="content-title">{i + 1}</p>
                                    <div className="content-data-nested-two">
                                        <div className="nested-two-title-heading">
                                            <p className="nested-two-title">{different.title || 'loading ...'}</p>
                                            <div className="nested-two-title-actions">
                                                <img onClick={() => setOpenEditDifferent(different)} className='edit' src={edit} alt="" />
                                            </div>
                                        </div>
                                        <p className="nested-two-body">{different.description || 'loading ...'}</p>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminAboutDifferent;