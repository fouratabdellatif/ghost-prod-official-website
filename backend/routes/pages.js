import express from 'express';
import multer from 'multer';
import { createPage, deletePage, getPages, updatePage } from '../controllers/pages.js';

const dateNow = Date.now();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/static/uploads/'))
    },

    filename: (req, file, callback) => {
        callback(null, dateNow + file.originalname);
    }
})

const uploads = multer({ storage: storage })

const router = express.Router();

router.get('/', getPages);
router.post('/createPage', uploads.single('image'), createPage);
router.patch('/updatePage/:id', uploads.single('image'), updatePage);
router.delete('/deletePage/:id', deletePage);

export default router;