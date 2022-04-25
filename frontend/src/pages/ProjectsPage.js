import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import ProjectsGroup from '../components/ProjectsGroup'

const ProjectsPage = () => {

    return (
        <>
            <CasualPage pageTitle="Réalisations" bg={bgImage} text="our references" title="Our Projects" pageContent={
                <>
                    <ProjectsGroup />
                </>
            } />
        </>
    )
}

export default ProjectsPage