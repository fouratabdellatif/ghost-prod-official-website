import express from 'express';
import multer from 'multer';
import { sendJobRequest, deleteJobRequest, getJobRequestById, getJobRequests } from '../controllers/jobs.js';

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

router.get('/', getJobRequests);
router.get('/:id', getJobRequestById);
router.post('/sendJobRequest', uploads.single('cv'), sendJobRequest);
router.delete('/deleteJobRequest/:id', deleteJobRequest);

export default router;