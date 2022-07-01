import mongoose from 'mongoose';
import generator from 'generate-password';

var nRec = generator.generate({
    length: 10,
    numbers: true,
    lowercase: false,
    uppercase: true
});

const reclamationSchema = mongoose.Schema({
    num: { type: String, default: nRec },
    category: { type: String },
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    spec: { type: String },
    text: { type: String },
    visible: { type: Boolean, default: false },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var reclamation = mongoose.model('reclamation', reclamationSchema);

export default reclamation;