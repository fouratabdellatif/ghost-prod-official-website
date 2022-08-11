import * as api from '../api/index.js';
import { CREATE, DELETE, FETCH_ALL_PAGES, UPDATE } from '../constants/actionTypes.js';
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

export const getPages = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPages();

        dispatch({ type: FETCH_ALL_PAGES, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createPage = (page) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('title', page.title);
        formData.append('pageTitle', page.pageTitle);
        formData.append('image', page.image);
        formData.append('text', page.text);
        formData.append('name', page.name);

        console.log('formdata from actions allllll: ', formData);
        const { data } = await api.createPage(formData);

        dispatch({ type: CREATE, payload: data });

        notifySuccess('Page créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const updatePage = (id, page) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('title', page.title);
        formData.append('pageTitle', page.pageTitle);
        formData.append('image', page.image);
        formData.append('text', page.text);
        formData.append('name', page.name);

        const { data } = await api.updatePage(id, formData);

        dispatch({ type: UPDATE, payload: data });

        notifySuccess('Page modifié');
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const deletePage = (id) => async (dispatch) => {
    try {
        await await api.deletePage(id);

        dispatch({ type: DELETE, payload: id });

        // notifySuccess('Réunion supprimée');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};