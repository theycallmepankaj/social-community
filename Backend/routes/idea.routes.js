import express from "express";
import { createIdea, getIdeas, getIdea } from "../controller/idea.controller.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, createIdea);
router.get("/", getIdeas);
router.get("/:id", getIdea);

export default router;

