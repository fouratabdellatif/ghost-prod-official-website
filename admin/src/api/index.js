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
export const fetchProjectById = (id) => API.get(`/projects/${id}`);
export const createProject = (newProject, others) => API.post('/projects/createProject', newProject, others);
export const updateProject = (id, updatedProject) => API.patch(`/projects/updateProject/${id}`, updatedProject);
export const deleteProject = (id) => API.delete(`/projects/deleteProject/${id}`);


export const fetchMembers = () => API.get('/members');
export const fetchMemberById = (id) => API.get(`/members/${id}`);
export const createMember = (newMember, others) => API.post('/members/createMember', newMember, others);
export const updateMember = (id, updatedMember) => API.patch(`/members/updateMember/${id}`, updatedMember);
export const deleteMember = (id) => API.delete(`/members/deleteMember/${id}`);


export const fetchPosts = () => API.get('/posts');
export const fetchPostById = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost, others) => API.post('/posts/createPost', newPost, others);
export const updatePost = (id, updatedPost) => API.patch(`/posts/updatePost/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/deletePost/${id}`);


export const fetchPartners = () => API.get('/partners');
export const fetchPartnerById = (id) => API.get(`/partners/${id}`);
export const createPartner = (newPartner, others) => API.partner('/partners/createPartner', newPartner, others);
export const updatePartner = (id, updatedPartner) => API.patch(`/partners/updatePartner/${id}`, updatedPartner);
export const deletePartner = (id) => API.delete(`/partners/deletePartner/${id}`);