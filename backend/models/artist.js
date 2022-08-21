import mongoose from 'mongoose';

const artistSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    imageFile: { type: String },
    musicSrc: [{ type: Object }],
    city: { type: String },
    phone: { type: String },
    email: { type: String },
    bio: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    audioLists: [
        {
            name: String,
            singer: String,
            coverImage: String,
            musicSrc: String,
            path: String
        }
    ],
    createdAt: { type: Date },
    cloudinary_id: {
        type: String,
    }
})

var artist = mongoose.model('artist', artistSchema);

export default artist;