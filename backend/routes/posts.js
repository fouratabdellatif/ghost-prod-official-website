import express from 'express';
import uploads from "../utils/multer.js";
import { createPost, deletePost, getLastPost, getPostById, getPosts, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.get('/last', getLastPost);
router.post('/createPost', uploads.single('imageFile'), createPost);
router.patch('/updatePost/:id', uploads.single('imageFile'), updatePost);
router.delete('/deletePost/:id', deletePost);

export default router;