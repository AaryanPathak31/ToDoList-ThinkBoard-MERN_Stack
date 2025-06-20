import express from 'express';
import { getAllNotes, nodeCreated, noteDelete, noteUpdate,getNotesByID } from '../controllers/notesController.js';

const router = express.Router();

router.get("/", getAllNotes );
router.get("/:id", getNotesByID); // Assuming you want to fetch a specific note by ID
router.post("/", nodeCreated);
router.put("/:id", noteUpdate);
router.delete("/:id", noteDelete);

export default router;


