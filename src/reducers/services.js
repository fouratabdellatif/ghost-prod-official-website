import { DELETE, CREATE, UPDATE, FETCH_SERVICE, FETCH_ALL_SERVICES } from "../constants/actionTypes";

export const ServiceReducer = (services = [], action) => {
    switch (action.type) {
        case FETCH_ALL_SERVICES:
            return action.payload;
        case FETCH_SERVICE:
            return { ...services, service: action.payload.service };
        case CREATE:
            return [...services, action.payload];
        case UPDATE:
            return services?.map((service) => (service._id === action.payload._id ? action.payload : service));
        case DELETE:
            return services.filter((service) => service._id !== action.payload);
        default:
            return services;
    }
};

export default ServiceReducer;