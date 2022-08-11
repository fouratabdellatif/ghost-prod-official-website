import express from 'express';
import multer from 'multer';
import { createPost, deletePost, getLastPost, getPostById, getPosts, updatePost } from '../controllers/posts.js';

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

router.get('/', getPosts);
router.get('/:id', getPostById);
router.get('/last', getLastPost);
router.post('/createPost', uploads.single('imageFile'), createPost);
router.patch('/updatePost/:id', uploads.single('imageFile'), updatePost);
router.delete('/deletePost/:id', deletePost);

export default router;