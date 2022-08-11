import express from 'express';
import multer from 'multer';
import { createReel, deleteReel, getReels, updateReel } from '../controllers/reel.js';

const dateNow = Date.now();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/static/uploads/'))
    },

    filename: (req, file, callback) => {
        callback(null, dateNow + file.originalname);
    }
})

const uploads = multer({ storage: storage })

const router = express.Router();

router.get('/', getReels);
router.post('/createReel', uploads.single('image'), createReel);
router.patch('/updateReel/:id', uploads.single('image'), updateReel);
router.delete('/deleteReel/:id', deleteReel);

export default router;