import Letters from '../models/letters.js';
import mongoose from 'mongoose';

export const getLetters = async (req, res) => { 
    try {
        const letters = await Letters.find();
        
        res.status(200).json(letters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLetter = async (req, res) => {
    const letter = req.body;

    const newLetters = new Letters({ ...letter, creator: req.userId });

    try {
        await newLetters.save();

        res.status(201).json(newLetters);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateLetter = async (req, res) => {
    const { id } = req.params;
    const letter = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No letter with id: ${id}`);

    const updatedLetter = { ...letter, _id: id };

    await Letters.findByIdAndUpdate(id, updatedLetter, { new: true });

    res.json(updatedLetter);
}

export const deleteLetter = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No letter with id: ${id}`);

    await Letters.findByIdAndRemove(id);

    res.json({ message: "Letter deleted successfully." });
}