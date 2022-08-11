import { DELETE, CREATE, UPDATE, FETCH_PARTNER, FETCH_ALL_PARTNERS } from "../constants/actionTypes";

export const PartnerReducer = (partners = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PARTNERS:
            return action.payload;
        case FETCH_PARTNER:
            return { ...partners, partner: action.payload.partner };
        case CREATE:
            return [...partners, action.payload];
        case UPDATE:
            return partners?.map((partner) => (partner._id === action.payload._id ? action.payload : partner));
        case DELETE:
            return partners.filter((partner) => partner._id !== action.payload);
        default:
            return partners;
    }
};

export default PartnerReducer;