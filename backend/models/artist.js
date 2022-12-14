import mongoose from 'mongoose';

const artistSchema = mongoose.Schema({
    numRef: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    imageFile: { type: String },
    musicSrc: { type: String },
    city: { type: String },
    phone: { type: String },
    email: { type: String },
    bio: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    langs: [
        { type: String }
    ],
    audioLists: [
        {
            name: String,
            singer: String,
            cover: String,
            musicSrc: String
        }
    ],
    createdAt: { type: Date },
    cloudinary_img_id: {
        type: String,
    },
    cloudinary_aud_id: {
        type: String,
    }
})

var artist = mongoose.model('artist', artistSchema);

export default artist;