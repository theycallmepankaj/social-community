// models/idea.model.js
import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  commentsCount: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }] // ✅ add this
}, { timestamps: true });

export default mongoose.model("Idea", ideaSchema);
