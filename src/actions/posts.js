import * as api from '../api/index.js';
import { CREATE, DELETE, FETCH_ALL_POSTS, FETCH_POST, UPDATE } from '../constants/actionTypes.js';
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

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL_POSTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getPostById = (id) => async (dispatch) => {
    try {
        //   dispatch({ type: START_LOADING });

        const { data } = await api.fetchPostById(id);

        dispatch({ type: FETCH_POST, payload: { post: data } });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('category', post.category);
        formData.append('text', post.text);
        formData.append('content', post.content);
        formData.append('imageFile', post.imageFile);

        const { data } = await api.createPost(formData);

        dispatch({ type: CREATE, payload: data });

        notifySuccess('Projet créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('category', post.category);
        formData.append('text', post.text);
        formData.append('content', post.content);
        formData.append('imageFile', post.imageFile);

        const { data } = await api.updatePost(id, formData);

        dispatch({ type: UPDATE, payload: data });

        notifySuccess('Projet modifié');
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
        
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};