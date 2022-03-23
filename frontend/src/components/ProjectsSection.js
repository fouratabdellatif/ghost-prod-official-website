import React from 'react'
import { ProjectsData } from '../data/ProjectsData'
import ProjectCard from './Cards/ProjectCard'
import '../assets/css/ProjectsSection.css'
import SectionTitle from './SectionTitle'

const ProjectsSection = () => {
    return (
        <section className='projects-section'>
            <SectionTitle title="Nos Projets" />
            <div className='projects-container'>
                {ProjectsData.map((item, index) => (
                    <ProjectCard
                        key={index}
                        name={item.name}
                        category={item.category}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection