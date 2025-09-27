import Comment from "../model/comment.model.js";
import Idea from "../model/idea.model.js";



export const createComment = async (req, res) => {
  try {
    const { ideaId } = req.params;
    const { text } = req.body;
    const userId = req.user.id; // comes from auth middleware

    // create comment
    const comment = new Comment({ text, user: userId, idea: ideaId });
    await comment.save();

    // push comment to idea
    await Idea.findByIdAndUpdate(ideaId, {
      $push: { comments: comment._id },
      $inc: { commentsCount: 1 }
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIdeasWithComments = async (req, res) => {
  try {
    const ideas = await Idea.find()
      .populate("user", "username")
      .populate({
        path: "comments",
        populate: { path: "user", select: "username" }
      });

    res.json(ideas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
