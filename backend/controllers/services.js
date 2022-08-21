import express from 'express';
import mongoose from 'mongoose';

import Service from '../models/service.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getServices = async (req, res) => {
    try {
        const services = await Service.find().sort({ createdAt: 1 });

        res.status(200).json(services);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getServiceById = async (req, res) => {
    const { id } = req.params;

    try {
        const service = await Service.findById(id);

        res.status(200).json(service);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createService = async (req, res) => {
    const {
        title,
        quote,
        text,
        steps
    } = req.body;

    const newService = new Service({
        title,
        quote,
        text,
        steps,
        createdAt: new Date(),
    })

    try {

        await newService.save();

        res.status(201).json(newService);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateService = async (req, res) => {
    const { id } = req.params;
    const {
        title,
        quote,
        text,
        steps
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No service with id: ${id}`);

    const updatedService = {
        title,
        quote,
        text,
        steps
    };

    await Service.findByIdAndUpdate(id, updatedService, { new: true });

    res.json(updatedService);
}

export const deleteService = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No service with id: ${id}`);

    await Service.findByIdAndRemove(id);

    res.json({ message: "Service deleted successfully." });
}

export default router;