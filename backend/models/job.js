import mongoose from 'mongoose';
import generator from 'generate-password';

var nReq = generator.generate({
    length: 10,
    numbers: true,
    lowercase: false,
    uppercase: true
});

const jobSchema = mongoose.Schema({
    num: { type: String, default: nReq },
    category: { type: String },
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    cv: { type: String },
    text: { type: String },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var job = mongoose.model('job', jobSchema);

export default job;