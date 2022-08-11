import * as api from '../api/index.js';
import { FETCH_ALL_SERVICES, FETCH_SERVICE } from '../constants/actionTypes.js';

export const getServices = () => async (dispatch) => {
    try {
        const { data } = await api.fetchServices();

        dispatch({ type: FETCH_ALL_SERVICES, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getServiceById = (id) => async (dispatch) => {
    try {
        //   dispatch({ type: START_LOADING });

        const { data } = await api.fetchServiceById(id);

        dispatch({ type: FETCH_SERVICE, payload: { service: data } });
    } catch (error) {
        console.log(error);
    }
};