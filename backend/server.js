import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// Init
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Security
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.listen(PORT, () => {
    console.log("The server is now running on port " + PORT);
})

app.get("/", (req,res) => {
    res.send("Blog Initialization")
})