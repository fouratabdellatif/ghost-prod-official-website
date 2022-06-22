import { combineReducers } from "redux";

import auth from "./auth";
import projects from "./projects";
import members from "./members";
import posts from "./posts";
import partners from "./partners";
import services from "./services";

export const reducers = combineReducers({
    auth,
    projects,
    members,
    posts,
    partners,
    services
});