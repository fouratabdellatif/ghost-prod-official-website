import React from 'react'
import '../../assets/css/Project.css'
import CustomDivider from '../CustomDivider'
// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'

const Project = ({ item }) => {
    return (
        <section className='one-project-section'>
            <div className='one-project-container'>
                <div className='one-project-column-left'>
                    {/* <YouTube opts={{
                        width: '100%',
                        height: '100%'
                    }} className='yt-video' videoId={item?.videoId} /> */}
                    <ReactPlayer
                        url={item?.videoId}
                        controls={true}
                        height='100%'
                        width='100%'
                    />
                </div>
                <div className='one-project-column-right'>
                    <h1 className='one-project-title'>{item?.name}</h1>
                    <CustomDivider fullWidth />
                    <p><span>Client: </span><a className='contact-link' href={item?.clientLink} target='_blank' rel="noreferrer">{item?.client}</a></p>
                    <p><span>Description: </span><br />{item?.description}</p>
                    {/* <p><span>Partners and Sponsors: </span>
                    </p>
                    {item?.partners.map((partner) => (
                        <>
                            <p><a className='contact-link' href={partner?.partnerLink} target='_blank' rel="noreferrer">{partner?.name}</a></p>
                        </>
                    ))} */}
                </div>
            </div>
            {item?.videos.length !== 0 && (
                <div className='other-projects-section'>
                    <>
                        <h1 className='other-projects-title'>Also in this project</h1>
                        <CustomDivider right />
                    </>
                    <div className='other-projects'>
                        {item?.videos.map((vid, index) => (
                            <div className='other-projects-item' data-aos="fade-up">
                                {/* <YouTube opts={{
                                width: '100%',
                                height: '100%'
                            }} className='yt-video' videoId={vid?.videoId} /> */}
                                <ReactPlayer
                                    url={vid?.videoId}
                                    controls={true}
                                    height='100%'
                                    width='100%'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Project