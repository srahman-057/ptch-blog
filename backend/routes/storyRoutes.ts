import { Router } from "express";
import {createStory, getStoryAll, getStorySingle, updateStory, deleteStory, getAllCategories} from "../controllers/storyController.js"

// const router = express.Router();
const router = Router();

router.post("/", createStory);
router.get("/", getStoryAll);
router.get("/categories", getAllCategories);
router.get("/:id", getStorySingle);
router.put("/:id", updateStory);
router.delete("/:id", deleteStory);

export default router;