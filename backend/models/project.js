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
})

var project = mongoose.model('project', projectSchema);

export default project;