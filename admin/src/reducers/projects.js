import { DELETE, CREATE, UPDATE, FETCH_PROJECT, FETCH_ALL_PROJECTS } from "../constants/actionTypes";

export const ProjectReducer = (projects = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PROJECTS:
            return action.payload;
        case FETCH_PROJECT:
            return { ...projects, project: action.payload.project };
        case CREATE:
            return [...projects, action.payload];
        case UPDATE:
            return projects?.map((project) => (project._id === action.payload._id ? action.payload : project));
        case DELETE:
            return projects.filter((project) => project._id !== action.payload);
        default:
            return projects;
    }
};

export default ProjectReducer;