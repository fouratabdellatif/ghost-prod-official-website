import { FETCH_JOB_REQUEST, FETCH_JOB_REQUESTS, CREATE } from "../constants/actionTypes";

export const JobReducer = (jobs = [], action) => {
    switch (action.type) {
        case FETCH_JOB_REQUESTS:
            return action.payload;
        case FETCH_JOB_REQUEST:
            return { ...jobs, job: action.payload.job };
        case CREATE:
            return [...jobs, action.payload];
        default:
            return jobs;
    }
};

export default JobReducer;