import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
    category: { type: String },
    title: { type: String },
    message: { type: String },
    read: { type: Boolean, default: false },
    createdAt: { type: Date },
});

export default mongoose.model("Notification", notificationSchema);