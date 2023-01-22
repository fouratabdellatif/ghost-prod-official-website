import * as api from '../api/index.js';
import { CREATE, DELETE, FETCH_ALL_CATEGORIES, FETCH_CATEGORY, UPDATE } from '../constants/actionTypes.js';

export const getCategories = () => async (dispatch) => {
    try {

        const { data } = await api.fetchCategories();

        dispatch({ type: FETCH_ALL_CATEGORIES, payload: data });

    } catch (error) {
        console.log(error);
    }
};

export const getCategoryById = (id) => async (dispatch) => {
    try {

        const { data } = await api.fetchCategoryById(id);

        dispatch({ type: FETCH_CATEGORY, payload: { category: data } });

    } catch (error) {
        console.log(error);
    }
};

export const createCategory = (category) => async (dispatch) => {
    try {

        const { data } = await api.createCategory(category);

        dispatch({ type: CREATE, payload: data });

    } catch (error) {
        console.log(error);
    }
};

export const updateCategory = (id, category) => async (dispatch) => {
    try {

        const { data } = await api.updateCategory(id, category);

        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
};

export const deleteCategory = (id) => async (dispatch) => {
    try {
        await await api.deleteCategory(id);

        dispatch({ type: DELETE, payload: id });

    } catch (error) {
        console.log(error);
    }
};