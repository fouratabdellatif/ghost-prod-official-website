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
export const createProject = (newProject) => API.post('/projects/createProject', newProject);
export const updateProject = (id, updatedProject) => API.patch(`/projects/updateProject/${id}`, updatedProject);
export const deleteProject = (id) => API.delete(`/projects/deleteProject/${id}`);


export const fetchMembers = () => API.get('/members');
export const fetchMemberById = (id) => API.get(`/members/${id}`);
export const createMember = (newMember) => API.post('/members/createMember', newMember);
export const updateMember = (id, updatedMember) => API.patch(`/members/updateMember/${id}`, updatedMember);
export const deleteMember = (id) => API.delete(`/members/deleteMember/${id}`);


export const fetchPosts = () => API.get('/posts');
export const fetchPostById = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post('/posts/createPost', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/updatePost/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/deletePost/${id}`);


export const fetchPartners = () => API.get('/partners');
export const fetchPartnerById = (id) => API.get(`/partners/${id}`);
export const createPartner = (newPartner) => API.post('/partners/createPartner', newPartner);
export const updatePartner = (id, updatedPartner) => API.patch(`/partners/updatePartner/${id}`, updatedPartner);
export const deletePartner = (id) => API.delete(`/partners/deletePartner/${id}`);


export const fetchServices = () => API.get('/services');
export const fetchServiceById = (id) => API.get(`/services/${id}`);
export const createService = (newService) => API.post('/services/createService', newService);
export const updateService = (id, updatedService) => API.patch(`/services/updateService/${id}`, updatedService);
export const deleteService = (id) => API.delete(`/services/deleteService/${id}`);


export const fetchWorkDMs = () => API.get('/reclamations/work');
export const fetchFeedbacks = () => API.get('/reclamations/feedback');
export const fetchReclamationById = (id) => API.get(`/reclamations/${id}`);
export const manageFeedback = (id) => API.patch(`/reclamations/manageFeedback/${id}`);
export const deleteReclamation = (id) => API.delete(`/reclamations/deleteReclamation/${id}`);


export const fetchArtists = () => API.get('/artists');
export const fetchArtistById = (id) => API.get(`/artists/${id}`);
export const createArtist = (newArtist) => API.post('/artists/createArtist', newArtist);
export const updateArtist = (id, updatedArtist) => API.patch(`/artists/updateArtist/${id}`, updatedArtist);
export const deleteArtist = (id) => API.delete(`/artists/deleteArtist/${id}`);


export const fetchJobRequests = () => API.get('/jobs');
export const fetchJobRequestById = (id) => API.get(`/jobs/${id}`);
export const deleteJobRequest = (id) => API.delete(`/jobs/deleteJobRequest/${id}`);