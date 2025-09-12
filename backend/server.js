import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import storyRoutes from "./routes/storyRoutes.js";
import { aj } from "./lib/arcjet.js"

// Init
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Security
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(async (req, res, next) =>{
    try{
        const decision = await aj.protect(req, {
            requested: 1,
        });

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                res.status(429).json({ error: "Request Limit Exceeded." });
            }
            else if(decision.reason.isBot()){
                res.status(403).json({ error: "Bot Access Not Allowed" });
            }
            else{
                res.status(403).json({ error: "Forbidden" });
            }
            return
        }

        next();
    }
    catch(err){
        console.log("Problem Detected By Arcjet. ", error);
        next(error);
    }
});

// Body
app.listen(PORT, () => {
    console.log("The server is now running on port " + PORT);
});

app.get("/", (req,res) => {
    res.send("Blog Initialization");
    console.log("Blog Initialization");
});

app.use("/api/stories",storyRoutes);