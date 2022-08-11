import mongoose from 'mongoose';

const reelSchema = mongoose.Schema({
    heading: { type: String },
    paragraphOne: { type: String },
    videoId: { type: String },
    image: { type: String },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    reverse: { type: Boolean, default: false },
    delay: { type: Number, default: 100 },
})

var reel = mongoose.model('reel', reelSchema);

export default reel;