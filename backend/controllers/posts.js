import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

import Post from '../models/post.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });

        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostById = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getLastPost = async (req, res) => {
    try {
        const post = await Post.find({}).limit(1).sort({ $natural: -1 })
        console.log(post);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const {
        category,
        text,
        content
    } = req.body;

    const imageFile = req.file;

    const newPost = new Post({
        category,
        text,
        content,
        imageFile: imageFile.filename
    })

    try {

        await newPost.save();

        fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${imageFile.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${imageFile.filename}`, (err) => {
            if (err) throw err;
            console.log(`${imageFile.filename} was copied`);
        });

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const {
        category,
        text,
        content
    } = req.body;

    const imageFile = req.file;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {
        category,
        text,
        content,
        imageFile: imageFile.filename,
        _id: id
    };

    await Post.findByIdAndUpdate(id, updatedPost, { new: true });

    fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${imageFile.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${imageFile.filename}`, (err) => {
        if (err) throw err;
        console.log(`${imageFile.filename} was copied`);
    });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Post.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;