import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

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
        linkedin,
        musicSrc
    } = req.body;

    const imageFile = req.files['imageFile'];
    // console.log(imageFile[0])
    console.log(musicSrc)

    let audioLists = [];
    const len = Object.keys(musicSrc).length;

    for (let i = 0; i < len - 1; i++) {
        audioLists[i] = musicSrc[i];
        audioLists[i].singer = `${firstname} ${lastname}`;
        audioLists[i].coverImage = imageFile[0].filename;
        audioLists[i].musicSrc = musicSrc[i].name;
        // console.log(musicSrc[i]);
        // console.log('aaalooooo');
    }

    // console.log("audioLists", audioLists);

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
        imageFile: imageFile[0].filename,
        musicSrc: musicSrc,
    })

    try {

        await newArtist.save();

        fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${imageFile[0].filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${imageFile[0].filename}`, (err) => {
            if (err) throw err;
            console.log(`${imageFile[0].filename} was copied`);
        });

        // fs.copyFile(`C:/Github/ghost-prod-official-website/frontend/public/uploads/${musicSrc.filename}`, `C:/Github/ghost-prod-official-website/admin/public/uploads/${musicSrc.filename}`, (err) => {
        //     if (err) throw err;
        //     console.log(`${musicSrc.filename} was copied`);
        // });

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