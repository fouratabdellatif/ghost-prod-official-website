import express from 'express';
import mongoose from 'mongoose';
import generator from 'generate-password';

import Reclamation from '../models/reclamation.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getWorkDMs = async (req, res) => {
    try {
        const reclamations = await Reclamation.find({ category: 'work' }).sort({ createdAt: -1 });

        res.status(200).json(reclamations);
    } catch (error) {
        res.status(404).json({ reclamation: error.reclamation });
    }
}

export const getFeedbacks = async (req, res) => {
    try {
        const reclamations = await Reclamation.find({ category: 'feedback' }).sort({ createdAt: -1 });

        res.status(200).json(reclamations);
    } catch (error) {
        res.status(404).json({ reclamation: error.reclamation });
    }
}

export const getReclamationById = async (req, res) => {
    const { id } = req.params;

    try {
        const reclamation = await Reclamation.findById(id);

        res.status(200).json(reclamation);
    } catch (error) {
        res.status(404).json({ reclamation: error.reclamation });
    }
}

export const sendReclamation = async (req, res) => {
    const {
        category,
        name,
        phone,
        email,
        spec,
        text
    } = req.body;

    var nRec = generator.generate({
        length: 10,
        numbers: true,
        lowercase: false,
        uppercase: true
    });

    const newReclamation = new Reclamation({
        num: nRec,
        category,
        name,
        phone,
        email,
        spec,
        text
    })

    try {

        await newReclamation.save();

        res.status(201).json(newReclamation);
    } catch (error) {
        res.status(409).json({ reclamation: error.reclamation });
    }
}

export const manageFeedback = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No reclamation with id: ${id}`);

    const rec = await Reclamation.findById(id);

    const updatedReclamation = {
        visible: !rec.visible
    };

    await Reclamation.findByIdAndUpdate(id, updatedReclamation, { new: true });

    res.json(updatedReclamation);
}

export const deleteReclamation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No reclamation with id: ${id}`);

    await Reclamation.findByIdAndRemove(id);

    res.json({ reclamation: "Reclamation deleted successfully." });
}

export default router;