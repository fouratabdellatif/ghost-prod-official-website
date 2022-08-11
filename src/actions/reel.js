import * as api from '../api/index.js';
import { FETCH_ALL_REELS } from '../constants/actionTypes.js';

export const getReels = () => async (dispatch) => {
    try {
        const { data } = await api.fetchReels();

        dispatch({ type: FETCH_ALL_REELS, payload: data });
    } catch (error) {
        console.log(error);
    }
};