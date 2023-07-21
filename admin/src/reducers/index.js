import { combineReducers } from "redux";

import auth from "./auth";
import projects from "./projects";
import members from "./members";
import posts from "./posts";
import partners from "./partners";
import services from "./services";
import categories from "./categories";
import artists from "./artists";
import reclamations from "./reclamations";
import jobs from "./jobs";
import sliders from "./slider";
import reels from "./reel";
import pages from "./pages";
import userProfile from "./userProfile";

export const reducers = combineReducers({
    auth,
    userProfile,
    projects,
    members,
    posts,
    partners,
    services,
    categories,
    reclamations,
    artists,
    jobs,
    sliders,
    reels,
    pages
});