import React from 'react'
import { ProjectsData } from '../data/ProjectsData'
import ProjectCard from './Cards/ProjectCard'
import '../assets/css/ProjectsSection.css'
import SectionTitle from './SectionTitle'
import CasualButton from './CasualButton'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

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
            <div data-aos="slide-right" className='projects-btn'>
                <CasualButton
                    text="Tous nos projets"
                    link="/projects"
                    icon={
                        <MdOutlineArrowForwardIos className="menu-bars" />
                    }
                />
            </div>
        </section>
    )
}

export default ProjectsSection