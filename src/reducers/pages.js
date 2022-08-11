import { FETCH_ALL_PAGES } from "../constants/actionTypes";

export const PageReducer = (pages = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PAGES:
            return action.payload;
        default:
            return pages;
    }
};

export default PageReducer;