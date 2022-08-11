import express from "express";
import { addUser, signIn } from "../controllers/authJwt.js";

const router = express.Router();

router.post("/addUser", addUser);
router.post("/signIn", signIn);

export default router;
