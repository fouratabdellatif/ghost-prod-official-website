import React, { useState } from 'react'
import '../../assets/css/ProjectsGroup.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getProjects } from '../../actions/projects';
import FilterButtons from './FilterButtons';
import ProjectsPageSection from './ProjectsPageSection';

const ProjectsGroup = () => {

    const projects = useSelector((state) => state.projects);

    const [data, setData] = useState(projects);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
        setData(projects);
    }, [dispatch, projects]);
    // const [filter, setFilter] = useState(false);

    const menuItems = [...new Set(projects.map((item) => item.category))];

    const filterData = (curcat) => {

        const newData = projects.filter((item) => {
            return item.category === curcat;
        });
        // setFilter(true);
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
                <div className='project-group-container'>
                    <ProjectsPageSection data={data} />
                    {/* {filter ? <ProjectsPageSection data={data} /> : <ProjectsPageSection data={projects} />} */}
                </div>
            </section>
        </>
    )
}

export default ProjectsGroup