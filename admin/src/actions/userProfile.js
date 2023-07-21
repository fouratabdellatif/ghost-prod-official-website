import * as api from "../api/index.js";
import { AUTHERROR, UPDATE } from "../constants/actionTypes.js";
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

export const updateUserProfilePicture = (id, user) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('profilePicture', user.profilePicture);
        console.log("user", user);
        console.log("formData", formData);
        const { data } = await api.updateUserProfilePicture(id, formData);
        dispatch({ type: UPDATE, payload: data });

        window.location.reload();
    } catch (error) {
        console.log(error.message);
    }
};

export const updateUserProfileData = (user) => async (dispatch) => {
    try {
        const { data } = await api.updateUserProfileData(user);

        dispatch({ type: UPDATE, payload: data });

        notifySuccess('Compte mis à jour');

    } catch (error) {
        console.log(error.message);
        notifyError(error.message)
    }
};

export const updateUserPassword = (user) => async (dispatch) => {
    try {
        const { data } = await api.updateUserPassword(user);

        dispatch({ type: UPDATE, payload: data });

        dispatch(authError(""));
        notifySuccess('Mot de passe mis à jour');

    } catch (error) {
        dispatch(authError(error.response.data.message));
        notifyError(error.response.data.message)
        console.log(error.message);
    }
};

export const authError = (error) => async (dispatch) => {
    dispatch({
        type: AUTHERROR,
        payload: error,
    });
};