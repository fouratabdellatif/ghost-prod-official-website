import express from 'express';
import uploads from "../utils/multer.js";
import { createPage, deletePage, getPages, updatePage } from '../controllers/pages.js';

const router = express.Router();

router.get('/', getPages);
router.post('/createPage', uploads.single('image'), createPage);
router.patch('/updatePage/:id', uploads.single('image'), updatePage);
router.delete('/deletePage/:id', deletePage);

export default router;