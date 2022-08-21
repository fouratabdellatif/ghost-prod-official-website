import express from 'express';
import uploads from "../utils/multer.js";
import { createSlider, deleteAllSliders, deleteSlider, getSliders, updateSlider } from '../controllers/slider.js';

const router = express.Router();

router.get('/', getSliders);
router.post('/createSlider',
    uploads.fields([{
        name: 'image', maxCount: 1
    }, {
        name: 'video', maxCount: 1
    }]), createSlider);
router.patch('/updateSlider/:id',
    uploads.fields([{
        name: 'image', maxCount: 1
    }, {
        name: 'video', maxCount: 1
    }]), updateSlider);
router.delete('/deleteSlider/:id', deleteSlider);
router.delete('/deleteAllSliders', deleteAllSliders);

export default router;