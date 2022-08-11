import { FETCH_ALL_SLIDERS } from "../constants/actionTypes";

export const SliderReducer = (sliders = [], action) => {
    switch (action.type) {
        case FETCH_ALL_SLIDERS:
            return action.payload;
        default:
            return sliders;
    }
};

export default SliderReducer;