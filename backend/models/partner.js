import mongoose from 'mongoose';

const partnerSchema = mongoose.Schema({
    name: { type: String },
    link: { type: String },
    imageFile: { type: String },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var partner = mongoose.model('partner', partnerSchema);

export default partner;