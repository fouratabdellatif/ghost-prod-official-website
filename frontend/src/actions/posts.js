import * as api from '../api/index.js';
import { FETCH_ALL_POSTS, FETCH_POST, FETCH_LAST_POST } from '../constants/actionTypes.js';

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

        const { data } = await api.fetchPostById(id);

        dispatch({ type: FETCH_POST, payload: { post: data } });
    } catch (error) {
        console.log(error);
    }
};

export const getLastPost = () => async (dispatch) => {
    try {

        const { data } = await api.fetchLastPost();

        dispatch({ type: FETCH_LAST_POST, payload: { post: data } });
    } catch (error) {
        console.log(error);
    }
};