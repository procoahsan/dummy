import Books from "../models/booksSchema";
import express from ' express'
const router = express.router


export const CreateBooks = async (req,res) =>{

        const body = req.body
        const BookCreate = await new Books(body)
        BookCreate.save().then(()=> res.json(BookCreate)).catch((err)=> res.status(400).json('err', err))

    
    
}