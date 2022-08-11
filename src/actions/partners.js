import * as api from '../api/index.js';
import { FETCH_ALL_PARTNERS, FETCH_PARTNER } from '../constants/actionTypes.js';

export const getPartners = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPartners();

        dispatch({ type: FETCH_ALL_PARTNERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getPartnerById = (id) => async (dispatch) => {
    try {

        const { data } = await api.fetchPartnerById(id);

        dispatch({ type: FETCH_PARTNER, payload: { partner: data } });
    } catch (error) {
        console.log(error);
    }
};