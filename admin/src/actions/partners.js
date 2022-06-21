import * as api from '../api/index.js';
import { CREATE, DELETE, FETCH_ALL_PARTNERS, FETCH_PARTNER, UPDATE } from '../constants/actionTypes.js';
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
        //   dispatch({ type: START_LOADING });

        const { data } = await api.fetchPartnerById(id);

        dispatch({ type: FETCH_PARTNER, payload: { partner: data } });
    } catch (error) {
        console.log(error);
    }
};

export const createPartner = (partner) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('name', partner.name);
        formData.append('link', partner.link);
        formData.append('imageFile', partner.imageFile);

        const { data } = await api.createPartner(formData);

        dispatch({ type: CREATE, payload: data });

        notifySuccess('Projet créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const updatePartner = (id, partner) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('name', partner.name);
        formData.append('link', partner.link);
        formData.append('imageFile', partner.imageFile);

        const { data } = await api.updatePartner(id, formData);

        dispatch({ type: UPDATE, payload: data });

        notifySuccess('Projet modifié');
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const deletePartner = (id) => async (dispatch) => {
    try {
        await await api.deletePartner(id);

        dispatch({ type: DELETE, payload: id });
        
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};