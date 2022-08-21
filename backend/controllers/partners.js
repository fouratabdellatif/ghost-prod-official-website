import express from 'express';
import mongoose from 'mongoose';
import cloudinary from '../utils/cloudinary.js';

import Partner from '../models/partner.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getPartners = async (req, res) => {
    try {
        const partners = await Partner.find().sort({ createdAt: -1 });

        res.status(200).json(partners);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPartnerById = async (req, res) => {
    const { id } = req.params;

    try {
        const partner = await Partner.findById(id);

        res.status(200).json(partner);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPartner = async (req, res) => {
    const {
        name,
        link
    } = req.body;

    const imageFile = req.file;
    const result = await cloudinary.v2.uploader.upload(imageFile.path, { resource_type: "auto" });

    const newPartner = new Partner({
        name,
        link,
        imageFile: result.secure_url,
        cloudinary_id: result.public_id,
        createdAt: new Date(),
    })

    try {

        await newPartner.save();

        res.status(201).json(newPartner);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePartner = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        link
    } = req.body;

    const imageFile = req.file;
    try {
        let partner = await Partner.findById(id);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(partner.cloudinary_id);
        // Upload image to cloudinary
        let result;
        if (imageFile) {
            result = await cloudinary.uploader.upload(imageFile.path);
        }

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No partner with id: ${id}`);

        const updatedPartner = {
            name: name || partner.name,
            link: link || partner.link,
            imageFile: result?.secure_url || partner.imageFile,
            cloudinary_id: result?.public_id || partner.cloudinary_id,
            _id: id
        };

        await Partner.findByIdAndUpdate(id, updatedPartner, { new: true });

        res.json(updatedPartner);
    } catch (err) {
        console.log(err);
    }
}

export const deletePartner = async (req, res) => {
    const { id } = req.params;
    
    let partner = await Partner.findById(id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(partner.cloudinary_id);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No partner with id: ${id}`);

    await Partner.findByIdAndRemove(id);

    res.json({ message: "Partner deleted successfully." });
}

export default router;