import express from 'express';
import multer from 'multer';
import { createPartner, deletePartner, getPartnerById, getPartners, updatePartner } from '../controllers/partners.js';

const dateNow = Date.now();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "C:/Github/ghost-prod-official-website/frontend/public/uploads")
    },

    filename: (req, file, callback) => {
        callback(null, dateNow + file.originalname);
    }
})

const uploads = multer({ storage: storage })

const router = express.Router();

router.get('/', getPartners);
router.get('/:id', getPartnerById);
router.post('/createPartner', uploads.single('imageFile'), createPartner);
router.patch('/updatePartner/:id', uploads.single('imageFile'), updatePartner);
router.delete('/deletePartner/:id', deletePartner);

export default router;