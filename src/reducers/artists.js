import { DELETE, CREATE, UPDATE, FETCH_ARTIST, FETCH_ALL_ARTISTS } from "../constants/actionTypes";

export const ArtistReducer = (artists = [], action) => {
    switch (action.type) {
        case FETCH_ALL_ARTISTS:
            return action.payload;
        case FETCH_ARTIST:
            return { ...artists, artist: action.payload.artist };
        case CREATE:
            return [...artists, action.payload];
        case UPDATE:
            return artists?.map((artist) => (artist._id === action.payload._id ? action.payload : artist));
        case DELETE:
            return artists.filter((artist) => artist._id !== action.payload);
        default:
            return artists;
    }
};

export default ArtistReducer;