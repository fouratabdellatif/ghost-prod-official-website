import { FETCH_RECLAMATION, FETCH_WORKDMS, CREATE, FETCH_FEEDBACKS } from "../constants/actionTypes";

export const ReclamationReducer = (reclamations = [], action) => {
    switch (action.type) {
        case FETCH_WORKDMS:
            return action.payload;
        case FETCH_FEEDBACKS:
            return action.payload;
        case FETCH_RECLAMATION:
            return { ...reclamations, reclamation: action.payload.reclamation };
        case CREATE:
            return [...reclamations, action.payload];
        default:
            return reclamations;
    }
};

export default ReclamationReducer;