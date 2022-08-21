import * as api from '../api/index.js';
import { CREATE, DELETE, FETCH_ALL_REELS, UPDATE } from '../constants/actionTypes.js';
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

export const getReels = () => async (dispatch) => {
    try {
        const { data } = await api.fetchReels();

        dispatch({ type: FETCH_ALL_REELS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createReel = (reel) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('heading', reel.heading);
        formData.append('paragraphOne', reel.paragraphOne);
        formData.append('image', reel.image);
        formData.append('videoId', reel.videoId);

        // console.log('formdata from actions allllll: ', formData);
        const { data } = await api.createReel(formData);

        dispatch({ type: CREATE, payload: data });

        notifySuccess('Reel créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const updateReel = (id, reel) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('heading', reel.heading);
        formData.append('paragraphOne', reel.paragraphOne);
        formData.append('image', reel.image);
        formData.append('videoId', reel.videoId);

        const { data } = await api.updateReel(id, formData);

        dispatch({ type: UPDATE, payload: data });

        notifySuccess('Reel modifié');
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const deleteReel = (id) => async (dispatch) => {
    try {
        await await api.deleteReel(id);

        dispatch({ type: DELETE, payload: id });

        // notifySuccess('Réunion supprimée');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};