import React, { useEffect, useState } from 'react';
import edit from '../../../images/edit.svg'
import { toast } from 'react-hot-toast';

const AdminHero = () => {

    const [openEditHero, setOpenEditHero] = useState(false);
    const [refetch, setRefetch] = useState(false)

    const [hero, setHero] = useState([]);

    useEffect(() => {
        fetch('https://projitize.vercel.app/home-data/hero')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHero(data)
            })
    }, [refetch])

    const handleHeroUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.loading('Updating data ...')

        const title = form.title.value;
        const description = form.description.value;
        const projects = form.projects.value;
        const experience = form.experience.value;
        const updateHero = {
            title,
            description,
            projects,
            experience
        }


        fetch(`https://projitize.vercel.app/home-data/hero/update`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateHero)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    console.log(data);
                    setRefetch(!refetch);
                    setOpenEditHero(false)
                    toast.dismiss();
                    toast.success('Data Updated')
                }
                else {
                    setOpenEditHero(false)
                    toast.dismiss();
                    toast.error('Sorry, data not updated')
                }
            })
    }



    return (
        <div>
            <div className={`common-popup-bg ${openEditHero && 'open'}`}>
                <div className="common-popup">
                    <div className="update-hero">
                        <h4 className="common-popup-heading">Update Hero Section</h4>
                        <form onSubmit={handleHeroUpdate} action="">
                            <div className="input-field">
                                <span>Title</span>
                                <input type="text" defaultValue={hero.title} placeholder='Title' name='title' required />
                            </div>
                            <div className="input-field">
                                <span>Description</span>
                                <input type="text" defaultValue={hero.description} placeholder='Description' name='description' required />
                            </div>
                            <div className="input-field">
                                <span>Projects</span>
                                <input type="text" defaultValue={hero.projects} placeholder='Projects' name='projects' required />
                            </div>
                            <div className="input-field">
                                <span>Experience</span>
                                <input type="text" defaultValue={hero.experience} placeholder='Experience' name='experience' required />
                            </div>


                            <div className="actions">
                                <div onClick={() => setOpenEditHero(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="admin-home-hero common-section">
                <div className="heading">
                    <p className="title">Hero</p>
                    <div className="actions">
                        <img onClick={() => setOpenEditHero(true)} src={edit} alt="" className="edit" />
                    </div>
                </div>
                <div className="body">
                    <div className="data">
                        <p className="content-title">Title:</p>
                        <p className="content-data">{hero.title || 'loading ...'}</p>
                    </div>
                    <div className="data">
                        <p className="content-title">Description:</p>
                        <p className="content-data">{hero.description || 'loading ...'}</p>
                    </div>
                    <div className="data">
                        <p className="content-title">Projects:</p>
                        <p className="content-data">{hero.projects || 'loading ...'}</p>
                    </div>
                    <div className="data">
                        <p className="content-title">Experience:</p>
                        <p className="content-data">{hero.experience || 'loading ...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHero;