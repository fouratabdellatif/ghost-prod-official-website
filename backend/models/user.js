import mongoose from "mongoose";
import { ROLES } from "./role.js";

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  name: { type: String },
  email: { type: String },
  profilePicture: { type: String },
  password: { type: String },
  role: [
    {
      type: String,
      required: true,
      enum: ROLES,
    },
  ],
  socketId: { type: String },
  notification: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notification",
    },
  ],
});

export default mongoose.model("User", userSchema);
