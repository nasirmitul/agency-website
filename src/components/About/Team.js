import React, { useEffect, useState } from 'react';

import profile from '../../images/teamProfile.svg'
import gitHub from '../../images/teamGitHub.svg'
import linkedin from '../../images/teamLinkedin.svg'
import facebook from '../../images/teamFacebook.svg'
import instagram from '../../images/teamInstagram.svg'
import twitter from '../../images/teamTwitter.svg'
import dribble from '../../images/teamDribble.svg'
import telegram from '../../images/teamTelegram.svg'
import whatsapp from '../../images/teamWhatsapp.svg'


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
                                        <div className="social">
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