import { DELETE, CREATE, UPDATE, FETCH_ALL_CATEGORIES, FETCH_CATEGORY } from "../constants/actionTypes";

export const CategoryReducer = (categories = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CATEGORIES:
            return action.payload;
        case FETCH_CATEGORY:
            return { ...categories, category: action.payload.category };
        case CREATE:
            return [...categories, action.payload];
        case UPDATE:
            return categories?.map((category) => (category._id === action.payload._id ? action.payload : category));
        case DELETE:
            return categories.filter((category) => category._id !== action.payload);
        default:
            return categories;
    }
};

export default CategoryReducer;