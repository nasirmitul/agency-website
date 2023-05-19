import React from 'react';
import AdminPageTitle from '../Utilities/AdminPageTitle';
import edit from '../../images/edit.svg'
import plus from '../../images/close.svg'
import prototype from '../../images/prototype.png'
import deleteIcon from '../../images/Delete.svg'
import man from '../../images/manImage.png'



const AdminHome = () => {

    return (
        <div>
            <div className='admin-container'>
                <AdminPageTitle title='Admin Home Section'></AdminPageTitle>

                <div className="admin-home admin-common">

                    <div className="admin-home-hero common-section">
                        <div className="heading">
                            <p className="title">Hero</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>
                        <div className="body">
                            <div className="data">
                                <p className="content-title">Title:</p>
                                <p className="content-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <div className="data">
                                <p className="content-title">Description:</p>
                                <p className="content-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti optio perspiciatis atque nemo. Officia officiis dolore iure in ipsam veniam placeat maiores ipsum labore? Optio quasi distinctio molestias laudantium.</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Projects:</p>
                                <p className="content-data">30+</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Experience:</p>
                                <p className="content-data">03+</p>
                            </div>
                        </div>
                    </div>


                    <div className="admin-home-achievements common-section">
                        <div className="heading">
                            <p className="title">Achievements</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>

                        <div className="body">
                            <div className="data">
                                <p className="content-title">Clients:</p>
                                <p className="content-data">18+</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Projects:</p>
                                <p className="content-data">30+</p>
                            </div>
                            <div className="data">
                                <p className="content-title">Experience:</p>
                                <p className="content-data">03+</p>
                            </div>
                        </div>
                    </div>


                    <div className="admin-home-service-we-provide common-section number-two-nested">
                        <div className="heading">
                            <p className="title">Service we provide <span className='number-count'>04</span></p>
                            <div className="actions">
                                <img src={plus} alt="" className="plus" />
                            </div>
                        </div>
                        <div className="body">
                            <div className="data">
                                <p className="content-title">01</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                    <div className="content-img">
                                        <img src={prototype} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">02</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                    <div className="content-img">
                                        <img src={prototype} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">03</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                    <div className="content-img">
                                        <img src={prototype} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">04</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                    <div className="content-img">
                                        <img src={prototype} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="admin-home-work-process common-section number-two-nested">
                        <div className="heading">
                            <p className="title">Our Work Process</p>
                        </div>
                        <div className="body">
                            <div className="data">
                                <p className="content-title">01</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>

                                    <div className="nested-others-items">
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">01</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">02</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">03</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">04</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">02</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                    <div className="nested-others-items">
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">01</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">02</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">03</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">04</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">03</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                    <div className="nested-others-items">
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">01</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">02</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">03</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                        <div className="nested-others-single-item">
                                            <p className="others-item-count">04</p>
                                            <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="admin-home-faq common-section number-two-nested">
                        <div className="heading">
                            <p className="title">FAQ<span className='number-count'>04</span></p>
                            <div className="actions">
                                <img src={plus} alt="" className="plus" />
                            </div>
                        </div>
                        <div className="body">
                            <div className="data">
                                <p className="content-title">01</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">02</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">03</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">04</p>
                                <div className="content-data-nested-two">
                                    <div className="nested-two-title-heading">
                                        <p className="nested-two-title">Lorem ipsum dolor sit amet.</p>
                                        <div className="nested-two-title-actions">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>
                                    <p className="nested-two-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam voluptas nobis repellendus temporibus unde aliquam exercitationem earum ad non.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="admin-home-why-choose-use common-section">
                        <div className="heading">
                            <p className="title">Why Choose us</p>
                            <div className="actions">
                                <img src={edit} alt="" className="edit" />
                            </div>
                        </div>
                        <div className="body">
                            <div className="data">
                                <p className="content-title">Title:</p>
                                <p className="content-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <div className="data">
                                <p className="content-title">Description:</p>
                                <p className="content-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti optio perspiciatis atque nemo. Officia officiis dolore iure in ipsam veniam placeat maiores ipsum labore? Optio quasi distinctio molestias laudantium.</p>
                            </div>

                            <div className="data">
                                <div className="nested-others-items">
                                    <div className="nested-others-single-item">
                                        <p className="others-item-count">01.</p>
                                        <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div className="nested-others-single-item">
                                        <p className="others-item-count">02.</p>
                                        <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div className="nested-others-single-item">
                                        <p className="others-item-count">03.</p>
                                        <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div className="nested-others-single-item">
                                        <p className="others-item-count">04.</p>
                                        <p className="other-item-data">Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>



                    <div className="admin-home-client-says common-section number-two-nested">
                        <div className="heading">
                            <p className="title">What our client's says!<span className='number-count'>04</span></p>
                            <div className="actions">
                                <img src={plus} alt="" className="plus" />
                            </div>
                        </div>
                        <div className="body">
                            <div className="data">
                                <p className="content-title">01</p>
                                <div className="content-data-nested-two">
                                    <div className="client-image-actions">
                                        <img className='client-image' src={man} alt="" />
                                        <div className="action">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>

                                    <div className="client-name">
                                        <p className="name-title">Name:</p>
                                        <p className="name">Nasir Mitul</p>
                                    </div>
                                    <div className="client-role">
                                        <p className="role-title">Role:</p>
                                        <p className="role">CEO of nasir Mitul</p>
                                    </div>
                                    <div className="client-message">
                                        <p className="message-title">Message:</p>
                                        <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo veritatis provident dolore adipisci officiis facere distinctio autem nam doloremque!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">02</p>
                                <div className="content-data-nested-two">
                                    <div className="client-image-actions">
                                        <img className='client-image' src={man} alt="" />
                                        <div className="action">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>

                                    <div className="client-name">
                                        <p className="name-title">Name:</p>
                                        <p className="name">Nasir Mitul</p>
                                    </div>
                                    <div className="client-role">
                                        <p className="role-title">Role:</p>
                                        <p className="role">CEO of nasir Mitul</p>
                                    </div>
                                    <div className="client-message">
                                        <p className="message-title">Message:</p>
                                        <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo veritatis provident dolore adipisci officiis facere distinctio autem nam doloremque!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="data">
                                <p className="content-title">03</p>
                                <div className="content-data-nested-two">
                                    <div className="client-image-actions">
                                        <img className='client-image' src={man} alt="" />
                                        <div className="action">
                                            <img className='edit' src={edit} alt="" />
                                            <img className='delete' src={deleteIcon} alt="" />
                                        </div>
                                    </div>

                                    <div className="client-name">
                                        <p className="name-title">Name:</p>
                                        <p className="name">Nasir Mitul</p>
                                    </div>
                                    <div className="client-role">
                                        <p className="role-title">Role:</p>
                                        <p className="role">CEO of nasir Mitul</p>
                                    </div>
                                    <div className="client-message">
                                        <p className="message-title">Message:</p>
                                        <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo veritatis provident dolore adipisci officiis facere distinctio autem nam doloremque!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AdminHome;