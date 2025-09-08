import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import storyRoutes from "./routes/storyRoutes.js";

// Init
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Security
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Body
app.listen(PORT, () => {
    console.log("The server is now running on port " + PORT);
});

app.get("/", (req,res) => {
    res.send("Blog Initialization");
    console.log("Blog Initialization");
});

app.use("/api/stories",storyRoutes);