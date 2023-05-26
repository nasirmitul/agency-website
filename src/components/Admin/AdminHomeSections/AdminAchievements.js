import React, { useEffect, useState } from 'react';
import edit from '../../../images/edit.svg'
import { toast } from 'react-hot-toast';



const AdminAchievements = () => {
    const [openEditAchievement, setOpenEditAchievement] = useState(false);
    const [refetch, setRefetch] = useState(false)

    const [achievement, setAchievement] = useState([]);

    useEffect(() => {
        fetch('https://projitize.vercel.app/home-data/achievement')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAchievement(data)
            })
    }, [refetch])

    const handleAchievementUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.loading('Updating data ')

        const clients = form.clients.value;
        const projects = form.projects.value;
        const experience = form.experience.value;
        const updateAchievement = {
            clients,
            projects,
            experience
        }


        fetch(`https://projitize.vercel.app/home-data/achievement/update`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateAchievement)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    console.log(data);
                    setRefetch(!refetch);
                    setOpenEditAchievement(false)
                    toast.dismiss();
                    toast.success('Data Updated')
                }
                else{
                    setOpenEditAchievement(false)
                    toast.dismiss();
                    toast.error('Sorry, data not updated')
                }
            })

    }

    return (
        <div>
            <div className={`common-popup-bg ${openEditAchievement && 'open'}`}>
                <div className="common-popup">
                    <div className="update-achievement">
                        <h4 className="common-popup-heading">Update Achievement</h4>
                        <form onSubmit={handleAchievementUpdate} action="">
                            <div className="input-field">
                                <span>Clients</span>
                                <input type="text" defaultValue={achievement.clients} placeholder='Clients' name='clients' required />
                            </div>
                            <div className="input-field">
                                <span>Projects</span>
                                <input type="text" defaultValue={achievement.projects} placeholder='Projects' name='projects' required />
                            </div>
                            <div className="input-field">
                                <span>Experience</span>
                                <input type="text" defaultValue={achievement.experience} placeholder='Experience' name='experience' required />
                            </div>


                            <div className="actions">
                                <div onClick={() => setOpenEditAchievement(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <div className="admin-home-achievements common-section">
                <div className="heading">
                    <p className="title">Achievements</p>
                    <div className="actions">
                        <img onClick={() => setOpenEditAchievement(true)} src={edit} alt="" className="edit" />
                    </div>
                </div>

                <div className="body">
                    <div className="data">
                        <p className="content-title">Clients:</p>
                        <p className="content-data">{achievement.clients || 'loading ...'}</p>
                    </div>
                    <div className="data">
                        <p className="content-title">Projects:</p>
                        <p className="content-data">{achievement.projects || 'loading ...'}</p>
                    </div>
                    <div className="data">
                        <p className="content-title">Experience:</p>
                        <p className="content-data">{achievement.experience || 'loading ...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAchievements;