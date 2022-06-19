import * as api from '../api/index.js';
import { FETCH_ALL_PROJECTS, FETCH_PROJECT } from '../constants/actionTypes.js';

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

        const { data } = await api.fetProjectById(id);

        dispatch({ type: FETCH_PROJECT, payload: { project: data } });
    } catch (error) {
        console.log(error);
    }
};