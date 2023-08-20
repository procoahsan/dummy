import mongoose from "mongoose";

const BookScehma = mongoose.Schema({
    title:{
        type:String,
        required: true,

    },
    author:{
        type: String,
        required: true,
    },
    noOfPages:{
        type:Number,
        required:true
    },
    creationTime:{
        createdAt: 'creation'
    }
})

const Books = mongoose.model('BookSchema' , BookScehma)
export default Books