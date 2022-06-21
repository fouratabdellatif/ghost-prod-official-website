import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
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