import React from "react";
import ProjectCard from "../Cards/ProjectCard";

const ProjectsPageSection = ({ data }) => {
    return data.map((project, index) => {
        return (
            <ProjectCard
                item={project}
                key={index}
            />
        );
    })
};

export default ProjectsPageSection;