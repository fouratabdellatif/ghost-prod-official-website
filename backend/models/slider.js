import mongoose from 'mongoose';

const sliderSchema = mongoose.Schema({
    title: { type: String },
    file: { type: String },
    createdAt: { type: Date },
    cloudinary_id: { type: String },
    resource_type: { type: String }
})

var slider = mongoose.model('slider', sliderSchema);

export default slider;