import React from 'react';
import '../../assets/css/ProjectCard.css';
import { Link, useLocation } from 'react-router-dom';
import HoverVideoPlayer from "react-hover-video-player";
import { motion } from 'framer-motion';

function ProjectCard({ item }) {

    const location = useLocation();

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            layout
            className='project-card-container'
            data-aos={location.pathname === "/" ? "slide-up" : null}
        >
            <Link to={`/projets/${item?._id}`}
            // data-aos="slide-up"


            // style={{
            //     background: `url(${image})`,
            //     backgroundPosition: 'fixed',
            //     backgroundSize: 'cover'
            // }}
            >
                <div className="project-card-content"
                >
                    <div className="project-card-category">
                        <h3>{item?.category}</h3>
                    </div>
                    <div className="project-card-name">
                        <h2>{item?.name}</h2>
                    </div>
                    <div className="project-card-description">
                        <p>{item?.description}</p>
                    </div>
                </div>
                <div className="project-image-container">
                    {/* <img src={item?.imageFile} alt='' /> */}
                    <HoverVideoPlayer
                        className='project-hover-video'
                        videoSrc={item?.videoFile}
                        videoStyle={{
                            height: '360px',
                        }}
                        pausedOverlay={<img src={item?.imageFile} alt='video' />}
                    // loadingOverlay={<LoadingOverlay />}
                    />
                </div>
            </Link>
        </motion.div>
    )
}

export default ProjectCard;