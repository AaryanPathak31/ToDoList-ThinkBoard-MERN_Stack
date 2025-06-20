import Note from '../models/Note.js';


export async function getAllNotes(req, res){
    try {
        const notes = await Note.find().sort({createdAt:-1}); // <-- FIXED: createdAt
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAll Notes controller", error);
        res.status(500).json({ message: "Error fetching notes"});
    }
}

export async function nodeCreated (req, res){
    try {
        const { title, content } = req.body;
        const note = new Note({
            title,
            content
        });
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in noteCreated controller", error);
        res.status(500).json({ message: "Error creating note" }); 
        
    }
    
}

export async function getNotesByID(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.json(note);
    } catch (error) {
        console.error("Error in getNotesByID controller", error);
        res.status(500).json({ message: "Error fetching note" });
    }
};

export async function noteUpdate(req, res) {
    try {
        const {title,content}=req.body
        const noteUpdate = await Note.findByIdAndUpdate(req.params.id,
            {title,content},
        {
            new:true,
        }
    );   
        res.status(200).json({message:"Note updated successfully!"});
    } catch (error) {
        console.error("Error in noteUpdate controller", error);
        res.status(500).json({ message: "Error updating note" });
        
    }

}
export async function noteDelete(req, res)  {
    try {
        const noteDelete = await Note.findByIdAndDelete(req.params.id);
        if (!noteDelete) {
            return res.status(404).json({ message: "Note not found" });
        };
        res.status(200).json({message: "Note deleted successfully!"});
    } catch (error) {
        console.error("Error in noteDelete controller", error);
        res.status(500).json({ message: "Error deleting note" });
        
    }
}