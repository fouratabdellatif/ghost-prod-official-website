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

    // console.log("reqqqqq" , req.files['image']);

    const image = req.files['image'];
    const video = req.files['video'];

    // console.log(image);

    let newSlider = new Slider();

    if (image)
        newSlider = new Slider({
            title,
            image: image[0].filename
        });

    if (video)
        newSlider = new Slider({
            title,
            video: video[0].filename,
        });

    try {

        await newSlider.save();

        // if (image)
        //     fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${image.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${image.filename}`, (err) => {
        //         if (err) throw err;
        //         console.log(`${image.filename} was copied`);
        //     });

        // if (video)
        //     fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${video.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${video.filename}`, (err) => {
        //         if (err) throw err;
        //         console.log(`${video.filename} was copied`);
        //     });

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

    const image = req.files['image'];
    const video = req.files['video'];

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No slider with id: ${id}`);

    const updatedSlider = {
        title,
        image: image.filename,
        video: video.filename,
        _id: id
    };

    await Slider.findByIdAndUpdate(id, updatedSlider, { new: true });

    // if (image)
    //     fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${image[0].filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${image[0].filename}`, (err) => {
    //         if (err) throw err;
    //         console.log(`${image[0].filename} was copied`);
    //     });

    // if (video)
    //     fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${video[0].filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${video[0].filename}`, (err) => {
    //         if (err) throw err;
    //         console.log(`${video[0].filename} was copied`);
    //     });

    res.json(updatedSlider);
}

export const deleteSlider = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No slider with id: ${id}`);

    await Slider.findByIdAndRemove(id);

    res.json({ message: "Slider deleted successfully." });
}

export default router;