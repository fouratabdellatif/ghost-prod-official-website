import * as api from '../api/index.js';
import { FETCH_WORKDMS, FETCH_FEEDBACKS, FETCH_RECLAMATION, UPDATE, DELETE } from '../constants/actionTypes.js';

export const getWorkDMs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchWorkDMs();

        dispatch({ type: FETCH_WORKDMS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

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

export const manageFeedback = (id) => async (dispatch) => {
    try {

        const { data } = await api.manageFeedback(id);

        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
};

export const deleteReclamation = (id) => async (dispatch) => {
    try {
        await await api.deleteReclamation(id);

        dispatch({ type: DELETE, payload: id });

        // notifySuccess('Réunion supprimée');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};