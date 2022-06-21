import * as api from '../api/index.js';
import { CREATE, DELETE, FETCH_ALL_MEMBERS, FETCH_MEMBER, UPDATE } from '../constants/actionTypes.js';
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

export const getMembers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMembers();

        dispatch({ type: FETCH_ALL_MEMBERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getMemberById = (id) => async (dispatch) => {
    try {
        //   dispatch({ type: START_LOADING });

        const { data } = await api.fetchMemberById(id);

        dispatch({ type: FETCH_MEMBER, payload: { member: data } });
    } catch (error) {
        console.log(error);
    }
};

export const createMember = (member) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('firstname', member.firstname);
        formData.append('lastname', member.lastname);
        formData.append('spec', member.spec);
        formData.append('city', member.city);
        formData.append('phone', member.phone);
        formData.append('email', member.email);
        formData.append('bio', member.bio);
        formData.append('facebook', member.facebook);
        formData.append('instagram', member.instagram);
        formData.append('linkedin', member.linkedin);
        formData.append('behance', member.behance);
        formData.append('profileImage', member.profileImage);

        const { data } = await api.createMember(formData);

        dispatch({ type: CREATE, payload: data });

        notifySuccess('Projet créé');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const updateMember = (id, member) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('firstname', member.firstname);
        formData.append('lastname', member.lastname);
        formData.append('spec', member.spec);
        formData.append('city', member.city);
        formData.append('phone', member.phone);
        formData.append('email', member.email);
        formData.append('bio', member.bio);
        formData.append('facebook', member.facebook);
        formData.append('instagram', member.instagram);
        formData.append('linkedin', member.linkedin);
        formData.append('behance', member.behance);
        formData.append('profileImage', member.profileImage);
        
        const { data } = await api.updateMember(id, formData);

        dispatch({ type: UPDATE, payload: data });

        notifySuccess('Projet modifié');
    } catch (error) {
        console.log(error);
        notifyError(error.message);
    }
};

export const deleteMember = (id) => async (dispatch) => {
    try {
        await await api.deleteMember(id);

        dispatch({ type: DELETE, payload: id });

        // notifySuccess('Réunion supprimée');
        // window.location.reload();
    } catch (error) {
        console.log(error);
        // notifyError(error.message);
    }
};