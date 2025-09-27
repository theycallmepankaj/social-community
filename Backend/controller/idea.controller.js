import Idea from "../model/idea.model.js";



export const createIdea = async (req, res) => {
  try {
    const idea = await Idea.create({ ...req.body, user: req.user.id });
    res.status(201).json({ message: "Idea Post Successfully..", idea });
  } catch (err) {
    res.status(500).json({});
  }
};

// export const createIdea = async (req, res) => {
//   try {
//     const idea = await Idea.create({ ...req.body, user: req.user.id });
//     res.status(201).json(idea);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

export const getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find()
      .populate("user", "username")
      .populate({
        path: "comments",
        populate: { path: "user", select: "username" }
      });
    // .sort({ createdAt: -1 });
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id).populate("user", "username");
    res.json(idea);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
