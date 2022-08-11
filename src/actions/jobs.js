import * as api from '../api/index.js';
import { FETCH_JOB_REQUESTS, FETCH_JOB_REQUEST, DELETE } from '../constants/actionTypes.js';

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

        dispatch({ type: FETCH_JOB_REQUEST, payload: { reclamation: data } });
    } catch (error) {
        console.log(error);
    }
};

export const deleteJobRequest = (id) => async (dispatch) => {
    try {
        await await api.deleteJobRequest(id);

        dispatch({ type: DELETE, payload: id });

        // notifySuccess('Réunion supprimée');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};