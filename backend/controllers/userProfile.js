import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import cloudinary from '../utils/cloudinary.js';


export const updateUserProfilePicture = async (req, res) => {
    const { id } = req.params;
    
    console.log(id);
    const profilePicture = req.file;

    // console.log(profilePicture);

    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No User with id: ${id}`);

        let user = await User.findById(id);
        // Delete image from cloudinary
        if (user.cloudinary_id)
            await cloudinary.uploader.destroy(user.cloudinary_id);
        // Upload image to cloudinary
        let result;
        if (profilePicture) {
            result = await cloudinary.v2.uploader.upload(profilePicture.path, { resource_type: "auto" });
        }

        // result = await cloudinary.v2.uploader.upload(profilePicture.path, { resource_type: "auto" });
        const updatedUserProfilePicture = await User.findByIdAndUpdate(id,
            {
                profilePicture: result.secure_url,
                cloudinary_id: result.public_id
            }, { new: true });

        return res.status(200).json(updatedUserProfilePicture);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateUserProfileData = async (req, res) => {
    const id = req.userId;
    const { firstname, lastname, username } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No User with id: ${id}`);

    const updatedUserProfileData = {
        firstname,
        lastname,
        username,
        name: `${firstname} ${lastname}`,
        _id: id,
    };

    await User.findByIdAndUpdate(id, updatedUserProfileData, { new: true });

    res.json(updatedUserProfileData);
};

export const updateUserPassword = async (req, res) => {
    const id = req.userId;
    const { password, newPassword, confirmNewPassword } = req.body;

    // console.log(password, newPassword, confirmNewPassword)

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No User with id: ${id}`);

    const user = await User.findOne({ _id: id });

    const isPasswordPCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordPCorrect) {
        return res.status(500).json({ message: "Le mot de passe actuel est incorrect" });
    }

    if (newPassword != confirmNewPassword) {
        return res.status(500).json({ message: "Les mots de passe ne correspondent pas" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    const updatedUserPassword = {
        password: hashedPassword,
        _id: id,
    };

    await User.findByIdAndUpdate(id, updatedUserPassword, { new: true });

    return res.status(200).json(updatedUserPassword);
};