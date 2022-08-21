import express from 'express';
import uploads from "../utils/multer.js";
import { createMember, deleteMember, getMemberById, getMembers, updateMember } from '../controllers/members.js';

const router = express.Router();

router.get('/', getMembers);
router.get('/:id', getMemberById);
router.post('/createMember', uploads.single('profileImage'), createMember);
router.patch('/updateMember/:id', uploads.single('profileImage'), updateMember);
router.delete('/deleteMember/:id', deleteMember);

export default router;