import { FETCH_PROJECT, FETCH_ALL_PROJECTS } from "../constants/actionTypes";

export const ProjectReducer = (projects = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PROJECTS:
            return action.payload;
        case FETCH_PROJECT:
            return { ...projects, project: action.payload.project };
        default:
            return projects;
    }
};

export default ProjectReducer;