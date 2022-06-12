import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }

    return req;
});

// export const addMember = (formData) => API.post("/rh/members/addMember", formData);
// export const signIn = (formData) => API.post("/members/signIn", formData);
// export const updateUserProfilePicture = (updatedUserProfilePicture) => API.patch("/profile/updateUserProfilePicture", updatedUserProfilePicture);
// export const updateUserProfileData = (updatedUserProfileData) => API.post("/profile/updateUserProfileData", updatedUserProfileData);
// export const updateUserPassword = (updatedUserPassword) => API.post("/profile/updateUserPassword", updatedUserPassword);
export const fetchProjects = () => API.get('/projects');
export const fetProjectById = (id) => API.get(`/projects/${id}`);
export const createProject = (newProject) => API.post('/projects/createProject', newProject);
export const updateProject = (id, updatedProject) => API.patch(`/projects/updateProject/${id}`, updatedProject);
export const deleteProject = (id) => API.delete(`/projects/deleteProject/${id}`);