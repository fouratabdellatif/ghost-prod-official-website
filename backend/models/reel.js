import mongoose from 'mongoose';

const reelSchema = mongoose.Schema({
    heading: { type: String },
    paragraphOne: { type: String },
    videoId: { type: String },
    image: { type: String },
    createdAt: { type: Date },
    reverse: { type: Boolean, default: false },
    delay: { type: Number, default: 100 },
    cloudinary_id: {
        type: String,
    }
})

var reel = mongoose.model('reel', reelSchema);

export default reel;