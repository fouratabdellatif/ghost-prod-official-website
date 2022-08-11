import { DELETE, CREATE, UPDATE, FETCH_POST, FETCH_ALL_POSTS } from "../constants/actionTypes";

export const PostReducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action.payload;
        case FETCH_POST:
            return { ...posts, post: action.payload.post };
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts?.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
};

export default PostReducer;