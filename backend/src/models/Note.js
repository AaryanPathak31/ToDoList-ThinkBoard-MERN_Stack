import mongoose from "mongoose";

//Create a schema for the Note model
//create a model based on that schema

const noteSchema = new mongoose.Schema({
    title:{ 
        type: String,  
        required: true 
    },
    content: {
        type: String,
        required: true
    },
    
    }, {timestamps: true} // Automatically add createdAt and updatedAt fields
); 

const Note = mongoose.model("Note", noteSchema); // Create the Note model
export default Note; // Export the Note model for use in other parts of the application