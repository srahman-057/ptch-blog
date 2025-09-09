import { neon } from '@neondatabase/serverless';
import dotenv from "dotenv";

// Connection
dotenv.config();
const sql = neon(process.env.DATABASE_URL);

////////////////////////// CRUD //////////////////////////////

// CREATE
export const createStory = async (req, res) => {
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
export const getStoryAll = async (req, res) => {
    try{
        const queryResult = await sql.query(`SELECT * FROM stories`);
        console.log("Query Successful");
        res.status(200).json({ status: "success", data: queryResult});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: "Failure", data: "None" });
    }
};

export const getStorySingle = async (req, res) => {
    try{
        const {id} = req.params;
        const queryResult = await sql`
            SELECT * FROM stories
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

// UPDATE
export const updateStory = async (req, res) => {
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
export const deleteStory = async (req, res) => {
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