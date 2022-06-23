import * as api from '../api/index.js';
import { FETCH_ALL_ARTISTS, FETCH_ARTIST } from '../constants/actionTypes.js';

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