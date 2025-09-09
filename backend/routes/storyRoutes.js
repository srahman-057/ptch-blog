import express from "express";
import {createStory, getStoryAll, getStorySingle, updateStory, deleteStory} from "../controllers/storyController.js"

const router = express.Router();

router.post("/", createStory);
router.get("/", getStoryAll);
router.get("/:id", getStorySingle);
router.put("/:id", updateStory);
router.delete("/:id", deleteStory);

export default router;