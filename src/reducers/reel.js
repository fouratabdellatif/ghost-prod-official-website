import { FETCH_ALL_REELS } from "../constants/actionTypes";

export const ReelReducer = (reels = [], action) => {
    switch (action.type) {
        case FETCH_ALL_REELS:
            return action.payload;
        default:
            return reels;
    }
};

export default ReelReducer;