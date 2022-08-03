import * as api from '../api/index.js';
import { FETCH_ALL_SLIDERS } from '../constants/actionTypes.js';

export const getSliders = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSliders();

        dispatch({ type: FETCH_ALL_SLIDERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};