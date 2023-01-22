import * as api from '../api/index.js';
import { CREATE, DELETE, FETCH_ALL_PROJECTS, FETCH_PROJECT, UPDATE } from '../constants/actionTypes.js';
import { toast } from 'react-toastify';

const notifySuccess = (msg) => toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

const notifyError = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects();

        dispatch({ type: FETCH_ALL_PROJECTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getProjectById = (id) => async (dispatch) => {
    try {
        //   dispatch({ type: START_LOADING });

        const { data } = await api.fetchProjectById(id);

        dispatch({ type: FETCH_PROJECT, payload: { project: data } });
    } catch (error) {
        console.log(error);
    }
};

export const createProject = (project) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('name', project.name);
        formData.append('category', project.category);
        formData.append('description', project.description);
        formData.append('videoId', project.videoId);
        formData.append('client', project.client);
        formData.append('clientLink', project.clientLink);

        // for (var i = 0; i < project.partners.length; i++) {
        //     formData.append(`partners[${i}][name]`, project.partners[i].name);
        //     formData.append(`partners[${i}][partnerLink]`, project.partners[i].partnerLink);
        //     // console.log("element", project.partners[i]);
        // }

        for (var j = 0; j < project.videos.length; j++) {
            formData.append(`videos[${j}][videoId]`, project.videos[j].videoId);
            // console.log("element", project.videos[j]);
        }

        formData.append('imageFile', project.imageFile);
        formData.append('videoFile', project.videoFile);
        // console.log('formdata from actions img: ', project.imageFile);
        // console.log('formdata from actions vid: ', project.videoFile);
        // console.log('values from actions allllll: ', values);
        
        // console.log('formdata from actions allllll: ', formData);
        const { data } = await api.createProject(formData);

        dispatch({ type: CREATE, payload: data });

        notifySuccess('Projet créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const updateProject = (id, project) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('name', project.name);
        formData.append('category', project.category);
        formData.append('description', project.description);
        formData.append('videoId', project.videoId);
        formData.append('client', project.client);
        formData.append('clientLink', project.clientLink);

        for (var i = 0; i < project.partners.length; i++) {
            formData.append(`partners[${i}][name]`, project.partners[i].name);
            formData.append(`partners[${i}][partnerLink]`, project.partners[i].partnerLink);
            // console.log("element", project.partners[i]);
        }

        for (var j = 0; j < project.videos.length; j++) {
            formData.append(`videos[${j}][videoId]`, project.videos[j].videoId);
            // console.log("element", project.videos[j]);
        }

        formData.append('imageFile', project.imageFile);
        formData.append('videoFile', project.videoFile);

        const { data } = await api.updateProject(id, formData);

        dispatch({ type: UPDATE, payload: data });

        notifySuccess('Projet modifié');
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const deleteProject = (id) => async (dispatch) => {
    try {
        await await api.deleteProject(id);

        dispatch({ type: DELETE, payload: id });

        // notifySuccess('Réunion supprimée');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};