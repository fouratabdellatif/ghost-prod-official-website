import express from 'express';
import mongoose from 'mongoose';
import generator from 'generate-password';

import Job from '../models/job.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getJobRequests = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });

        res.status(200).json(jobs);
    } catch (error) {
        res.status(404).json({ job: error.job });
    }
}

export const getJobRequestById = async (req, res) => {
    const { id } = req.params;

    try {
        const job = await Job.findById(id);

        res.status(200).json(job);
    } catch (error) {
        res.status(404).json({ job: error.job });
    }
}

export const sendJobRequest = async (req, res) => {
    const {
        category,
        name,
        phone,
        email,
        text
    } = req.body;

    const cv = req.file;

    var nReq = generator.generate({
        length: 10,
        numbers: true,
        lowercase: false,
        uppercase: true
    });

    const newJob = new Job({
        num: nReq,
        category,
        name,
        phone,
        email,
        text,
        cv: cv.filename
    })

    try {

        await newJob.save();

        res.status(201).json(newJob);
    } catch (error) {
        res.status(409).json({ job: error.job });
    }
}

export const deleteJobRequest = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No job with id: ${id}`);

    await Job.findByIdAndRemove(id);

    res.json({ job: "Job deleted successfully." });
}

export default router;