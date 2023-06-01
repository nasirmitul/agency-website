import React, { useEffect, useState } from 'react';
import niloy from '../../images/niloy.png'
import { AiFillGithub } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GrFacebookOption } from 'react-icons/gr';
import { ImLinkedin2 } from 'react-icons/im';


const Team = () => {


    const [teamNoGap, setTeamNoGap] = useState([])
    const [allTeamMembers, setAllTeamMembers] = useState([])
    useEffect(() => {
        fetch('https://projitize.vercel.app/about/team-no-gap')
            .then(res => res.json())
            .then(data => setTeamNoGap(data))
    }, [])

    useEffect(() => {
        fetch('https://projitize.vercel.app/about/all-team-member')
            .then(res => res.json())
            .then(data => setAllTeamMembers(data))
    }, [])

    return (
        <div className='our-team'>
            <div className="container">
                <div className="team-info">
                    <div className="team-heading">
                        <h2 className="title">Our Amazing Team</h2>
                        <p className="desc">A team of talented individuals, united by a passion for creating <br /> remarkable digital experiences.</p>
                    </div>

                    <div style={{ "gridTemplateColumns": `repeat(${teamNoGap.noOfMember}, 1fr)`, "gap": `${teamNoGap.gapBetweenMember}px` }} className="team-data">

                        {
                            allTeamMembers.map(member =>
                                <div key={member._id} className="team-member">
                                    <img src={member.teamMemberDp} alt="" />
                                    <div className="others-info">
                                        <h5 className="name">{member.name}</h5>
                                        <p className="role">{member.role}</p>
                                        <p className="position">{member.position}</p>
                                        <div className="social">
                                            <a href="" target='_blank'><AiFillGithub></AiFillGithub></a>
                                            <a href="" target='_blank'><BiUser></BiUser></a>
                                            <a href="" target='_blank'><GrFacebookOption></GrFacebookOption></a>
                                            <a href="" target='_blank'><ImLinkedin2></ImLinkedin2></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;