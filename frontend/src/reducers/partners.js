import { FETCH_PARTNER, FETCH_ALL_PARTNERS } from "../constants/actionTypes";

export const MemberReducer = (partners = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PARTNERS:
            return action.payload;
        case FETCH_PARTNER:
            return { ...partners, partner: action.payload.partner };
        default:
            return partners;
    }
};

export default MemberReducer;