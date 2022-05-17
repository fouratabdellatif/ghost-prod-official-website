import React from 'react'
import '../assets/css/Project.css'
import CustomDivider from './CustomDivider'
import YouTube from 'react-youtube';

const Project = ({ item }) => {
    return (
        <section className='one-project-section'>
            <div className='one-project-container'>
                <div className='one-project-column-left'>
                    <YouTube opts={{
                        width: '100%',
                        height: '100%'
                    }} className='yt-video' videoId="WjnsXb3K9O8" />
                </div>
                <div className='one-project-column-right'>
                    <h1>{item.name}</h1>
                    <CustomDivider fullWidth />
                    <p><span>Client: </span><a className='contact-link' href={item.clientLink} target='_blank' rel="noreferrer">{item.client}</a></p>
                    <p><span>Description: </span><br />{item.description}</p>
                    <p><span>Partners and Sponsors: </span>
                    </p>
                    {item.partners.map((partner) => (
                        <>
                            <p><a className='contact-link' href={partner.partnerLink}>{partner.name}</a></p>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project