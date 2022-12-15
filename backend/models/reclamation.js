import mongoose from 'mongoose';

const reclamationSchema = mongoose.Schema({
    num: { type: String },
    category: { type: String },
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    spec: { type: String },
    text: { type: String },
    visible: { type: Boolean, default: false },
    createdAt: { type: Date },
    cv: { type: String },
    cloudinary_id: {
        type: String,
    }
})

var reclamation = mongoose.model('reclamation', reclamationSchema);

export default reclamation;