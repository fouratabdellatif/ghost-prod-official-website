import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
    title: { type: String },
    quote: { type: String },
    text: { type: String },
    steps: [{ type: String }],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var service = mongoose.model('service', serviceSchema);

export default service;