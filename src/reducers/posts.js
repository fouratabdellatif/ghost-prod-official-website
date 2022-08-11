import { FETCH_POST, FETCH_ALL_POSTS, FETCH_LAST_POST } from "../constants/actionTypes";

export const MemberReducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action.payload;
        case FETCH_POST:
            return { ...posts, post: action.payload.post };
        case FETCH_LAST_POST:
            return { ...posts, post: action.payload.post };
        default:
            return posts;
    }
};

export default MemberReducer;