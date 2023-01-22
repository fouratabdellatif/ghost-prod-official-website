import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    createdAt: { type: Date },
})

var category = mongoose.model('category', categorySchema);

export default category;