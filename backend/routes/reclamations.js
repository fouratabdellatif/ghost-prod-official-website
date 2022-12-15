import express from 'express';
import uploads from "../utils/multer.js";
import { sendReclamation, deleteReclamation, getReclamationById, getWorkDMs, getFeedbacks, manageFeedback, getDevis } from '../controllers/reclamations.js';

const router = express.Router();

router.get('/work', getWorkDMs);
router.get('/devis', getDevis);
router.get('/feedback', getFeedbacks);
router.get('/:id', getReclamationById);
router.post('/sendReclamation', uploads.single('cv'), sendReclamation);
router.patch('/manageFeedback/:id', manageFeedback);
router.delete('/deleteReclamation/:id', deleteReclamation);

export default router;