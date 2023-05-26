import React, { useEffect, useState } from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';
import edit from '../../images/edit.svg'
import deleteIcon from '../../images/Delete.svg'
import close from '../../images/close.svg'
import imageIcon from '../../images/image-icon.svg'
import { MdCancel } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { IoImages } from 'react-icons/io5';
import { toast } from 'react-hot-toast';



const AdminProjects = () => {
    const [openAddProjectForm, setOpenAddProjectForm] = useState(false)
    const [selectedImages, setSelectedImages] = useState([]);
    const [refetch, setRefetch] = useState(false);
    const [deleteProject, setDeleteProject] = useState(null);

    const [allProjects, setAllProjects] = useState([])

    useEffect(() => {
        fetch('https://projitize.vercel.app/all-project')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllProjects(data);
            })
    }, [refetch])



    const handleProjectImages = (event) => {
        const files = event.target.files;
        const imageArray = [];

        for (let i = 0; i < files.length; i++) {
            const imageUrl = URL.createObjectURL(files[i]);
            imageArray.push(imageUrl);
        }
        setSelectedImages(imageArray);
    }

    const handleImageRemove = (index) => {
        const updatedImages = [...selectedImages];
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);
    };


    const handleProjectAddFormSubmit = (e) => {
        toast.loading('Adding new project...');
        setOpenAddProjectForm(false);
        e.preventDefault();
        const form = e.target;

        const projectName = form.projectName.value;
        const projectType = form.projectType.value;
        const projectLiveLink = form.projectLiveLink.value;
        const projectShortDesc = form.projectShortDesc.value;
        const projectImages = form.projectImages.files;

        const allProjectImage = [];

        for (let i = 0; i < projectImages.length; i++) {
            const data = new FormData()
            data.append('file', projectImages[i])
            data.append('upload_preset', 'projitize_project')
            data.append('cloud_name', 'projitize')

            fetch('https://api.cloudinary.com/v1_1/projitize/image/upload', {
                method: 'POST',
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    allProjectImage.push(data.url)
                    console.log(allProjectImage);

                    if (allProjectImage.length === projectImages.length) {
                        const addProject = {
                            projectName,
                            projectType,
                            projectLiveLink,
                            projectShortDesc,
                            projectImages: allProjectImage,
                            time: new Date()
                        }
                        console.log(addProject);

                        fetch('https://projitize.vercel.app/new-project', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(addProject)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.acknowledged) {
                                    form.reset();
                                    setRefetch(!refetch);
                                    setSelectedImages([]);
                                    toast.dismiss();
                                    toast.success('New project added.', {
                                        duration: 4000,
                                        style: {
                                            minWidth: 'fit-content',
                                        },
                                    })
                                }
                                else {
                                    setOpenAddProjectForm(true);
                                    toast.dismiss();
                                    toast.error('Sorry, project not added. Please try again.', {
                                        duration: 4000,
                                        style: {
                                            minWidth: 'fit-content',
                                        },
                                    })
                                }
                            })
                            .catch(error => console.log(error))

                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }


    const handleProjectDelete = () => {
        toast.loading('deleting mail...');
        fetch(`https://projitize.vercel.app/delete-project/${deleteProject}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount >= 1) {
                    setDeleteProject(null)
                    console.log(data);
                    setRefetch(!refetch);
                    toast.dismiss();
                    toast.error('Project Deleted')
                }
            })
    }



    return (
        <div>
            <div className={`common-popup-bg ${openAddProjectForm && 'open'}`}>
                <div className="common-popup">
                    <div className="add-new-project">
                        <div className="add-project-heading">
                            <h4>Add new Project</h4>
                            <MdCancel onClick={() => setOpenAddProjectForm(false)} className='cancel-icon'></MdCancel>
                        </div>
                        <form onSubmit={handleProjectAddFormSubmit} action="">
                            <input type="text" placeholder='Project Name' name='projectName' />
                            <input type="text" placeholder='Project Type' name='projectType' />
                            <input type="text" placeholder='Live Link' name='projectLiveLink' />
                            <input type="text" placeholder='Short Description' name='projectShortDesc' />



                            {
                                selectedImages.length > 0 &&
                                <div className="all-selected-images">
                                    {
                                        selectedImages.map((image, index) => (
                                            <div className='single-image'>
                                                <img className='selected-img' key={index} src={image} alt={`Selected Image ${index}`} />
                                                <RxCross2 className='remove-img' onClick={() => handleImageRemove(index)}></RxCross2>
                                            </div>
                                        ))
                                    }
                                </div>
                            }


                            <div className="add-image">
                                <input onChange={handleProjectImages} id='projectImages' type="file" placeholder='Experience' name='projectImages' accept="image/png, image/gif, image/jpg, image/svg, image/jpeg" multiple required />
                                <label htmlFor="projectImages">
                                    <img src={imageIcon} alt="" />
                                    {
                                        selectedImages.length > 0 ?
                                            <p>Change Images</p> :
                                            <p>Select <span>16:9</span> images for project. Supports, png, gif, jpg, svg, jpeg.</p>
                                    }


                                </label>
                            </div>


                            <button type='submit'>Add Project</button>
                        </form>
                    </div>
                </div>
            </div>




            <div className={`confirm-popup ${deleteProject && 'open'}`}>
                <div className="confirm-box">
                    <p className="message">Are you sure you want to <span>delete</span>?</p>
                    <div className="actions">
                        <button onClick={() => setDeleteProject(null)} className="cancel">Cancel</button>
                        <button onClick={handleProjectDelete} className="delete">Delete</button>
                    </div>
                </div>
            </div>




            <div className='admin-container'>
                <AdminPageTitle title='Admin Projects Section'></AdminPageTitle>


                <div className="admin-projects admin-common">

                    <div className="admin-projects-top common-section">
                        <div className="heading">
                            <p className="title">Heading</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>


                        <div className="body">
                            <div className="data">
                                <p className="content-title">Title:</p>
                                <p className="content-data">Projects we have done so far </p>
                            </div>
                            <div className="data">
                                <p className="content-title">Description:</p>
                                <p className="content-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti optio perspiciatis atque nemo. Officia officiis dolore iure in ipsam veniam placeat maiores ipsum labore? Optio quasi distinctio molestias laudantium.</p>
                            </div>
                        </div>
                    </div>


                    <div className="admin-projects-heading common-section">
                        <div className="heading">
                            <p className="title">All Projects <span className='number-count'>{allProjects.length}</span></p>
                            <div className="actions">
                                <img onClick={() => setOpenAddProjectForm(true)} src={close} alt="" className="plus" />
                            </div>
                        </div>
                        <div className="body">
                            {
                                allProjects.length <= 0 ? <p className='not-available'>No Project available</p> :
                                    allProjects.map((project, i) =>
                                        <div key={project._id} className="data">
                                            <p className="count">{i + 1}</p>
                                            <div className="project-img">
                                                <img src={project.projectImages[0]} alt="" />
                                            </div>
                                            <p className="project-name">{project.projectName}</p>
                                            <p className="project-type">{project.projectType}</p>
                                            <div className="edit-delete-icon">
                                                <img src={edit} alt="" />
                                                <img onClick={() => setDeleteProject(project._id)} src={deleteIcon} alt="" className='delete' />
                                            </div>
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

export default AdminProjects;