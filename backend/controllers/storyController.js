import { neon } from '@neondatabase/serverless';
import dotenv from "dotenv";

// Connection
dotenv.config();
try{
    const sql = neon(process.env.DATABASE_URL);
    console.log("Connection Successful");
}catch(err){
    console.log(err);
}

// Select all stories
async function querySelectAll() {
    try{
        const result = await sql`SELECT * FROM stories`;
        console.log("Query Successful");
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

// Select specific story

// Insert story

// Update story

// Delete story


export const getStory = async (req, res) => {
    querySelectAll();
    res.send("GET xyz story");
};
export const createStory = async (req, res) => {
    res.send("POST xyz story");
};