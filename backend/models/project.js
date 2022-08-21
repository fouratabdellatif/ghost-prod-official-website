import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    name: { type: String },
    category: { type: String },
    description: { type: String },
    imageFile: { type: String },
    videoFile: { type: String },
    videoId: { type: String },
    client: { type: String },
    clientLink: { type: String },
    partners: [
        {
            name: String,
            partnerLink: String,
        },
    ],
    videos: [
        {
            videoId: String,
        },
    ],
    createdAt: { type: Date },
    cloudinary_img_id: {
        type: String,
    },
    cloudinary_vid_id: {
        type: String,
    }
})

var project = mongoose.model('project', projectSchema);

export default project;