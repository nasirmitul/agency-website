import React, { useEffect, useRef, useState } from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';
import edit from '../../images/edit.svg'
import deleteIcon from '../../images/Delete.svg'
import close from '../../images/close.svg'
import imageIcon from '../../images/image-icon.svg'
import { MdCancel } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-hot-toast';
import JoditEditor from 'jodit-react';


const AdminProjects = () => {
    const [openAddProjectForm, setOpenAddProjectForm] = useState(false)
    const [openEditHeading, setOpenEditHeading] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [refetch, setRefetch] = useState(false);
    const [deleteProject, setDeleteProject] = useState(null);
    const [allProjects, setAllProjects] = useState([])
    const [projectsHeading, setProjectsHeading] = useState([])

    const [selectedImagesEdit, setSelectedImagesEdit] = useState([]);
    const [openEditProject, setOpenEditProject] = useState(null);
    const [holdPrevProjectImage, setHoldPrevProjectImage] = useState([]);

    const editor = useRef(null);
    const addEditor = useRef(null);
    const [content, setContent] = useState('');
    const [addContent, setAddContent] = useState('');

    useEffect(() => {
        fetch('https://projitize.vercel.app/projects/heading')
            .then(res => res.json())
            .then(data => setProjectsHeading(data))
    }, [refetch])

    useEffect(() => {
        fetch('https://projitize.vercel.app/all-project')
            .then(res => res.json())
            .then(data => {
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

    const handleAddProject = async (e) => {
        e.preventDefault();
        const form = e.target;
        const projectName = form.projectName.value;
        const projectType = form.projectType.value;
        const projectLiveLink = form.projectLiveLink.value;
        const projectImages = form.projectImages.files;

        if (addContent.length <= 0 || projectImages?.length <= 0) {
            return toast.error('None of your field can be empty');
        }

        toast.loading('Adding new project...');
        setOpenAddProjectForm(false);

        const allProjectImage = [];

        try {
            for (let i = 0; i < projectImages.length; i++) {
                const data = new FormData();
                data.append('file', projectImages[i]);
                data.append('upload_preset', 'projitize_project');
                data.append('cloud_name', 'projitize');

                const response = await fetch('https://api.cloudinary.com/v1_1/projitize/image/upload', {
                    method: 'POST',
                    body: data
                });

                const result = await response.json();
                console.log(result);
                allProjectImage.push(result.url);
                console.log(allProjectImage);
            }

            const addProject = {
                projectName,
                projectType,
                projectLiveLink,
                projectShortDesc: addContent,
                projectImages: allProjectImage,
                time: new Date()
            };

            console.log(addProject);

            const addProjectResponse = await fetch('https://projitize.vercel.app/new-project', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addProject)
            });

            const data = await addProjectResponse.json();
            console.log(data);

            if (data.acknowledged) {
                form.reset();
                setRefetch(!refetch);
                setSelectedImages([]);
                toast.dismiss();
                setAddContent('');
                toast.success('New project added.', {
                    duration: 4000,
                    style: {
                        minWidth: 'fit-content'
                    }
                });
            } else {
                setOpenAddProjectForm(true);
                toast.dismiss();
                toast.error('Sorry, project not added. Please try again.', {
                    duration: 4000,
                    style: {
                        minWidth: 'fit-content'
                    }
                });
            }
        } catch (error) {
            console.log(error);
            toast.dismiss();
            toast.error('Sorry, project not added. Please try again.');
        }
    };

    /* const handleAddProject =  (e) => {
        e.preventDefault();
        const form = e.target;
        const projectName = form.projectName.value;
        const projectType = form.projectType.value;
        const projectLiveLink = form.projectLiveLink.value;
        const projectImages = form.projectImages.files;

        if (addContent.length <= 0 || projectImages?.length <= 0) {
            return toast.error('None of your field can be empty');;
        }

        toast.loading('Adding new project...');
        setOpenAddProjectForm(false);

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

                    if (data.asset_id) {

                    }


                    if (allProjectImage.length === projectImages.length) {
                        const addProject = {
                            projectName,
                            projectType,
                            projectLiveLink,
                            projectShortDesc: addContent,
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
                                    setAddContent('');
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
                    toast.dismiss();
                    toast.error('Sorry, project not added. Please try again.')

                })
        }
    } */

    const handleProjectDelete = () => {
        toast.loading('deleting project...');
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

    const handleHeadingUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.loading('Updating projects heading data ...')

        const title = form.title.value;
        const description = form.description.value;
        const updateHeading = {
            title,
            description
        }

        fetch(`https://projitize.vercel.app/projects/update-heading`, {
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

    let allProjectImages = [];
    const handleProjectEditOpen = (project) => {
        setOpenEditProject(project)

        if (project?.projectImages?.length >= 1) {
            allProjectImages = [...project.projectImages]
            setHoldPrevProjectImage(allProjectImages)
        }
    }

    const handleProjectImagesEditNew = (event) => {
        const files = event.target.files;
        const imageArray = [];

        for (let i = 0; i < files.length; i++) {
            const imageUrl = URL.createObjectURL(files[i]);
            imageArray.push(imageUrl);
        }
        setSelectedImagesEdit(imageArray);
    }

    const handlePrevImageRemoveEditProject = (index) => {
        const updatedImages = [...holdPrevProjectImage];
        updatedImages.splice(index, 1);
        setHoldPrevProjectImage(updatedImages);
    };

    const handleImageRemoveEditNew = (index) => {
        const updatedImages = [...selectedImagesEdit];
        updatedImages.splice(index, 1);
        setSelectedImagesEdit(updatedImages);
    };

    const handleEditProject = async (e) => {
        e.preventDefault();

        const form = e.target;

        const projectName = form.projectName.value;
        const projectType = form.projectType.value;
        const projectLiveLink = form.projectLiveLink.value;
        const projectImages = form.projectImages.files;

        if (content.length <= 0 || (projectImages?.length <= 0 && holdPrevProjectImage?.length <= 0)) {
            return toast.error('None of your field can be empty');
        }

        toast.loading('Editing project...');
        const projectId = openEditProject._id;

        try {
            if (projectImages.length <= 0) {
                const updateProject = {
                    projectName,
                    projectType,
                    projectLiveLink,
                    projectShortDesc: content,
                    projectImages: holdPrevProjectImage
                };

                const response = await fetch(`https://projitize.vercel.app/projects/edit-project/${projectId}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateProject)
                });

                const data = await response.json();
                console.log(data);

                if (data.modifiedCount >= 1) {
                    form.reset();
                    setRefetch(!refetch);
                    setHoldPrevProjectImage([]);
                    setOpenEditProject(null);
                    setContent('');
                    toast.dismiss();

                    toast.success('Project edited', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content'
                        }
                    });
                } else {
                    setHoldPrevProjectImage([]);
                    setOpenEditProject(null);
                    toast.dismiss();
                    toast.error('Sorry, project not edited. Please try again.', {
                        duration: 4000,
                        style: {
                            minWidth: 'fit-content'
                        }
                    });
                }
            } else {
                const updatedNewImage = [];

                for (let i = 0; i < projectImages.length; i++) {
                    const data = new FormData();
                    data.append('file', projectImages[i]);
                    data.append('upload_preset', 'projitize_project');
                    data.append('cloud_name', 'projitize');

                    const response = await fetch('https://api.cloudinary.com/v1_1/projitize/image/upload', {
                        method: 'POST',
                        body: data
                    });

                    const cloudinaryData = await response.json();
                    updatedNewImage.push(cloudinaryData.url);

                    if (updatedNewImage.length === projectImages.length) {
                        const allNewImage = holdPrevProjectImage.concat(updatedNewImage);

                        const updateProject = {
                            projectName,
                            projectType,
                            projectLiveLink,
                            projectShortDesc: content,
                            projectImages: allNewImage
                        };

                        const updateResponse = await fetch(`https://projitize.vercel.app/projects/edit-project/${projectId}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(updateProject)
                        });

                        const updateData = await updateResponse.json();
                        console.log(updateData);

                        if (updateData.modifiedCount >= 1) {
                            form.reset();
                            setRefetch(!refetch);
                            setHoldPrevProjectImage([]);
                            setSelectedImagesEdit([]);
                            setOpenEditProject(null);
                            setContent('');
                            toast.dismiss();

                            toast.success('Project edited', {
                                duration: 4000,
                                style: {
                                    minWidth: 'fit-content'
                                }
                            });
                        } else {
                            setHoldPrevProjectImage([]);
                            setSelectedImagesEdit([]);
                            setOpenEditProject(null);
                            toast.dismiss();
                            toast.error('Sorry, project not edited. Please try again.', {
                                duration: 4000,
                                style: {
                                    minWidth: 'fit-content'
                                }
                            });
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditCancel = () => {
        setOpenEditProject(false)
        setContent('');
    }

    /* const handleEditProject = (e) => {
        e.preventDefault();

        const form = e.target;

        const projectName = form.projectName.value;
        const projectType = form.projectType.value;
        const projectLiveLink = form.projectLiveLink.value;
        const projectImages = form.projectImages.files;

        if (content.length <= 0 || (projectImages?.length <= 0 && holdPrevProjectImage?.length <= 0)) {
            return toast.error('None of your field can be empty');;
        }


        toast.loading('Editing project...');
        const projectId = openEditProject._id;


        if (projectImages.length <= 0) {
            const updateProject = {
                projectName,
                projectType,
                projectLiveLink,
                projectShortDesc: content,
                projectImages: holdPrevProjectImage
            }

            fetch(`https://projitize.vercel.app/projects/edit-project/${projectId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateProject)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount >= 1) {
                        form.reset();
                        setRefetch(!refetch);
                        setHoldPrevProjectImage([])
                        setOpenEditProject(null);
                        toast.dismiss();
                        setContent('');
                        toast.success('Project edited', {
                            duration: 4000,
                            style: {
                                minWidth: 'fit-content',
                            },
                        })
                    }
                    else {
                        setHoldPrevProjectImage([])
                        setOpenEditProject(null);
                        toast.dismiss();
                        toast.error('Sorry, project not edited. Please try again.', {
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
            const updatedNewImage = [];
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
                        updatedNewImage.push(data.url)
                        if (updatedNewImage.length === projectImages.length) {

                            const allNewImage = holdPrevProjectImage.concat(updatedNewImage)

                            const updateProject = {
                                projectName,
                                projectType,
                                projectLiveLink,
                                projectShortDesc: content,
                                projectImages: allNewImage
                            }

                            fetch(`https://projitize.vercel.app/projects/edit-project/${projectId}`, {
                                method: 'PATCH',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(updateProject)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.modifiedCount >= 1) {
                                        form.reset();
                                        setRefetch(!refetch);
                                        setHoldPrevProjectImage([])
                                        setSelectedImagesEdit([])
                                        setOpenEditProject(null);
                                        toast.dismiss();
                                        setContent('');
                                        toast.success('Project edited', {
                                            duration: 4000,
                                            style: {
                                                minWidth: 'fit-content',
                                            },
                                        })
                                    }
                                    else {
                                        setHoldPrevProjectImage([])
                                        setSelectedImagesEdit([])
                                        setOpenEditProject(null);
                                        toast.dismiss();
                                        toast.error('Sorry, project not edited. Please try again.', {
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
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }



        }

    } */

    return (
        <div>
            <div className={`common-popup-bg ${openAddProjectForm && 'open'}`}>
                <div className="common-popup">
                    <div className="add-new-project">
                        <div className="add-project-heading">
                            <h4>Add new Project</h4>
                            <MdCancel onClick={() => setOpenAddProjectForm(false)} className='cancel-icon'></MdCancel>
                        </div>
                        <form onSubmit={handleAddProject} action="">
                            <input type="text" placeholder='Project Name' name='projectName' required />
                            <input type="text" placeholder='Project Type' name='projectType' required />
                            <input type="url" placeholder='Live Link' name='projectLiveLink' required />

                            {
                                selectedImages.length > 0 &&
                                <div className="all-selected-images">
                                    {
                                        selectedImages.map((image, index) => (
                                            <div key={index} className='single-image'>
                                                <img className='selected-img' key={index} src={image} alt={`Selected Image ${index}`} />
                                                <RxCross2 className='remove-img' onClick={() => handleImageRemove(index)}></RxCross2>
                                            </div>
                                        ))
                                    }
                                </div>
                            }

                            <div className="add-image">
                                <input onChange={handleProjectImages} id='projectImages' type="file" placeholder='Project Image' name='projectImages' accept="image/png, image/gif, image/jpg, image/svg, image/jpeg" multiple />
                                <label htmlFor="projectImages">
                                    <img src={imageIcon} alt="" />
                                    {
                                        selectedImages.length > 0 ?
                                            <p>Change Images</p> :
                                            <p>Select <span>16:9</span> images for project. Supports, png, gif, jpg, svg, jpeg.</p>
                                    }
                                </label>
                            </div>

                            <JoditEditor
                                ref={addEditor}
                                value={addContent}
                                onChange={(newContent) => setAddContent(newContent)}
                            ></JoditEditor>

                            <button className='add-project-button' type='submit'>Add Project</button>
                        </form>
                    </div>
                </div>
            </div>


            <div className={`common-popup-bg ${openEditProject && 'open'}`}>
                <div className="common-popup">
                    <div className="update-hero">
                        <h4 className="common-popup-heading">Edit Project</h4>
                        <form onSubmit={handleEditProject} action="">
                            <div className="input-field">
                                <span>Project Name</span>
                                <input type="text" placeholder='Project Name' defaultValue={openEditProject?.projectName} name='projectName' required />
                            </div>
                            <div className="input-field">
                                <span>Project Type</span>
                                <input type="text" placeholder='Project Type' defaultValue={openEditProject?.projectType} name='projectType' required />
                            </div>
                            <div className="input-field">
                                <span>Live Link</span>
                                <input type="url" placeholder='Live Link' defaultValue={openEditProject?.projectLiveLink} name='projectLiveLink' required />
                            </div>
                            {
                                holdPrevProjectImage.length > 0 &&
                                <div className="input-field edit-project-prev-images">
                                    <span>Previous Images</span>
                                    {

                                        <div className="all-selected-images">
                                            {
                                                holdPrevProjectImage.map((image, index) => (
                                                    <div key={index} className='single-image'>
                                                        <img className='selected-img' key={index} src={image} alt={`Selected Image ${index}`} />
                                                        <RxCross2 className='remove-img' onClick={() => handlePrevImageRemoveEditProject(index)}></RxCross2>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                            }
                            {
                                selectedImagesEdit.length > 0 &&
                                <div className="input-field edit-project-prev-images">
                                    <span>New Images</span>
                                    <div className="all-selected-images">
                                        {
                                            selectedImagesEdit.map((image, index) => (
                                                <div key={index} className='single-image'>
                                                    <img className='selected-img' key={index} src={image} alt={`Selected Image ${index}`} />
                                                    <RxCross2 className='remove-img' onClick={() => handleImageRemoveEditNew(index)}></RxCross2>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            }

                            <div className="add-image">
                                <input onChange={handleProjectImagesEditNew} id='projectImagesEdit' type="file" placeholder='Project Image' name='projectImages' accept="image/png, image/gif, image/jpg, image/svg, image/jpeg" multiple />
                                <label htmlFor="projectImagesEdit">
                                    <img src={imageIcon} alt="" />
                                    {
                                        selectedImagesEdit.length > 0 ?
                                            <p>Change Images</p> :
                                            <p>Select <span>16:9</span> images for project. Supports, png, gif, jpg, svg, jpeg.</p>
                                    }
                                </label>
                            </div>

                            <div className="input-field jodit">
                                <span>Short Description</span>
                            </div>
                            <JoditEditor
                                ref={editor}
                                value={content.length <= 1 ? (openEditProject?.projectShortDesc || '') : content}
                                onChange={(newContent) => setContent(newContent)}
                            ></JoditEditor>

                            <div className="actions">
                                <div onClick={handleEditCancel} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
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

            <div className={`common-popup-bg ${openEditHeading && 'open'}`}>
                <div className="common-popup">
                    <div className="update-hero">
                        <h4 className="common-popup-heading">Update Projects Heading</h4>
                        <form onSubmit={handleHeadingUpdate} action="">
                            <div className="input-field">
                                <span>Title</span>
                                <textarea type="text" defaultValue={projectsHeading?.title} placeholder='Title' name='title' required ></textarea>
                            </div>
                            <div className="input-field">
                                <span>Description</span>
                                <textarea type="text" defaultValue={projectsHeading?.description} placeholder='Description' name='description' required ></textarea>
                            </div>

                            <div className="actions">
                                <div onClick={() => setOpenEditHeading(false)} className='cancel'>Cancel</div>
                                <button className='submit' type='submit'>Submit</button>
                            </div>
                        </form>
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
                                <img onClick={() => setOpenEditHeading(true)} src={edit} alt="" className="edit" />
                            </div>
                        </div>


                        <div className="body">
                            <div className="data">
                                <p className="content-title">Title:</p>
                                <p className="content-data">{projectsHeading.title || 'loading ...'}</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Description:</p>
                                <p className="content-data">{projectsHeading.description || 'loading ...'}</p>
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
                                                <img onClick={() => handleProjectEditOpen(project)} src={edit} alt="" />
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