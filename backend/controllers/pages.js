import express from 'express';
import mongoose from 'mongoose';
import cloudinary from '../utils/cloudinary.js';

import Page from '../models/page.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getPages = async (req, res) => {
    try {
        const pages = await Page.find().sort({ createdAt: 1 });

        res.status(200).json(pages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPage = async (req, res) => {
    const {
        title,
        pageTitle,
        text,
        name
    } = req.body;

    const image = req.file;

    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(image.path);

    const newPage = new Page({
        title,
        pageTitle,
        text,
        name,
        image: result.secure_url,
        cloudinary_id: result.public_id,
    });

    try {

        await newPage.save();

        res.status(201).json(newPage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePage = async (req, res) => {
    const { id } = req.params;
    const {
        title,
        pageTitle,
        text,
        name
    } = req.body;

    const image = req.file;
    try {
        let page = await Page.findById(id);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(page.cloudinary_id);
        // Upload image to cloudinary
        let result;
        if (image) {
            result = await cloudinary.uploader.upload(image.path);
        }

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No page with id: ${id}`);

        const updatedPage = {
            title: title || page.title,
            pageTitle: pageTitle || page.pageTitle,
            text: text || page.text,
            name: name || page.name,
            image: result?.secure_url || page.image,
            cloudinary_id: result?.public_id || page.cloudinary_id,
            _id: id
        };

        await Page.findByIdAndUpdate(id, updatedPage, { new: true });

        res.json(updatedPage);
    } catch (err) {
        console.log(err);
    }
}

export const deletePage = async (req, res) => {
    const { id } = req.params;

    let page = await Page.findById(id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(page.cloudinary_id);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No page with id: ${id}`);

    await Page.findByIdAndRemove(id);

    res.json({ message: "Page deleted successfully." });
}

export default router;