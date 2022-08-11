import React from 'react'
import '../../assets/css/ProjectsGroup.css';
import ProjectCard from '../Cards/ProjectCard';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getProjects } from '../../actions/projects';

const ProjectsGroup = () => {

    const projects = useSelector((state) => state.projects);
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProjects());
    }, [dispatch]);

    return (
        <section className='project-section'>
            <div className='project-group-container'>
                {projects.map((item, index) => (
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