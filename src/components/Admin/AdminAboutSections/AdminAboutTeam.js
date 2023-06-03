import React, { useEffect, useState } from 'react';
import edit from '../../../images/edit.svg'
import plus from '../../../images/close.svg'
import deleteIcon from '../../../images/Delete.svg'
import imageIcon from '../../../images/image-icon.svg'
import { toast } from 'react-hot-toast';


import profile from '../../../images/teamProfile.svg'
import gitHub from '../../../images/teamGitHub.svg'
import linkedin from '../../../images/teamLinkedin.svg'
import facebook from '../../../images/teamFacebook.svg'
import instagram from '../../../images/teamInstagram.svg'
import twitter from '../../../images/teamTwitter.svg'
import dribble from '../../../images/teamDribble.svg'
import telegram from '../../../images/teamTelegram.svg'
import whatsapp from '../../../images/teamWhatsapp.svg'

const AdminAboutTeam = () => {
    const [teamNoGap, setTeamNoGap] = useState([])
    const [teamHeading, setTeamHeading] = useState([])
    const [allTeamMembers, setAllTeamMembers] = useState([])
    const [openEditTeamNoGap, setOpenEditTeamNoGap] = useState(false)
    const [deleteMember, setDeleteMember] = useState(null);
    const [openEditTeamMember, setOpenEditTeamMember] = useState(false)
    const [openEditTeamHeading, setOpenEditTeamHeading] = useState(false)
    const [SelectedTeamMemberDpEdit, setSelectedTeamMemberDpEdit] = useState(null)
    const [openAddTeamMember, setOpenAddTeamMember] = useState(false)
    const [selectedTeamMemberImage, setSelectedTeamMemberImage] = useState(null)
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        fetch('https://projitize.vercel.app/about/team/heading')
            .then(res => res.json())
            .then(data => setTeamHeading(data))
    }, [refetch])


    useEffect(() => {
        fetch('https://projitize.vercel.app/about/team-no-gap')
            .then(res => res.json())
            .then(data => setTeamNoGap(data))
    }, [refetch])

    useEffect(() => {
        fetch('https://projitize.vercel.app/about/all-team-member')
            .then(res => res.json())
            .then(data => setAllTeamMembers(data))
    }, [refetch])

    const handleAddTeamMemberImageAdd = (event) => {
        const files = event.target.files[0];
        const imgUrl = URL.createObjectURL(files)
        setSelectedTeamMemberImage(imgUrl);
    }

    const handleEditTeamNoGap = (e) => {
        toast.loading('Updating the numbers...');
        e.preventDefault();
        const form = e.target;

        const noOfMember = form.noOfMember.value;
        const gapBetweenMember = form.gapBetweenMember.value;

        const EditValue = {
            noOfMember,
            gapBetweenMember
        }

        fetch(`https://projitize.vercel.app/about/edit-team-no-gap`, {
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
                    setOpenEditTeamNoGap(false);
                    toast.dismiss();
                    toast.success('data updated', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
                else {
                    setOpenEditTeamNoGap(false);
                    toast.dismiss();
                    toast.error('Sorry, data not updated. Please try again.', {
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

    const handleAddTeamMember = (e) => {
        toast.loading('Adding new team member...');
        setOpenAddTeamMember(false);
        e.preventDefault();
        const form = e.target;


        const name = form.name.value;
        const role = form.role.value;

        const serial = form.serial.value;

        const portfolio = form.portfolio.value;
        const github = form.github.value;
        const linkedin = form.linkedin.value;
        const facebook = form.facebook.value;
        const instagram = form.instagram.value;
        const twitter = form.twitter.value;
        const dribbble = form.dribbble.value;
        const telegram = form.telegram.value;
        const whatsapp = form.whatsapp.value;

        const addTeamMemberImage = form.addTeamMemberImage.files[0];


        const data = new FormData()
        data.append('file', addTeamMemberImage)
        data.append('upload_preset', 'projitize_project')
        data.append('cloud_name', 'projitize')

        fetch('https://api.cloudinary.com/v1_1/projitize/image/upload', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const addNewTeamMember = {
                    name,
                    role,
                    portfolio,
                    github,
                    linkedin,
                    facebook,
                    instagram,
                    twitter,
                    dribbble,
                    telegram,
                    whatsapp,
                    teamMemberDp: data.url,
                    serial,
                    time: new Date()
                }

                fetch('https://projitize.vercel.app/about/add-team-member', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(addNewTeamMember)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            form.reset();
                            setRefetch(!refetch);
                            setSelectedTeamMemberImage(null)
                            toast.dismiss();
                            toast.success(`${name} added as a team member`, {
                                duration: 4000,
                                style: {
                                    minWidth: 'fit-content',
                                },
                            })
                        }
                        else {
                            setOpenAddTeamMember(true);
                            toast.dismiss();
                            toast.error('Sorry, member not added. Please try again.', {
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

    const handleDeleteMember = () => {
        toast.loading('deleting team member ...');
        fetch(`https://projitize.vercel.app/about/delete-team-member/${deleteMember}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount >= 1) {
                    setDeleteMember(null)
                    console.log(data);
                    setRefetch(!refetch);
                    toast.dismiss();
                    toast.error('Member Deleted')
                }
                else {
                    setDeleteMember(null)
                    console.log(data);
                    toast.dismiss();
                    toast.error('Sorry, member is not deleted. try again.')
                }
            })
    }

    const handleTeamMemberImageEdit = (event) => {
        const files = event.target.files[0];
        const imgUrl = URL.createObjectURL(files)
        setSelectedTeamMemberDpEdit(imgUrl);
    }

    const handleEditTeamMember = (e) => {
        toast.loading(`Editing ${openEditTeamMember.name} details...`);
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const role = form.role.value;

        const serial = form.serial.value;

        const portfolio = form.portfolio.value;
        const github = form.github.value;
        const linkedin = form.linkedin.value;
        const facebook = form.facebook.value;
        const instagram = form.instagram.value;
        const twitter = form.twitter.value;
        const dribbble = form.dribbble.value;
        const telegram = form.telegram.value;
        const whatsapp = form.whatsapp.value;

        const addTeamMemberImage = form.addTeamMemberImage.files[0];

        const memberId = openEditTeamMember._id;
        const teamMemberDp = openEditTeamMember.teamMemberDp;

        if (addTeamMemberImage === undefined) {
            const editTeamMember = {
                name,
                role,
                portfolio,
                github,
                linkedin,
                facebook,
                instagram,
                twitter,
                dribbble,
                telegram,
                whatsapp,
                serial,
                teamMemberDp: teamMemberDp
            }

            fetch(`https://projitize.vercel.app/about/edit-team-member/${memberId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(editTeamMember)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount >= 1) {
                        form.reset();
                        setRefetch(!refetch);
                        setSelectedTeamMemberDpEdit(null)
                        setOpenEditTeamMember(false);
                        toast.dismiss();
                        toast.success(`${openEditTeamMember.name} details updated`, {
                            duration: 4000,
                            style: {
                                minWidth: 'fit-content',
                            },
                        })
                    }
                    else {
                        setSelectedTeamMemberDpEdit(null)
                        setOpenEditTeamMember(false);
                        toast.dismiss();
                        toast.error('Sorry, data not edited. Please try again.', {
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
            data.append('file', addTeamMemberImage)
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
                        name,
                        role,
                        portfolio,
                        github,
                        linkedin,
                        facebook,
                        instagram,
                        twitter,
                        dribbble,
                        telegram,
                        whatsapp,
                        serial,
                        teamMemberDp: data.url,
                    }

                    fetch(`https://projitize.vercel.app/about/edit-team-member/${memberId}`, {
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
                                setSelectedTeamMemberDpEdit(null)
                                setOpenEditTeamMember(false);
                                toast.dismiss();
                                toast.success(`${openEditTeamMember.name} details updated`, {
                                    duration: 4000,
                                    style: {
                                        minWidth: 'fit-content',
                                    },
                                })
                            }
                            else {
                                setSelectedTeamMemberDpEdit(null)
                                setOpenEditTeamMember(false);
                                toast.dismiss();
                                toast.error('Sorry, data not edited. Please try again.', {
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

    const handleEditTeamHeading = (e) => {
        toast.loading('Updating team heading data...');
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;

        const updateHeading = {
            title,
            description
        }
        fetch('https://projitize.vercel.app/about/edit-team-heading', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateHeading)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount >= 1) {
                    form.reset();
                    setRefetch(!refetch);
                    setOpenEditTeamHeading(false);
                    toast.dismiss();
                    toast.success('Data updated', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content',
                        },
                    })
                }
                else {
                    setOpenEditTeamHeading(false);
                    toast.dismiss();
                    toast.error('Sorry, data not updated. Please try again.', {
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
            <div className={`common-popup-bg ${openEditTeamMember && 'open'}`}>
                <div className="common-popup">
                    <div className="home-add-service edit">
                        <h4 className="common-popup-heading">Edit {openEditTeamMember.name} details</h4>
                        <form onSubmit={handleEditTeamMember} action="">

                            <div className="input-field">
                                <span>Member Name</span>
                                <input type="text" placeholder='Member Name' name='name' defaultValue={openEditTeamMember?.name} required />
                            </div>
                            <div className="input-field">
                                <span>Member Role (ex: mobile app developer)</span>
                                <input type="text" placeholder='Member Role (ex: mobile app developer)' name='role' defaultValue={openEditTeamMember?.role} required />
                            </div>
                            <div className="input-field">
                                <span>Serial</span>
                                <input type="number" placeholder='Serial' name='serial' min='1' defaultValue={openEditTeamMember?.serial} />
                            </div>
                            <div className="input-field">
                                <span>Portfolio</span>
                                <input type="url" placeholder='Portfolio' name='portfolio' defaultValue={openEditTeamMember?.portfolio} />
                            </div>
                            <div className="input-field">
                                <span>Github</span>
                                <input type="url" placeholder='Github' name='github' defaultValue={openEditTeamMember?.github} />
                            </div>
                            <div className="input-field">
                                <span>LinkedIn</span>
                                <input type="url" placeholder='LinkedIn' name='linkedin' defaultValue={openEditTeamMember?.linkedin} />
                            </div>
                            <div className="input-field">
                                <span>FaceBook</span>
                                <input type="url" placeholder='FaceBook' name='facebook' defaultValue={openEditTeamMember?.facebook} />
                            </div>
                            <div className="input-field">
                                <span>Instagram</span>
                                <input type="url" placeholder='Instagram' name='instagram' defaultValue={openEditTeamMember?.instagram} />
                            </div>
                            <div className="input-field">
                                <span>Twitter</span>
                                <input type="url" placeholder='Twitter' name='twitter' defaultValue={openEditTeamMember?.twitter} />
                            </div>
                            <div className="input-field">
                                <span>Dribbble</span>
                                <input type="url" placeholder='Dribbble' name='dribbble' defaultValue={openEditTeamMember?.dribbble} />
                            </div>
                            <div className="input-field">
                                <span>Telegram</span>
                                <input type="tel" placeholder='Telegram' name='telegram' defaultValue={openEditTeamMember?.telegram} />
                            </div>
                            <div className="input-field">
                                <span>WhatsApp</span>
                                <input type="tel" placeholder='WhatsApp' name='whatsapp' defaultValue={openEditTeamMember?.whatsapp} />
                            </div>


                            <div className='home-add-service-selected-image'>
                                <img className='image' src={SelectedTeamMemberDpEdit ? SelectedTeamMemberDpEdit : openEditTeamMember?.teamMemberDp} alt="" />
                            </div>

                            <div className="add-image">
                                <input onChange={handleTeamMemberImageEdit} id='editTeamMemberDp' type="file" name='addTeamMemberImage' accept="image/png, image/gif, image/jpg, image/svg, image/jpeg" />
                                <label htmlFor="editTeamMemberDp">
                                    <img src={imageIcon} alt="" />
                                    {
                                        SelectedTeamMemberDpEdit?.length > 0 ?
                                            <p>Change Image</p> :
                                            <p>Add any <span>vertical size</span> image. Supports, png, gif, jpg, svg, jpeg.</p>
                                    }
                                </label>
                            </div>
                            <div className="actions">
                                <div onClick={() => setOpenEditTeamMember(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={`confirm-popup ${deleteMember && 'open'}`}>
                <div className="confirm-box">
                    <p className="message">Are you sure you want to <span>delete</span>?</p>
                    <div className="actions">
                        <button onClick={() => setDeleteMember(null)} className="cancel">Cancel</button>
                        <button onClick={handleDeleteMember} className="delete">Delete</button>
                    </div>
                </div>
            </div>

            <div className={`common-popup-bg ${openAddTeamMember && 'open'}`}>
                <div className="common-popup">
                    <div className="about-add-team-member">
                        <h4 className="common-popup-heading">Add new team member</h4>
                        <form onSubmit={handleAddTeamMember} action="">
                            <input type="text" placeholder='Member Name' name='name' required />
                            <input type="text" placeholder='Member Role (ex: mobile app developer)' name='role' required />

                            <input type="number" placeholder='Serial' name='serial' min='1' required />

                            <input type="url" placeholder='Portfolio' name='portfolio' />
                            <input type="url" placeholder='Github' name='github' />
                            <input type="url" placeholder='LinkedIn' name='linkedin' />
                            <input type="url" placeholder='FaceBook' name='facebook' />
                            <input type="url" placeholder='Instagram' name='instagram' />
                            <input type="url" placeholder='Twitter' name='twitter' />
                            <input type="url" placeholder='Dribbble' name='dribbble' />
                            <input type="tel" placeholder='Telegram' name='telegram' />
                            <input type="tel" placeholder='WhatsApp' name='whatsapp' />

                            {
                                selectedTeamMemberImage?.length > 0 &&
                                <div className='about-add-team-member-selected-image'>
                                    <img className='image' src={selectedTeamMemberImage} alt="" />
                                </div>
                            }

                            <div className="add-image">
                                <input onChange={handleAddTeamMemberImageAdd} id='teamMemberImage' type="file" name='addTeamMemberImage' accept="image/png, image/gif, image/jpg, image/svg, image/jpeg" required />
                                <label htmlFor="teamMemberImage">
                                    <img src={imageIcon} alt="" />
                                    {
                                        selectedTeamMemberImage?.length > 0 ?
                                            <p>Change Image</p> :
                                            <p>Add any <span>vertical size</span> image. Supports, png, gif, jpg, svg, jpeg.</p>
                                    }
                                </label>
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenAddTeamMember(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={`common-popup-bg ${openEditTeamNoGap && 'open'}`}>
                <div className="common-popup">
                    <div className="about-we-value edit">
                        <h4 className="common-popup-heading">Edit value</h4>
                        <form onSubmit={handleEditTeamNoGap} action="">

                            <div className="input-field">
                                <span>Number or member in a row(3 - 6)</span>
                                <input type="number" placeholder='Number or member in a row(3 - 6)' name='noOfMember' min='3' max='6' defaultValue={teamNoGap?.noOfMember} required />
                            </div>
                            <div className="input-field">
                                <span>Gap between member image(30 - 100)</span>
                                <input type="number" placeholder='Gap between member image(30 - 100)' name='gapBetweenMember' min='30' max='100' defaultValue={teamNoGap?.gapBetweenMember} required />
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenEditTeamNoGap(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={`common-popup-bg ${openEditTeamHeading && 'open'}`}>
                <div className="common-popup">
                    <div className="about-we-value edit">
                        <h4 className="common-popup-heading">Edit Team Heading</h4>
                        <form onSubmit={handleEditTeamHeading} action="">
                            <div className="input-field">
                                <span>Title</span>
                                <textarea type="number" placeholder='Title' name='title' defaultValue={teamHeading?.title} required></textarea>
                            </div>
                            <div className="input-field">
                                <span>Description</span>
                                <textarea type="number" placeholder='Description' name='description' defaultValue={teamHeading?.description} required ></textarea>
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenEditTeamHeading(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="admin-about-team common-section">
                <div className="heading">
                    <p className="title">Our Amazing Team <span className='number-count'>{allTeamMembers.length}</span></p>
                    <div className="actions">
                        <img onClick={() => setOpenAddTeamMember(true)} src={plus} alt="" className="close" />
                    </div>
                </div>


                <div className="team-title-description">
                    <div className="data title-section">
                        <div className="title-part">
                            <p className="title ">Title:</p>
                            <p className="title-data">{teamHeading?.title}</p>
                        </div>
                        <img onClick={() => setOpenEditTeamHeading(true)} src={edit} alt="" />
                    </div>
                    <div className="data">
                        <p className="description">Description: </p>
                        <p className="description-data">{teamHeading?.description}</p>
                    </div>
                </div>


                <div className="member-gap">
                    <div className="member-in-row section">
                        <p className="text">Number or member in a row(3 - 6)</p>
                        <p className="number">{teamNoGap.noOfMember || 'loading ...'}</p>
                        <img onClick={() => setOpenEditTeamNoGap(true)} src={edit} alt="" className='edit' />
                    </div>
                    <div className="gap-between-member section">
                        <p className="text">Gap between member image(30 - 100)</p>
                        <p className="number">{teamNoGap.gapBetweenMember || 'loading ...'}</p>
                        <img onClick={() => setOpenEditTeamNoGap(true)} src={edit} alt="" className='edit' />
                    </div>
                </div>

                <div className="body">

                    {
                        allTeamMembers.length <= 0 ? <p className='not-available'>No team member</p> :
                            allTeamMembers.map((member, i) =>
                                <div key={member._id} className="data">
                                    <div className="member-img">
                                        <img src={member.teamMemberDp} alt="" className="member-img" />
                                    </div>
                                    <p className="name">{member.name} ({member.serial})</p>
                                    <p className="role">{member.role}</p>
                                    <div className="admin-social">
                                        {
                                            member.portfolio && <a href={member.portfolio} target='_blank'><img src={profile} alt="" /></a>
                                        }
                                        {
                                            member.github && <a href={member.github} target='_blank'><img src={gitHub} alt="" /></a>
                                        }
                                        {
                                            member.linkedin && <a href={member.linkedin} target='_blank'><img src={linkedin} alt="" /></a>
                                        }
                                        {
                                            member.facebook && <a href={member.facebook} target='_blank'><img src={facebook} alt="" /></a>
                                        }
                                        {
                                            member.instagram && <a href={member.instagram} target='_blank'><img src={instagram} alt="" /></a>
                                        }
                                        {
                                            member.twitter && <a href={member.twitter} target='_blank'><img src={twitter} alt="" /></a>
                                        }
                                        {
                                            member.dribbble && <a href={member.dribbble} target='_blank'><img src={dribble} alt="" /></a>
                                        }
                                        {
                                            member.telegram && <a href={`https://telegram.me/${member.telegram}`} target='_blank'><img src={telegram} alt="" /></a>
                                        }
                                        {
                                            member.whatsapp && <a href={`https://wa.me/${member.whatsapp}`} target='_blank'><img src={whatsapp} alt="" /></a>
                                        }
                                    </div>



                                    <div className="edit-icon">
                                        <img onClick={() => setOpenEditTeamMember(member)} src={edit} alt="" className="edit" />
                                        <img onClick={() => setDeleteMember(member._id)} src={deleteIcon} alt="" className="edit" />
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminAboutTeam;