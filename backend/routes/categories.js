import express from 'express';
import { createCategory, deleteCategory, getCategoryById, getCategories, updateCategory } from '../controllers/categories.js';

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.post('/createCategory', createCategory);
router.patch('/updateCategory/:id', updateCategory);
router.delete('/deleteCategory/:id', deleteCategory);

export default router;