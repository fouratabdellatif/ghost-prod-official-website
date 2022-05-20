/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import { useParams } from 'react-router-dom'
import Project from '../components/Projects/Project'
import { ProjectsData } from '../data/ProjectsData'


const ProjectPage = () => {

    const { id } = useParams();
    console.log(id)


    let projects = ProjectsData.filter((item) => item.id == id).map((item, index) => {
        return item;
    });

    const project = projects[0];

    console.log('project', id, project);

    return (
        <>
            <CasualPage pageTitle={project.name} bg={project.image} text={project.category} title={project.name} pageContent={
                <>
                    <Project
                        item={project}
                    />
                </>
            } />
        </>
    )
}

export default ProjectPage