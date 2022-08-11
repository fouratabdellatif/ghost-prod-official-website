import React, { useEffect } from 'react'
import ProjectCard from '../Cards/ProjectCard'
import '../../assets/css/ProjectsSection.css'
import SectionTitle from './SectionTitle'
import CasualButton from '../CasualButton'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../../actions/projects'

const ProjectsSection = () => {

    const projects = useSelector((state) => state.projects);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    let someProjects = projects.slice(0, 4).map(item => {
        return item;
    });

    return (!projects || projects.length === 0) ? (
        null
    ) : (
        <section className='projects-section'>
            <SectionTitle miniTitle="Nos " title="Projets" />
            <div className='projects-container'>
                {someProjects.map((item, index) => (
                    <ProjectCard
                        key={index}
                        item={item}
                    />
                ))}
            </div>
            <div data-aos="slide-left" className='projects-btn'>
                <CasualButton
                    text="Tous nos projets"
                    link="/realisations"
                    icon={
                        <MdOutlineArrowForwardIos className="icon-btn" />
                    }
                />
            </div>
        </section>
    )
}

export default ProjectsSection