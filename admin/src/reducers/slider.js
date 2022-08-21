import { DELETE, CREATE, UPDATE, FETCH_ALL_SLIDERS, DELETE_ALL } from "../constants/actionTypes";

export const SliderReducer = (sliders = [], action) => {
    switch (action.type) {
        case FETCH_ALL_SLIDERS:
            return action.payload;
        case CREATE:
            return [...sliders, action.payload];
        case UPDATE:
            return sliders?.map((slider) => (slider._id === action.payload._id ? action.payload : slider));
        case DELETE:
            return sliders.filter((slider) => slider._id !== action.payload);
        case DELETE_ALL:
            return [...sliders, action.payload];
        default:
            return sliders;
    }
};

export default SliderReducer;