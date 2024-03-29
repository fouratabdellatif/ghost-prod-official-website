import express from 'express';
import multer from 'multer';
import { createArtist, deleteArtist, getArtistById, getArtists, updateArtist } from '../controllers/artists.js';

const dateNow = Date.now();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/static/uploads/'))
    },

    filename: (req, file, callback) => {
        console.log("req", req);
        callback(null, dateNow + file.originalname);
    }
})

const uploads = multer({ storage: storage })

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