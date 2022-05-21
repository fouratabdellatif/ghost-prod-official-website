import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    name: { type: String },
    category: { type: String },
    description: { type: String },
    image: { type: String },
    video: { type: String },
    videoId: { type: String },
    client: { type: String },
    clientLink: { type: String },
    partners: [
        {
            name: { type: String },
            partnerLink: { type: String },
        },
    ],
    videos: [
        {
            videoId: { type: String },
        },
    ],
})

var project = mongoose.model('project', projectSchema);

export default project;