import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

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

    const newPage = new Page({
        title,
        pageTitle,
        text,
        name,
        image: image.filename
    });

    try {

        await newPage.save();

        // if (image)
        //     fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${image.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${image.filename}`, (err) => {
        //         if (err) throw err;
        //         console.log(`${image.filename} was copied`);
        //     });

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

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No page with id: ${id}`);

    const updatedPage = {
        title,
        pageTitle,
        text,
        name,
        image: image.filename,
        _id: id
    };

    await Page.findByIdAndUpdate(id, updatedPage, { new: true });

    // if (image)
    //     fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${image.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${image.filename}`, (err) => {
    //         if (err) throw err;
    //         console.log(`${image.filename} was copied`);
    //     });

    res.json(updatedPage);
}

export const deletePage = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No page with id: ${id}`);

    await Page.findByIdAndRemove(id);

    res.json({ message: "Page deleted successfully." });
}

export default router;