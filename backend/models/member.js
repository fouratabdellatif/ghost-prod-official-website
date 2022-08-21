import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    spec: { type: String },
    city: { type: String },
    phone: { type: String },
    email: { type: String },
    bio: { type: String },
    profileImage: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    behance: { type: String },
    createdAt: { type: Date },
    cloudinary_id: {
        type: String,
    }
})

var member = mongoose.model('member', memberSchema);

export default member;