import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

import Slider from '../models/slider.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getSliders = async (req, res) => {
    try {
        const sliders = await Slider.find().sort({ createdAt: 1 });

        res.status(200).json(sliders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSlider = async (req, res) => {
    const {
        title
    } = req.body;

    const imageFile = req.files['image'];
    const videoFile = req.files['video'];

    const newSlider = new Slider({
        title,
        image: imageFile[0].filename,
        video: videoFile[0].filename,
    })

    try {

        await newSlider.save();

        if (imageFile)
            fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${imageFile[0].filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${imageFile[0].filename}`, (err) => {
                if (err) throw err;
                console.log(`${imageFile[0].filename} was copied`);
            });

        if (videoFile)
            fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${videoFile[0].filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${videoFile[0].filename}`, (err) => {
                if (err) throw err;
                console.log(`${videoFile[0].filename} was copied`);
            });

        res.status(201).json(newSlider);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateSlider = async (req, res) => {
    const { id } = req.params;
    const {
        title
    } = req.body;

    const imageFile = req.files['image'];
    const videoFile = req.files['video'];

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No slider with id: ${id}`);

    const updatedSlider = {
        title,
        image: imageFile[0].filename,
        video: videoFile[0].filename,
        _id: id
    };

    await Slider.findByIdAndUpdate(id, updatedSlider, { new: true });

    if (imageFile)
        fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${imageFile[0].filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${imageFile[0].filename}`, (err) => {
            if (err) throw err;
            console.log(`${imageFile[0].filename} was copied`);
        });

    if (videoFile)
        fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${videoFile[0].filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${videoFile[0].filename}`, (err) => {
            if (err) throw err;
            console.log(`${videoFile[0].filename} was copied`);
        });

    res.json(updatedSlider);
}

export const deleteSlider = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No slider with id: ${id}`);

    await Slider.findByIdAndRemove(id);

    res.json({ message: "Slider deleted successfully." });
}

export default router;