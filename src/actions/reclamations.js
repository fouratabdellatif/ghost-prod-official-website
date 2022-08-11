import * as api from '../api/index.js';
import { CREATE, FETCH_FEEDBACKS, FETCH_RECLAMATION } from '../constants/actionTypes.js';
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

export const getFeedbacks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFeedbacks();

        dispatch({ type: FETCH_FEEDBACKS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getReclamationById = (id) => async (dispatch) => {
    try {
        //   dispatch({ type: START_LOADING });

        const { data } = await api.fetchReclamationById(id);

        dispatch({ type: FETCH_RECLAMATION, payload: { reclamation: data } });
    } catch (error) {
        console.log(error);
    }
};

export const sendReclamation = (reclamation) => async (dispatch) => {
    try {

        const { data } = await api.sendReclamation(reclamation);

        dispatch({ type: CREATE, payload: data });

        // notifySuccess('Projet créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};