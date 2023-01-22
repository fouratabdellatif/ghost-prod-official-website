import { FETCH_ALL_CATEGORIES, FETCH_CATEGORY } from "../constants/actionTypes";

export const CategoryReducer = (categories = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CATEGORIES:
            return action.payload;
        case FETCH_CATEGORY:
            return { ...categories, category: action.payload.category };
        default:
            return categories;
    }
};

export default CategoryReducer;