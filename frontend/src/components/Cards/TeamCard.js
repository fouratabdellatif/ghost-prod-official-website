import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/TeamCard.css';

function TeamCard({ item }) {
    console.log(item)
    console.log("img: ", item.profileImage)
    return (
        <div className="team-card-wrapper">
            <div className="team-card">
                <Link className='member-link' to={`/equipe/${item?._id}`}>
                    <div className="team-card-image">
                        <img src={item?.profileImage} alt='team_member' />
                    </div>
                </Link>
                <ul className="social-icons-cards">
                    {item?.facebook && (
                        <li>
                            <a
                                className='social-icon-link facebook'
                                href={item?.facebook}
                                target='_blank'
                                aria-label='Facebook'
                                rel="noreferrer"
                            >
                                <i class="fab fa-facebook-square" />
                            </a>
                        </li>
                    )}
                    {item?.instagram && (
                        < li >
                            <a
                                className='social-icon-link instagram'
                                href={item?.instagram}
                                target='_blank'
                                aria-label='Youtube'
                                rel="noreferrer"
                            >
                                <i className='fab fa-instagram' />
                            </a>
                        </li>
                    )}
                    {item?.linkedin && (
                        <li>
                            <a
                                className='social-icon-link linkedin'
                                href={item?.linkedin}
                                target='_blank'
                                aria-label='LinkedIn'
                                rel="noreferrer"
                            >
                                <i className='fab fa-linkedin' />
                            </a>
                        </li>
                    )}
                    {item?.behance && (
                        <li>
                            <a
                                className='social-icon-link behance'
                                href={item?.behance}
                                target='_blank'
                                aria-label='Behance'
                                rel="noreferrer"
                            >
                            <i className='fab fa-behance-square' />
                            </a>
                        </li>
                    )}
                </ul>
                <Link className='member-link' to={item?.link}>
                    <div className="member-details">
                        <h2>
                            {item?.firstname} {item?.lastname} <span className="job-title">{item?.spec}</span>
                        </h2>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default TeamCard;