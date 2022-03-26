import React from 'react';
import '../../assets/css/TeamCard.css';

function TeamCard({ firstname, lastname, spec, image, instagram, facebook, linkedin }) {
    return (
        <div className="team-card-wrapper">
            <div className="team-card">
                <div className="team-card-image">
                    <img src={image} alt='team_member' />
                </div>
                <ul className="social-icons-cards">
                    <li>
                        <a
                            className='social-icon-link facebook'
                            href={facebook}
                            target='_blank'
                            aria-label='Facebook'
                            rel="noreferrer"
                        >
                            <i class="fab fa-facebook-square" />
                        </a>
                    </li>
                    <li>
                        <a
                            className='social-icon-link instagram'
                            href={instagram}
                            target='_blank'
                            aria-label='Youtube'
                            rel="noreferrer"
                        >
                            <i className='fab fa-instagram' />
                        </a>
                    </li>
                    <li>
                        <a
                            className='social-icon-link linkedin'
                            href={linkedin}
                            target='_blank'
                            aria-label='LinkedIn'
                            rel="noreferrer"
                        >
                            <i className='fab fa-linkedin' />
                        </a>
                    </li>
                </ul>
                <div className="member-details">
                    <h2>
                        {firstname} {lastname} <span className="job-title">{spec}</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;