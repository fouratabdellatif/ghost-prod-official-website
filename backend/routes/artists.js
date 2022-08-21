import express from 'express';
import uploads from "../utils/multer.js";
import { createArtist, deleteArtist, getArtistById, getArtists, updateArtist } from '../controllers/artists.js';

const router = express.Router();

router.get('/', getArtists);
router.get('/:id', getArtistById);
router.post('/createArtist',
    uploads.fields([{
        name: 'imageFile', maxCount: 1
    }, {
        name: 'musicSrc', maxCount: 10
    }]), createArtist);
router.patch('/updateArtist/:id',
    uploads.fields([{
        name: 'imageFile', maxCount: 1
    }, {
        name: 'musicSrc', maxCount: 10
    }]), updateArtist);
router.delete('/deleteArtist/:id', deleteArtist);

export default router;