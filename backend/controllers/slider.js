import express from 'express';
import mongoose from 'mongoose';
import cloudinary from '../utils/cloudinary.js';

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

    // const image = req.files['image'];
    // const video = req.files['video'];

    const file = req.file;

    let newSlider = new Slider();

    if (file) {
        const result = await cloudinary.v2.uploader.upload(file.path, { resource_type: "auto" });
        newSlider = new Slider({
            title,
            file: result.secure_url,
            cloudinary_id: result.public_id,
            resource_type: result.resource_type,
            createdAt: new Date(),
        })
    }

    // if (image) {
    //     result = await cloudinary.v2.uploader.upload(image[0].path, { resource_type: "auto" });
    //     newSlider = new Slider({
    //         title,
    //         image: result.secure_url,
    //         cloudinary_id: result.public_id,
    //         resource_type: result.resource_type,
    //         createdAt: new Date(),
    //     });
    // }

    // if (video) {
    //     result = await cloudinary.v2.uploader.upload(video[0].path, { resource_type: "auto" });
    //     newSlider = new Slider({
    //         title,
    //         video: result.secure_url,
    //         cloudinary_id: result.public_id,
    //         resource_type: result.resource_type,
    //         createdAt: new Date(),
    //     });
    // }

    try {

        await newSlider.save();

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

    // const image = req.files['image'];
    // const video = req.files['video'];

    try {
        let slider = await Slider.findById(id);

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No slider with id: ${id}`);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(slider.cloudinary_id);
        // Upload image to cloudinary
        let result;

        let updatedSlider = {};

        if (file) {
            result = await cloudinary.v2.uploader.upload(file.path, { resource_type: "auto" });
            updatedSlider = {
                title: title || slider.title,
                file: result?.secure_url || slider.file,
                cloudinary_id: result?.public_id || slider.cloudinary_id,
                resource_type: result?.resource_type || slider.resource_type,
                _id: id
            };
        }

        // if (image) {
        //     result = await cloudinary.v2.uploader.upload(image[0].path, { resource_type: "auto" });
        //     updatedSlider = {
        //         title: title || slider.title,
        //         image: result?.secure_url || slider.image,
        //         cloudinary_id: result?.public_id || slider.cloudinary_id,
        //         _id: id
        //     };
        // }

        // if (video) {
        //     result = await cloudinary.v2.uploader.upload(video[0].path, { resource_type: "auto" });
        //     updatedSlider = {
        //         title: title || slider.title,
        //         video: result?.secure_url || slider.video,
        //         cloudinary_id: result?.public_id || slider.cloudinary_id,
        //         _id: id
        //     };
        // }

        await Slider.findByIdAndUpdate(id, updatedSlider, { new: true });

        res.json(updatedSlider);
    } catch (err) {
        console.log(err);
    }
}

export const deleteSlider = async (req, res) => {
    const { id } = req.params;

    let slider = await Slider.findById(id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(slider.cloudinary_id);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No slider with id: ${id}`);

    await Slider.findByIdAndRemove(id);

    res.json({ message: "Slider deleted successfully." });
}

export const deleteAllSliders = async (req, res) => {
    let sliders = await Slider.find();
    // Delete image from cloudinary

    for (let i = 0; i < sliders.length; i++)
        await cloudinary.uploader.destroy(sliders[i].cloudinary_id);

    await Slider.deleteMany();

    res.json({ message: "Sliders deleted successfully." });
}

export default router;