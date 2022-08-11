import * as api from '../api/index.js';
import { FETCH_ALL_MEMBERS, FETCH_MEMBER } from '../constants/actionTypes.js';

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