import Comment from "../model/comment.model.js";
import Idea from "../model/idea.model.js";



export const createComment = async (req, res) => {
  try {
    const comment = await Comment.create({ ...req.body, user: req.user.id });
    
    // update comment count on idea
    const idea = await Idea.findById(req.body.idea);
    if (idea) {
      idea.commentsCount += 1;
      await idea.save();
    }

    res.status(201).json({message:"comment post Successfully",comment});
  } catch (err) {
    res.status(500).json({errorMessa:"internal server Error"});
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ idea: req.params.ideaId })
      .populate("user", "username");
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
