import express from 'express';
import mongoose from 'mongoose';
import cloudinary from '../utils/cloudinary.js';

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
    const result = await cloudinary.v2.uploader.upload(imageFile.path, { resource_type: "auto" });

    const newPost = new Post({
        category,
        text,
        content,
        imageFile: result.secure_url,
        cloudinary_id: result.public_id,
        createdAt: new Date(),
    })

    try {

        await newPost.save();

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
    try {
        let post = await Post.findById(id);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(post.cloudinary_id);
        // Upload image to cloudinary
        let result;
        if (imageFile) {
            result = await cloudinary.uploader.upload(imageFile.path);
        }

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        const updatedPost = {
            category: category || post.category,
            text: text || post.text,
            content: content || post.content,
            imageFile: result?.secure_url || post.imageFile,
            cloudinary_id: result?.public_id || post.cloudinary_id,
            _id: id
        };

        await Post.findByIdAndUpdate(id, updatedPost, { new: true });

        res.json(updatedPost);
    } catch (err) {
        console.log(err);
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    
    let post = await Post.findById(id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(post.cloudinary_id);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Post.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;