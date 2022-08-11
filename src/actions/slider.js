import * as api from '../api/index.js';
import { CREATE, DELETE, FETCH_ALL_SLIDERS, UPDATE } from '../constants/actionTypes.js';
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

export const getSliders = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSliders();

        dispatch({ type: FETCH_ALL_SLIDERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createSlider = (slider) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('title', slider.title);
        formData.append('image', slider.image);
        formData.append('video', slider.video);

        console.log('formdata from actions allllll: ', formData);
        const { data } = await api.createSlider(formData);

        dispatch({ type: CREATE, payload: data });

        notifySuccess('Slider créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const updateSlider = (id, slider) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('title', slider.title);
        formData.append('image', slider.image);
        formData.append('video', slider.video);

        const { data } = await api.updateSlider(id, formData);

        dispatch({ type: UPDATE, payload: data });

        notifySuccess('Slider modifié');
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const deleteSlider = (id) => async (dispatch) => {
    try {
        await await api.deleteSlider(id);

        dispatch({ type: DELETE, payload: id });

        // notifySuccess('Réunion supprimée');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};