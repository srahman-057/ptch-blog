import express from "express";
import {getStory, createStory} from "../controllers/storyController.js"

const router = express.Router();

router.get("/", getStory);
router.post("/", createStory);

export default router;