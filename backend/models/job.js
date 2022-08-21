import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    num: { type: String },
    category: { type: String },
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    cv: { type: String },
    text: { type: String },
    createdAt: { type: Date },
    cloudinary_id: {
        type: String,
    }
})

var job = mongoose.model('job', jobSchema);

export default job;