import express from 'express';
import mongoose from 'mongoose';
import cloudinary from '../utils/cloudinary.js';

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
    const result = await cloudinary.v2.uploader.upload(image.path, { resource_type: "auto" });

    const newReel = new Reel({
        heading,
        paragraphOne,
        videoId,
        image: result.secure_url,
        cloudinary_id: result.public_id,
        createdAt: new Date(),
    });

    try {

        await newReel.save();

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
    try {
        let reel = await Reel.findById(id);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(reel.cloudinary_id);
        // Upload image to cloudinary
        let result;
        if (image) {
            result = await cloudinary.uploader.upload(image.path);
        }

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No reel with id: ${id}`);

        const updatedReel = {
            heading: heading || reel.heading,
            paragraphOne: paragraphOne || reel.paragraphOne,
            videoId: videoId || reel.videoId,
            image: result?.secure_url || reel.image,
            cloudinary_id: result?.public_id || reel.cloudinary_id,
            _id: id
        };

        await Reel.findByIdAndUpdate(id, updatedReel, { new: true });

        res.json(updatedReel);
    } catch (err) {
        console.log(err);
    }
}

export const deleteReel = async (req, res) => {
    const { id } = req.params;
    
    let reel = await Reel.findById(id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(reel.cloudinary_id);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No reel with id: ${id}`);

    await Reel.findByIdAndRemove(id);

    res.json({ message: "Reel deleted successfully." });
}

export default router;