import express from 'express';
import uploads from "../utils/multer.js";
import { createSlider, deleteAllSliders, deleteSlider, getSliders, updateSlider } from '../controllers/slider.js';

const router = express.Router();

router.get('/', getSliders);
router.post('/createSlider', uploads.single('file'), createSlider);
router.patch('/updateSlider/:id', uploads.single('file'), updateSlider);
router.delete('/deleteSlider/:id', deleteSlider);
router.delete('/deleteAllSliders', deleteAllSliders);

export default router;