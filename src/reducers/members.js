import { DELETE, CREATE, UPDATE, FETCH_MEMBER, FETCH_ALL_MEMBERS } from "../constants/actionTypes";

export const MemberReducer = (members = [], action) => {
    switch (action.type) {
        case FETCH_ALL_MEMBERS:
            return action.payload;
        case FETCH_MEMBER:
            return { ...members, member: action.payload.member };
        case CREATE:
            return [...members, action.payload];
        case UPDATE:
            return members?.map((member) => (member._id === action.payload._id ? action.payload : member));
        case DELETE:
            return members.filter((member) => member._id !== action.payload);
        default:
            return members;
    }
};

export default MemberReducer;