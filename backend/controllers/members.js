import express from 'express';
import mongoose from 'mongoose';
import cloudinary from '../utils/cloudinary.js';

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

    // console.log(profileImage);

    try {
        
        const result = await cloudinary.v2.uploader.upload(profileImage.path, { resource_type: "auto" });

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
            profileImage: result.secure_url,
            cloudinary_id: result.public_id,
            createdAt: new Date(),
        })

        await newMember.save();

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
    try {
        let member = await Member.findById(id);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(member.cloudinary_id);
        // Upload image to cloudinary
        let result;
        if (profileImage) {
            result = await cloudinary.uploader.upload(profileImage.path);
        }

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No member with id: ${id}`);

        const updatedMember = {
            firstname: firstname || member.firstname,
            lastname: lastname || member.lastname,
            spec: spec || member.spec,
            city: city || member.city,
            phone: phone || member.phone,
            email: email || member.email,
            bio: bio || member.bio,
            facebook: facebook || member.facebook,
            instagram: instagram || member.instagram,
            linkedin: linkedin || member.linkedin,
            behance: behance || member.behance,
            profileImage: result?.secure_url || member.profileImage,
            cloudinary_id: result?.public_id || member.cloudinary_id,
            _id: id
        };

        await Member.findByIdAndUpdate(id, updatedMember, { new: true });

        res.json(updatedMember);
    } catch (err) {
        console.log(err);
    }
}

export const deleteMember = async (req, res) => {
    const { id } = req.params;
    
    let member = await Member.findById(id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(member.cloudinary_id);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No member with id: ${id}`);

    await Member.findByIdAndRemove(id);

    res.json({ message: "Member deleted successfully." });
}

export default router;