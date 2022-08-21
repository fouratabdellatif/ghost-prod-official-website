import express from 'express';
import uploads from "../utils/multer.js";
import { sendJobRequest, deleteJobRequest, getJobRequestById, getJobRequests } from '../controllers/jobs.js';

const router = express.Router();

router.get('/', getJobRequests);
router.get('/:id', getJobRequestById);
router.post('/sendJobRequest', uploads.single('cv'), sendJobRequest);
router.delete('/deleteJobRequest/:id', deleteJobRequest);

export default router;