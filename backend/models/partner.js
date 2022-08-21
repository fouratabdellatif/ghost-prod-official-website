import mongoose from 'mongoose';

const partnerSchema = mongoose.Schema({
    name: { type: String },
    link: { type: String },
    imageFile: { type: String },
    createdAt: { type: Date },
    cloudinary_id: {
        type: String,
    }
})

var partner = mongoose.model('partner', partnerSchema);

export default partner;