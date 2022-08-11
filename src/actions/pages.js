import * as api from '../api/index.js';
import { FETCH_ALL_PAGES } from '../constants/actionTypes.js';

export const getPages = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPages();

        dispatch({ type: FETCH_ALL_PAGES, payload: data });
    } catch (error) {
        console.log(error);
    }
};