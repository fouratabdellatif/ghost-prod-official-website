import mongoose from 'mongoose';

const artistSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    imageFile: { type: String },
    audioFile: [{ type: Object }],
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
            audioFile: String
        }
    ],
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

var artist = mongoose.model('artist', artistSchema);

export default artist;