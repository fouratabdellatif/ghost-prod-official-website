import { FETCH_MEMBER, FETCH_ALL_MEMBERS } from "../constants/actionTypes";

export const MemberReducer = (members = [], action) => {
    switch (action.type) {
        case FETCH_ALL_MEMBERS:
            return action.payload;
        case FETCH_MEMBER:
            return { ...members, member: action.payload.member };
        default:
            return members;
    }
};

export default MemberReducer;