import express from "express";
import uploads from "../utils/multer.js";
import { updateUserProfileData, updateUserPassword, updateUserProfilePicture } from "../controllers/userProfile.js";
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/updateUserProfileData', verifyToken, updateUserProfileData);
router.patch('/updateUserProfilePicture/:id', uploads.single('profilePicture'), updateUserProfilePicture);
router.post('/updateUserPassword', verifyToken, updateUserPassword);


export default router;