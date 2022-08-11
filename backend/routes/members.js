import express from 'express';
import multer from 'multer';
import { createMember, deleteMember, getMemberById, getMembers, updateMember } from '../controllers/members.js';

const dateNow = Date.now();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "C:/Github/ghost-prod-official-website/backend/public/uploads")
    },

    filename: (req, file, callback) => {
        callback(null, dateNow + file.originalname);
    }
})

const uploads = multer({ storage: storage })

const router = express.Router();

router.get('/', getMembers);
router.get('/:id', getMemberById);
router.post('/createMember', uploads.single('profileImage'), createMember);
router.patch('/updateMember/:id', uploads.single('profileImage'), updateMember);
router.delete('/deleteMember/:id', deleteMember);

export default router;