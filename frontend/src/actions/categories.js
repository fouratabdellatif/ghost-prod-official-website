import * as api from '../api/index.js';
import { FETCH_ALL_SERVICES, FETCH_SERVICE } from '../constants/actionTypes.js';

export const getCategories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCategories();

        dispatch({ type: FETCH_ALL_SERVICES, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getCategoryById = (id) => async (dispatch) => {
    try {
        //   dispatch({ type: START_LOADING });

        const { data } = await api.fetchCategoryById(id);

        dispatch({ type: FETCH_SERVICE, payload: { category: data } });
    } catch (error) {
        console.log(error);
    }
};