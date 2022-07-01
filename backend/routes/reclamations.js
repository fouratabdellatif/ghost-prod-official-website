import express from 'express';
import { sendReclamation, deleteReclamation, getReclamationById, getWorkDMs, getFeedbacks, manageFeedback } from '../controllers/reclamations.js';

const router = express.Router();

router.get('/work', getWorkDMs);
router.get('/feedback', getFeedbacks);
router.get('/:id', getReclamationById);
router.post('/sendReclamation', sendReclamation);
router.patch('/manageFeedback/:id', manageFeedback);
router.delete('/deleteReclamation/:id', deleteReclamation);

export default router;