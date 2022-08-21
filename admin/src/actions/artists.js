import * as api from '../api/index.js';
import { CREATE, DELETE, FETCH_ALL_ARTISTS, FETCH_ARTIST, UPDATE } from '../constants/actionTypes.js';
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

export const getArtists = () => async (dispatch) => {
    try {
        const { data } = await api.fetchArtists();

        dispatch({ type: FETCH_ALL_ARTISTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getArtistById = (id) => async (dispatch) => {
    try {
        //   dispatch({ type: START_LOADING });

        const { data } = await api.fetchArtistById(id);

        dispatch({ type: FETCH_ARTIST, payload: { artist: data } });
    } catch (error) {
        console.log(error);
    }
};

export const createArtist = (artist) => async (dispatch) => {
    try {

        console.log("artiiiiissssst", artist);
        const formData = new FormData();
        formData.append('firstname', artist.firstname);
        formData.append('lastname', artist.lastname);
        formData.append('city', artist.city);
        formData.append('phone', artist.phone);
        formData.append('email', artist.email);
        formData.append('bio', artist.bio);
        formData.append('facebook', artist.facebook);
        formData.append('instagram', artist.instagram);
        formData.append('linkedin', artist.linkedin);
        formData.append('imageFile', artist.imageFile);
        formData.append('musicSrc', artist.musicSrc);
        // for (var i = 0; i < artist.musicSrc.length; i++) {
        //     formData.append("musicSrc", artist.musicSrc[i]);
        //     formData.append(`musicSrc[${i}][name]`, artist.musicSrc[i].name);
        //     formData.append(`musicSrc[${i}][lastModified]`, artist.musicSrc[i].lastModified);
        //     formData.append(`musicSrc[${i}][lastModifiedDate]`, artist.musicSrc[i].lastModifiedDate);
        //     formData.append(`musicSrc[${i}][size]`, artist.musicSrc[i].size);
        //     formData.append(`musicSrc[${i}][type]`, artist.musicSrc[i].type);
        //     formData.append(`musicSrc[${i}][webkitRelativePath]`, artist.musicSrc[i].webkitRelativePath);
        //     console.log("element", artist.musicSrc[i]);
        // }

        console.log('formdata from actions allllll: ', formData);
        const { data } = await api.createArtist(formData);

        dispatch({ type: CREATE, payload: data });

        notifySuccess('Projet créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const updateArtist = (id, artist) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('firstname', artist.firstname);
        formData.append('lastname', artist.lastname);
        formData.append('city', artist.city);
        formData.append('phone', artist.phone);
        formData.append('email', artist.email);
        formData.append('bio', artist.bio);
        formData.append('facebook', artist.facebook);
        formData.append('instagram', artist.instagram);
        formData.append('linkedin', artist.linkedin);
        formData.append('imageFile', artist.imageFile);
        formData.append('musicSrc', artist.musicSrc);

        const { data } = await api.updateArtist(id, formData);

        dispatch({ type: UPDATE, payload: data });

        notifySuccess('Projet modifié');
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const deleteArtist = (id) => async (dispatch) => {
    try {
        await await api.deleteArtist(id);

        dispatch({ type: DELETE, payload: id });

        // notifySuccess('Réunion supprimée');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};