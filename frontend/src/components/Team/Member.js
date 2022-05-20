import React from 'react'
import '../../assets/css/Member.css'
import CustomDivider from '../CustomDivider'

const Member = ({ item }) => {
    return (
        <section className='one-member-section'>
            <div className='one-member-container'>
                <div className='one-member-column-left'>
                    <img src={item.image} alt={`${item.firstname} ${item.lastname}`} />
                </div>
                <div className='one-member-column-right'>
                    <div className='one-member-top'>
                        <h1>{item.firstname} {item.lastname}</h1>
                        <ul className="one-member-socials">
                            <li>
                                <a
                                    className='one-member-social-link facebook'
                                    href={item.facebook}
                                    target='_blank'
                                    aria-label='Facebook'
                                    rel="noreferrer"
                                >
                                    <i class="fab fa-facebook-square" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className='one-member-social-link instagram'
                                    href={item.instagram}
                                    target='_blank'
                                    aria-label='Youtube'
                                    rel="noreferrer"
                                >
                                    <i class='fab fa-instagram' />
                                </a>
                            </li>
                            <li>
                                <a
                                    className='one-member-social-link linkedin'
                                    href={item.linkedin}
                                    target='_blank'
                                    aria-label='LinkedIn'
                                    rel="noreferrer"
                                >
                                    <i class='fab fa-linkedin' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h3>{item.spec}</h3>
                    <CustomDivider fullWidth />
                    <p><span>City: </span>{item.city}</p>
                    <p><span>Phone: </span><a className='contact-link' href={`tel:${item.phone}`}>+216 {item.phone}</a></p>
                    <p><span>Email: </span><a className='contact-link' href={`mailto:${item.email}`}>{item.email}</a></p>
                    <p><span>About: </span><br />{item.bio}</p>
                </div>
            </div>
        </section>
    )
}

export default Member