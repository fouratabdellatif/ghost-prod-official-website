import React from 'react';
import '../../assets/css/ProjectCard.css';
import { Link } from 'react-router-dom';
import HoverVideoPlayer from "react-hover-video-player";

function ProjectCard({ item }) {
    return (
        <Link to={`/realisations/${item.id}`} className='project-card-container' data-aos="slide-up"
        // style={{
        //     background: `url(${image})`,
        //     backgroundPosition: 'fixed',
        //     backgroundSize: 'cover'
        // }}
        >
            <div className="project-card-content">
                <div className="project-card-category">
                    <h3>{item.category}</h3>
                </div>
                <div className="project-card-name">
                    <h2>{item.name}</h2>
                </div>
                <div className="project-card-description">
                    <p>{item.description}</p>
                </div>
            </div>
            <div className="project-image-container">
                {/* <img src={item.image} alt='' /> */}
                <HoverVideoPlayer
                    className='project-hover-video'
                    videoSrc={item.video}
                    videoStyle={{
                        height: '360px',
                    }}
                    pausedOverlay={<img src={item.image} alt='video' />}
                // loadingOverlay={<LoadingOverlay />}
                />
            </div>
        </Link>
    )
}

export default ProjectCard;