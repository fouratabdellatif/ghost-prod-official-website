import mongoose from "mongoose";
import { ROLES } from "./role.js";

const userSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  name: { type: String },
  username: { type: String },
  profilePicture: { type: String },
  password: { type: String },
  role: [
    {
      type: String,
      required: true,
      enum: ROLES,
    },
  ],
  cloudinary_id: {
      type: String,
  }
  // socketId: { type: String },
  // notification: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Notification",
  //   },
  // ],
});

export default mongoose.model("User", userSchema);
