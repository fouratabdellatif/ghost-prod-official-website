import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

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

    const newPartner = new Partner({
        name,
        link,
        imageFile: imageFile.filename
    })

    try {

        await newPartner.save();

        // fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${imageFile.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${imageFile.filename}`, (err) => {
        //     if (err) throw err;
        //     console.log(`${imageFile.filename} was copied`);
        // });

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

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No partner with id: ${id}`);

    const updatedPartner = {
        name,
        link,
        imageFile: imageFile.filename,
        _id: id
    };

    await Partner.findByIdAndUpdate(id, updatedPartner, { new: true });

    // fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${imageFile.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${imageFile.filename}`, (err) => {
    //     if (err) throw err;
    //     console.log(`${imageFile.filename} was copied`);
    // });

    res.json(updatedPartner);
}

export const deletePartner = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No partner with id: ${id}`);

    await Partner.findByIdAndRemove(id);

    res.json({ message: "Partner deleted successfully." });
}

export default router;