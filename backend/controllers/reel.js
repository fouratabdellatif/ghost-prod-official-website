import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

import Reel from '../models/reel.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getReels = async (req, res) => {
    try {
        const reels = await Reel.find().sort({ createdAt: 1 });

        res.status(200).json(reels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createReel = async (req, res) => {
    const {
        heading,
        paragraphOne,
        videoId,
    } = req.body;

    const image = req.file;

    const newReel = new Reel({
        heading,
        paragraphOne,
        videoId,
        image: image.filename
    });

    try {

        await newReel.save();

        // if (image)
        //     fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${image.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${image.filename}`, (err) => {
        //         if (err) throw err;
        //         console.log(`${image.filename} was copied`);
        //     });

        res.status(201).json(newReel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateReel = async (req, res) => {
    const { id } = req.params;
    const {
        heading,
        paragraphOne,
        videoId
    } = req.body;

    const image = req.file;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No reel with id: ${id}`);

    const updatedReel = {
        heading,
        paragraphOne,
        videoId,
        image: image.filename,
        _id: id
    };

    await Reel.findByIdAndUpdate(id, updatedReel, { new: true });

    // if (image)
    //     fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${image.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${image.filename}`, (err) => {
    //         if (err) throw err;
    //         console.log(`${image.filename} was copied`);
    //     });

    res.json(updatedReel);
}

export const deleteReel = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No reel with id: ${id}`);

    await Reel.findByIdAndRemove(id);

    res.json({ message: "Reel deleted successfully." });
}

export default router;