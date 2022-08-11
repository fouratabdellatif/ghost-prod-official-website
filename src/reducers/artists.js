import { FETCH_ARTIST, FETCH_ALL_ARTISTS } from "../constants/actionTypes";

export const ArtistReducer = (artists = [], action) => {
    switch (action.type) {
        case FETCH_ALL_ARTISTS:
            return action.payload;
        case FETCH_ARTIST:
            return { ...artists, artist: action.payload.artist };
        default:
            return artists;
    }
};

export default ArtistReducer;