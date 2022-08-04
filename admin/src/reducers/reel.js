import { DELETE, CREATE, UPDATE, FETCH_ALL_REELS } from "../constants/actionTypes";

export const ReelReducer = (reels = [], action) => {
    switch (action.type) {
        case FETCH_ALL_REELS:
            return action.payload;
        case CREATE:
            return [...reels, action.payload];
        case UPDATE:
            return reels?.map((reel) => (reel._id === action.payload._id ? action.payload : reel));
        case DELETE:
            return reels.filter((reel) => reel._id !== action.payload);
        default:
            return reels;
    }
};

export default ReelReducer;