/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect } from 'react'
import CasualPage from './CasualPage'
import { useParams } from 'react-router-dom'
import Project from '../components/Projects/Project'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../actions/projects'


const ProjectPage = () => {

    const { id } = useParams();
    // console.log(id)

    const projectsData = useSelector((state) => state.projects);

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(getProjects());
    }, [dispatch]);


    let projects = projectsData.filter((item) => item._id == id).map((item, index) => {
        return item;
    });

    const project = projects[0];

    // console.log('project', id, project);

    return (
        <>
            <CasualPage
                pageTitle={project?.name}
                bg={project?.imageFile}
                text={project?.category}
                title={project?.name}
                pageContent={
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