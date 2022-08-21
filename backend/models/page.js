import mongoose from 'mongoose';

const pageSchema = mongoose.Schema({
    title: { type: String },
    pageTitle: { type: String },
    image: { type: String },
    text: { type: String },
    name: { type: String },
    createdAt: { type: Date },
    cloudinary_id: {
        type: String,
    }
})

var page = mongoose.model('page', pageSchema);

export default page;