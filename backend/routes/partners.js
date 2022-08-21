import express from 'express';
import uploads from "../utils/multer.js";
import { createPartner, deletePartner, getPartnerById, getPartners, updatePartner } from '../controllers/partners.js';

const router = express.Router();

router.get('/', getPartners);
router.get('/:id', getPartnerById);
router.post('/createPartner', uploads.single('imageFile'), createPartner);
router.patch('/updatePartner/:id', uploads.single('imageFile'), updatePartner);
router.delete('/deletePartner/:id', deletePartner);

export default router;