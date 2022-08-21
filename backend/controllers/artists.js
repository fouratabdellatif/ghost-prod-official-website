import express from 'express';
import mongoose from 'mongoose';
import cloudinary from '../utils/cloudinary.js';

import Artist from '../models/artist.js';
import "moment/locale/fr.js";

const router = express.Router();

export const getArtists = async (req, res) => {
    try {
        const artists = await Artist.find().sort({ createdAt: -1 });

        res.status(200).json(artists);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getArtistById = async (req, res) => {
    const { id } = req.params;

    try {
        const artist = await Artist.findById(id);

        res.status(200).json(artist);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createArtist = async (req, res) => {
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
        linkedin
    } = req.body;

    const imageFile = req.files['imageFile'];
    const musicSrc = req.files['musicSrc'];

    try {
        // Upload image to cloudinary
        const resultImage = await cloudinary.v2.uploader.upload(imageFile[0].path, { resource_type: "auto" });
        const resultAudio = await cloudinary.v2.uploader.upload(musicSrc[0].path, { resource_type: "auto" });

        let audioLists = [];
        audioLists.push(musicSrc[0])
        audioLists[0].name = musicSrc[0].originalname;
        audioLists[0].singer = `${firstname} ${lastname}`;
        audioLists[0].cover = resultImage.secure_url;
        audioLists[0].musicSrc = resultAudio.secure_url;
        // console.log(audioLists);
        // const len = Object.keys(musicSrc).length;

        // for (let i = 0; i < len - 1; i++) {
        //     audioLists.push(musicSrc[i]);
        //     audioLists[i].singer = `${firstname} ${lastname}`;
        //     audioLists[i].cover = resultImage.secure_url;
        //     audioLists[i].musicSrc = musicSrc[i].name;
        //     audioLists[i].path = musicSrc[i].path;
        //     req.files['musicSrc'][i].path = imageFile[0].path.substring(0, imageFile[0].path.length - 32);
        //     console.log(req.files['musicSrc'][i].path);
        //     const resultAudio = await cloudinary.v2.uploader.upload(req.files['musicSrc'][i].path, { resource_type: "auto" });
        //     audioLists[i].musicSrc = resultAudio.secure_url;
        //     console.log(musicSrc[i]);
        //     console.log('aaalooooo');
        // }

        const newArtist = new Artist({
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
            audioLists: audioLists,
            imageFile: resultImage.secure_url,
            musicSrc: resultAudio.secure_url,
            cloudinary_img_id: resultImage.public_id,
            cloudinary_aud_id: resultAudio.public_id,
            createdAt: new Date(),
        })

        await newArtist.save();

        res.status(201).json(newArtist);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateArtist = async (req, res) => {
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
        linkedin
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No artist with id: ${id}`);

    const updatedArtist = {
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
        _id: id
    };

    await Artist.findByIdAndUpdate(id, updatedArtist, { new: true });

    res.json(updatedArtist);
}

export const deleteArtist = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No artist with id: ${id}`);

    await Artist.findByIdAndRemove(id);

    res.json({ message: "Artist deleted successfully." });
}

export default router;