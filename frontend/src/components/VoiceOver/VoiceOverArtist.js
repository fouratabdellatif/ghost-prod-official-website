import React from 'react'
import '../../assets/css/VoiceOverArtist.css'
import CustomDivider from '../CustomDivider'
import AudioPlayer from 'react-h5-audio-player';

const VoiceOverArtist = ({ item }) => {
    return (
        <section className='voice-over-artist-section'>
            <div className='voice-over-artist-container'>
                <div className='voice-over-artist-column-left'>
                    <img src={`/uploads/${item?.imageFile}`} alt={`${item?.firstname} ${item?.lastname}`} />
                </div>
                <div className='voice-over-artist-column-right'>
                    <div className='artist-top'>
                        <h1>{item?.firstname} {item?.lastname}</h1>
                        <ul className="artist-socials">
                            <li>
                                <a
                                    className='artist-social-link facebook'
                                    href={item?.facebook}
                                    target='_blank'
                                    aria-label='Facebook'
                                    rel="noreferrer"
                                >
                                    <i class="fab fa-facebook-square" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className='artist-social-link instagram'
                                    href={item?.instagram}
                                    target='_blank'
                                    aria-label='Youtube'
                                    rel="noreferrer"
                                >
                                    <i class='fab fa-instagram' />
                                </a>
                            </li>
                            <li>
                                <a
                                    className='artist-social-link linkedin'
                                    href={item?.linkedin}
                                    target='_blank'
                                    aria-label='LinkedIn'
                                    rel="noreferrer"
                                >
                                    <i class='fab fa-linkedin' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <CustomDivider fullWidth />
                    <p><span>City: </span>{item?.city}</p>
                    <p><span>Phone: </span><a className='contact-link' href={`tel:${item?.phone}`}>+216 {item?.phone}</a></p>
                    <p><span>Email: </span><a className='contact-link' href={`mailto:${item?.email}`}>{item?.email}</a></p>
                    <p><span>About: </span><br />{item.bio}</p>
                    <p><span>Voice-over: </span>
                    </p>
                    {item?.audioLists?.map((audio) => (
                        <>
                            <p>{audio?.name}</p>
                            <AudioPlayer
                                // autoPlay
                                src={audio?.musicSrc}
                                style={{ marginBottom: '20px' }}
                            />
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default VoiceOverArtist