import { DELETE, CREATE, UPDATE, FETCH_ALL_PAGES } from "../constants/actionTypes";

export const PageReducer = (pages = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PAGES:
            return action.payload;
        case CREATE:
            return [...pages, action.payload];
        case UPDATE:
            return pages?.map((page) => (page._id === action.payload._id ? action.payload : page));
        case DELETE:
            return pages.filter((page) => page._id !== action.payload);
        default:
            return pages;
    }
};

export default PageReducer;