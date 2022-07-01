import { FETCH_RECLAMATION, FETCH_WORKDMS, FETCH_FEEDBACKS, DELETE, UPDATE } from "../constants/actionTypes";

export const ReclamationReducer = (reclamations = [], action) => {
    switch (action.type) {
        case FETCH_WORKDMS:
            return action.payload;
        case FETCH_FEEDBACKS:
            return action.payload;
        case FETCH_RECLAMATION:
            return { ...reclamations, reclamation: action.payload.reclamation };
        case UPDATE:
            return reclamations?.map((reclamation) => (reclamation._id === action.payload._id ? action.payload : reclamation));
        case DELETE:
            return reclamations.filter((reclamation) => reclamation._id !== action.payload);
        default:
            return reclamations;
    }
};

export default ReclamationReducer;