import express from 'express';
import mongoose from 'mongoose';

import Project from '../models/project.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });

        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProjectById = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findById(id)
            .populate('partners',
                { _id: 1, name: 1, partnerLink: 1 }
            )
            .populate('videos',
                { _id: 1, videoId: 1 }
            )
            .exec();

        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProject = async (req, res) => {
    const {
        name,
        category,
        description,
        image,
        video,
        videoId,
        client,
        clientLink,
        partners,
        videos
    } = req.body;

    const newProject = new Project({
        name,
        category,
        description,
        image,
        video,
        videoId,
        client,
        clientLink,
        partners,
        videos
    })

    try {
        await newProject.save();

        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        category,
        description,
        image,
        video,
        videoId,
        client,
        clientLink,
        partners,
        videos
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

    const updatedProject = {
        name,
        category,
        description,
        image,
        video,
        videoId,
        client,
        clientLink,
        partners,
        videos,
        _id: id
    };

    await Project.findByIdAndUpdate(id, updatedProject, { new: true });

    res.json(updatedProject);
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

    await Project.findByIdAndRemove(id);

    res.json({ message: "Project deleted successfully." });
}

export default router;