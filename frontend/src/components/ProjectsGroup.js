import React from 'react'
import '../assets/css/ProjectsGroup.css';
import { ProjectsData } from '../data/ProjectsData';
import ProjectCard from './Cards/ProjectCard';

const ProjectsGroup = () => {

    return (
        <section className='project-section'>
            <div className='project-group-container'>
                {ProjectsData.map((item, index) => (
                    <ProjectCard
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectsGroup