import axios from "axios";

const API = axios.create({ baseURL: "https://ghostprod.herokuapp.com" });
// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("profile")) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
//     }

//     return req;
// });

export const fetchProjects = () => API.get('/projects');
export const fetchProjectById = (id) => API.get(`/projects/${id}`);
export const fetchMembers = () => API.get('/members');
export const fetchMemberById = (id) => API.get(`/members/${id}`);
export const fetchPosts = () => API.get('/posts');
export const fetchPostById = (id) => API.get(`/posts/${id}`);
export const fetchLastPost = () => API.get('/posts/lastPost');
export const fetchPartners = () => API.get('/partners');
export const fetchPartnerById = (id) => API.get(`/partners/${id}`);
export const fetchServices = () => API.get('/services');
export const fetchServiceById = (id) => API.get(`/services/${id}`);
export const fetchWorkDMs = () => API.get('/reclamations/work');
export const fetchFeedbacks = () => API.get('/reclamations/feedback');
export const sendReclamation = (newReclamation) => API.post('/reclamations/sendReclamation', newReclamation);
export const fetchReclamationById = (id) => API.get(`/reclamations/${id}`);
export const fetchArtists = () => API.get('/artists');
export const fetchArtistById = (id) => API.get(`/artists/${id}`);
export const fetchJobRequests = () => API.get('/jobs');
export const sendJobRequest = (newJobRequest) => API.post('/jobs/sendJobRequest', newJobRequest);
export const fetchJobRequestById = (id) => API.get(`/jobs/${id}`);
export const fetchSliders = () => API.get('/sliders');
export const fetchReels = () => API.get('/reels');
export const fetchPages = () => API.get('/pages');