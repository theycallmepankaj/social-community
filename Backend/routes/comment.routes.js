import express from "express";
import { createComment, getIdeasWithComments } from "../controller/comment.controller.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:ideaId", auth, createComment);
router.get("/:ideaId", getIdeasWithComments);

export default router;
