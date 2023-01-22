import express from 'express';
import mongoose from 'mongoose';

import Category from '../models/category.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });

        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findById(id);

        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCategory = async (req, res) => {
    const {
        name,
        description
    } = req.body;

    const newCategory = new Category({
        name,
        description,
        createdAt: new Date(),
    })

    try {

        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        description
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No category with id: ${id}`);

    const updatedCategory = {
        name,
        description
    };

    await Category.findByIdAndUpdate(id, updatedCategory, { new: true });

    res.json(updatedCategory);
}

export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No category with id: ${id}`);

    await Category.findByIdAndRemove(id);

    res.json({ message: "Category deleted successfully." });
}

export default router;