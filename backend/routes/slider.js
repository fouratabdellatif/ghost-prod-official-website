import express from 'express';
import multer from 'multer';
import { createSlider, deleteSlider, getSliders, updateSlider } from '../controllers/slider.js';

const dateNow = Date.now();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads")
    },

    filename: (req, file, callback) => {
        callback(null, dateNow + file.originalname);
    }
})

const uploads = multer({ storage: storage })

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

export default router;