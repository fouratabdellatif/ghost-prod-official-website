import { FETCH_SERVICE, FETCH_ALL_SERVICES } from "../constants/actionTypes";

export const ServiceReducer = (services = [], action) => {
    switch (action.type) {
        case FETCH_ALL_SERVICES:
            return action.payload;
        case FETCH_SERVICE:
            return { ...services, service: action.payload.service };
        default:
            return services;
    }
};

export default ServiceReducer;