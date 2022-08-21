import express from 'express';
import uploads from "../utils/multer.js";
import { createReel, deleteReel, getReels, updateReel } from '../controllers/reel.js';

const router = express.Router();

router.get('/', getReels);
router.post('/createReel', uploads.single('image'), createReel);
router.patch('/updateReel/:id', uploads.single('image'), updateReel);
router.delete('/deleteReel/:id', deleteReel);

export default router;