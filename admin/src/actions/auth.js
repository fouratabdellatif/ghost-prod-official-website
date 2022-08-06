import { AUTH, AUTHERROR, CREATE } from "../constants/actionTypes";
import * as api from '../api/index.js';
import { useHistory } from "react-router-dom";

export const addUser = (user) => async (dispatch) => {

    try {

        const { data } = await api.addUser(user);

        dispatch({ type: CREATE, payload: data });

        useHistory().goBack();
    } catch (error) {
        console.log(error);
    }
};

export const signIn = (formData) => async (dispatch) => {
    try {

        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        window.location.reload();

        dispatch(authError(""));

    } catch (error) {
        dispatch(authError(error.response.data.message));
    }
};

export const authError = (error) => async (dispatch) => {
    dispatch({
        type: AUTHERROR,
        payload: error,
    });
};