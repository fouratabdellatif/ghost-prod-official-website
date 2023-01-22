import React, { useState } from 'react'
import '../../assets/css/ProjectsGroup.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getProjects } from '../../actions/projects';
import FilterButtons from './FilterButtons';
import ProjectsPageSection from './ProjectsPageSection';
import { motion } from 'framer-motion';

const ProjectsGroup = () => {

    const projects = useSelector((state) => state.projects);

    const [data, setData] = useState(projects);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);
    const [filter, setFilter] = useState(false);

    const menuItems = [...new Set(projects.map((item) => item.category))];

    const filterData = (curcat) => {

        const newData = projects.filter((item) => {
            return item.category === curcat;
        });
        setFilter(true);
        setData(newData);
    };

    return (
        <>
            <FilterButtons
                filterData={filterData}
                setData={setData}
                menuItems={menuItems}
                data={projects}
            />
            <section className='project-section'>
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    layout
                    className='project-group-container'
                >
                    {/* <ProjectsPageSection data={data} /> */}
                    {filter ? <ProjectsPageSection data={data} /> : <ProjectsPageSection data={projects} />}
                </motion.div>
            </section>
        </>
    )
}

export default ProjectsGroup