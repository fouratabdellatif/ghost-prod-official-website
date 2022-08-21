import mongoose from 'mongoose';

const sliderSchema = mongoose.Schema({
    title: { type: String },
    image: { type: String },
    video: { type: String },
    createdAt: { type: Date },
    cloudinary_id: {
        type: String,
    }
})

var slider = mongoose.model('slider', sliderSchema);

export default slider;