import express from "express";
import { createComment, getComments } from "../controller/comment.controller.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, createComment);
router.get("/:ideaId", getComments);

export default router;
