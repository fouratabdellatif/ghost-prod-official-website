import * as api from '../api/index.js';
import { CREATE, DELETE, FETCH_ALL_SERVICES, FETCH_SERVICE, UPDATE } from '../constants/actionTypes.js';
import { toast } from 'react-toastify';

const notifySuccess = (msg) => toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

const notifyError = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

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

export const createService = (service) => async (dispatch) => {
    try {

        const { data } = await api.createService(service);

        dispatch({ type: CREATE, payload: data });

        notifySuccess('Projet créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const updateService = (id, service) => async (dispatch) => {
    try {

        const { data } = await api.updateService(id, service);

        dispatch({ type: UPDATE, payload: data });

        notifySuccess('Projet modifié');
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const deleteService = (id) => async (dispatch) => {
    try {
        await await api.deleteService(id);

        dispatch({ type: DELETE, payload: id });

        // notifySuccess('Réunion supprimée');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};