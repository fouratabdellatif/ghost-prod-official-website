import express from 'express';
import { createService, deleteService, getServiceById, getServices, updateService } from '../controllers/services.js';

const router = express.Router();

router.get('/', getServices);
router.get('/:id', getServiceById);
router.post('/createService', createService);
router.patch('/updateService/:id', updateService);
router.delete('/deleteService/:id', deleteService);

export default router;