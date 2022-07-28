import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

import Member from '../models/member.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getMembers = async (req, res) => {
    try {
        const members = await Member.find().sort({ createdAt: -1 });

        res.status(200).json(members);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMemberById = async (req, res) => {
    const { id } = req.params;

    try {
        const member = await Member.findById(id);

        res.status(200).json(member);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createMember = async (req, res) => {
    const {
        firstname,
        lastname,
        spec,
        city,
        phone,
        email,
        bio,
        facebook,
        instagram,
        linkedin,
        behance
    } = req.body;

    const profileImage = req.file;

    console.log(profileImage);

    const newMember = new Member({
        firstname,
        lastname,
        spec,
        city,
        phone,
        email,
        bio,
        facebook,
        instagram,
        linkedin,
        behance,
        profileImage: profileImage.filename
    })

    try {

        await newMember.save();

        // fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${profileImage.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${profileImage.filename}`, (err) => {
        //     if (err) throw err;
        //     console.log(`${profileImage.filename} was copied`);
        // });

        res.status(201).json(newMember);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateMember = async (req, res) => {
    const { id } = req.params;
    const {
        firstname,
        lastname,
        spec,
        city,
        phone,
        email,
        bio,
        facebook,
        instagram,
        linkedin,
        behance
    } = req.body;

    const profileImage = req.file;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No member with id: ${id}`);

    const updatedMember = {
        firstname,
        lastname,
        spec,
        city,
        phone,
        email,
        bio,
        facebook,
        instagram,
        linkedin,
        behance,
        profileImage: profileImage.filename,
        _id: id
    };

    await Member.findByIdAndUpdate(id, updatedMember, { new: true });

    fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${profileImage.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${profileImage.filename}`, (err) => {
        if (err) throw err;
        console.log(`${profileImage.filename} was copied`);
    });

    res.json(updatedMember);
}

export const deleteMember = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No member with id: ${id}`);

    await Member.findByIdAndRemove(id);

    res.json({ message: "Member deleted successfully." });
}

export default router;