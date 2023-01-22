import express from 'express';
import mongoose from 'mongoose';
import cloudinary from '../utils/cloudinary.js';

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
            .populate('category',
                { _id: 1, name: 1, description: 1 }
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
        videoId,
        client,
        clientLink,
        partners,
        videos
    } = req.body;

    const imageFile = req.files.imageFile[0];
    const videoFile = req.files.videoFile[0];

    const resultImg = await cloudinary.v2.uploader.upload(imageFile.path, { resource_type: "auto" });
    const resultVid = await cloudinary.v2.uploader.upload(videoFile.path, { resource_type: "auto" });

    // console.log("req.body", req.body)

    // console.log(imageFile, videoFile)

    const newProject = new Project({
        name,
        category,
        description,
        imageFile: resultImg.secure_url,
        cloudinary_img_id: resultImg.public_id,
        videoFile: resultVid.secure_url,
        cloudinary_vid_id: resultVid.public_id,
        videoId,
        client,
        clientLink,
        partners: partners,
        videos: videos,
        createdAt: new Date(),
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
        videoId,
        client,
        clientLink,
        partners,
        videos
    } = req.body;

    const imageFile = req.files.imageFile[0];
    const videoFile = req.files.videoFile[0];

    try {
        let project = await Project.findById(id);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(project.cloudinary_img_id);
        // Delete video from cloudinary
        await cloudinary.uploader.destroy(project.cloudinary_vid_id);
        // Upload image to cloudinary
        let resultImg;
        if (imageFile) {
            resultImg = await cloudinary.v2.uploader.upload(imageFile.path, { resource_type: "auto" });
        }
        // Upload video to cloudinary
        let resultVid;
        if (videoFile) {
            resultVid = await cloudinary.v2.uploader.upload(videoFile.path, { resource_type: "auto" });
        }

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

        const updatedProject = {
            name: name || project.name,
            category: category || project.category,
            description: description || project.description,
            imageFile: resultImg.secure_url,
            cloudinary_img_id: resultImg.public_id,
            videoFile: resultVid.secure_url,
            cloudinary_vid_id: resultVid.public_id,
            videoId: videoId || project.videoId,
            client: client || project.client,
            clientLink: clientLink || project.clientLink,
            partners: partners || project.partners,
            videos: videos || project.videos,
            _id: id
        };

        await Project.findByIdAndUpdate(id, updatedProject, { new: true });

        res.json(updatedProject);
    } catch (err) {
        console.log(err);
    }
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    let project = await Project.findById(id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(project.cloudinary_img_id);
    await cloudinary.uploader.destroy(project.cloudinary_vid_id);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

    await Project.findByIdAndRemove(id);

    res.json({ message: "Project deleted successfully." });
}

export default router;