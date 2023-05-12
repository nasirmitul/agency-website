import React from 'react';
import niloy from '../../images/niloy.png'
import { AiFillGithub } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GrFacebookOption } from 'react-icons/gr';
import { ImLinkedin2 } from 'react-icons/im';


const Team = () => {

    const numberOfMemberInRow = 3;
    const gapBetweenMemberItem = 70;

    return (
        <div className='our-team'>
            <div className="container">
                <div className="team-info">
                    <div className="team-heading">
                        <h2 className="title">Our Amazing Team</h2>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et.</p>
                    </div>

                    <div style={{ "gridTemplateColumns": `repeat(${numberOfMemberInRow}, 1fr)`, "gap": `${gapBetweenMemberItem}px` }} className="team-data">
                        <div className="team-member">
                            <img src={niloy} alt="" />
                            <div className="others-info">
                                <h5 className="name">Niloy Sarker</h5>
                                <p className="role">Mobile App Developer</p>
                                <p className="position">CEO</p>
                                <div className="social">
                                    <a href="" target='_blank'><AiFillGithub></AiFillGithub></a>
                                    <a href="" target='_blank'><BiUser></BiUser></a>
                                    <a href="" target='_blank'><GrFacebookOption></GrFacebookOption></a>
                                    <a href="" target='_blank'><ImLinkedin2></ImLinkedin2></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={niloy} alt="" />
                            <div className="others-info">
                                <h5 className="name">Niloy Sarker</h5>
                                <p className="role">Mobile App Developer</p>
                                <p className="position">CEO</p>
                                <div className="social">
                                    <a href="" target='_blank'><AiFillGithub></AiFillGithub></a>
                                    <a href="" target='_blank'><BiUser></BiUser></a>
                                    <a href="" target='_blank'><GrFacebookOption></GrFacebookOption></a>
                                    <a href="" target='_blank'><ImLinkedin2></ImLinkedin2></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={niloy} alt="" />
                            <div className="others-info">
                                <h5 className="name">Niloy Sarker</h5>
                                <p className="role">Mobile App Developer</p>
                                <p className="position">CEO</p>
                                <div className="social">
                                    <a href="" target='_blank'><AiFillGithub></AiFillGithub></a>
                                    <a href="" target='_blank'><BiUser></BiUser></a>
                                    <a href="" target='_blank'><GrFacebookOption></GrFacebookOption></a>
                                    <a href="" target='_blank'><ImLinkedin2></ImLinkedin2></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;