import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    category: { type: String },
    text: { type: String },
    content: [{ type: String }],
    imageFile: { type: String },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var post = mongoose.model('post', postSchema);

export default post;