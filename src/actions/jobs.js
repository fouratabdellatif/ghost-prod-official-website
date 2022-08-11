import * as api from '../api/index.js';
import { CREATE, FETCH_JOB_REQUESTS, FETCH_JOB_REQUEST } from '../constants/actionTypes.js';
// import { toast } from 'react-toastify';

// const notifySuccess = (msg) => toast.success(msg, {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
// });

// const notifyError = (msg) => toast.error(msg, {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
// });

export const getJobRequests = () => async (dispatch) => {
    try {
        const { data } = await api.fetchJobRequests();

        dispatch({ type: FETCH_JOB_REQUESTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getJobRequestById = (id) => async (dispatch) => {
    try {
        //   dispatch({ type: START_LOADING });

        const { data } = await api.fetchJobRequestById(id);

        dispatch({ type: FETCH_JOB_REQUEST, payload: { job: data } });
    } catch (error) {
        console.log(error);
    }
};

export const sendJobRequest = (job) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('name', job.name);
        formData.append('category', job.category);
        formData.append('phone', job.phone);
        formData.append('email', job.email);
        formData.append('text', job.text);
        formData.append('cv', job.cv);

        const { data } = await api.sendJobRequest(formData);

        dispatch({ type: CREATE, payload: data });

        // notifySuccess('Projet créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};