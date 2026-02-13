import { Request, Response } from 'express';
import { neon } from '@neondatabase/serverless';
import dotenv from "dotenv";

// Connection
dotenv.config();
let createStory, getStoryAll, getStorySingle, getAllCategories, updateStory, deleteStory;

if(!process.env.DATABASE_URL){
    console.error("Error: Database URL not set.");
}
else{
    const sql = neon(process.env.DATABASE_URL);

////////////////////////// CRUD //////////////////////////////

// CREATE
createStory = async (req: Request, res: Response)  => {
    const { title, content } = req.body;
    try{
        const queryResult = await sql`
            INSERT INTO stories(title,content) 
            VALUES(${title},${content})
            RETURNING *
            `;

        console.log("Story added.", queryResult);
        res.status(201).json({ status: "success", inserted_data: queryResult});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: "Failure", data: "None" });
    }    
};

// READ
getStoryAll = async (req: Request, res: Response) => {
    try{
        const queryResult = await sql.query(`
            SELECT id, title, date, image, category, short_content 
            FROM stories
            `);
        console.log("Query Successful");
        res.status(200).json({ status: "success", data: queryResult});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: "Failure", data: "None" });
    }
};

getStorySingle = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const queryResult = await sql`
            SELECT id, title, date, image, category, content,content_images,image_strings,caption_strings
            FROM stories
            WHERE id=${id}
            `;

        console.log("Query Successful");
        res.status(200).json({ status: "success", data: queryResult});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: "Failure", data: "None" });
    }    
};

getAllCategories = async (req: Request, res: Response) => {
    try{
        const queryResult = await sql`
            SELECT *
            FROM categories
            `;

        console.log("Query Successful");
        res.status(200).json({ status: "success", data: queryResult});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: "Failure", data: "None" });
    }    
};

// UPDATE
updateStory = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const {title, content} = req.body;

        const queryResult = await sql`
            UPDATE stories
            SET title=${title}, content=${content}
            WHERE id=${id}
            RETURNING *
            `;

        console.log("Query Successful");
        res.status(200).json({ status: "success", data: queryResult});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: "Failure", data: "None" });
    }    
};

// DELETE
deleteStory = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const queryResult = await sql`
            DELETE FROM stories
            WHERE id=${id}
            `;

        console.log("Query Successful");
        res.status(200).json({ status: "success", data: "deleted"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: "Failure", data: "None" });
    }    
};


}

export { createStory, getStoryAll, getStorySingle, getAllCategories, updateStory, deleteStory }

