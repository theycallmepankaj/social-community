import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  commentsCount: { type: Number, default: 0 }
}, { timestamps: true });

const Idea = mongoose.model("Idea", ideaSchema);
export default Idea;
