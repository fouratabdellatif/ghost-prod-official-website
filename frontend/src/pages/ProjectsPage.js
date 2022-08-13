/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import ProjectsGroup from '../components/Projects/ProjectsGroup'
import { useSelector } from 'react-redux'

const ProjectsPage = () => {

    const pages = useSelector((state) => state.pages);

    let data = pages.filter((item) => item.name == "projects").map((item, index) => {
        return item;
    });

    const page = data[0];

    const pageTitle = page?.pageTitle;
    const title = page?.title;
    const text = page?.text;
    const image = page?.image;

    return (
        <>
            <CasualPage
                pageTitle={page ? pageTitle : "Réalisations"}
                bg={page ? image : bgImage}
                text={page ? text : "our references"}
                title={page ? title : "Our Projects"}
                pageContent={
                    <>
                        <ProjectsGroup />
                    </>
                } />
        </>
    )
}

export default ProjectsPage