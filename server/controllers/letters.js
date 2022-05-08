import LetterSheet from '../models/letterSheet.js';

export const getLetters = async (req, res) => { 
    try {
        const letters = await LetterSheet.find();
        
        res.status(200).json(letters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getLetter = async (req, res) => { 
    const { id } = req.params;

    try {
        const letter = await letterSheet.findById(id);
        
        res.status(200).json(letter);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLetter = async (req, res) => {
    const letter = req.body;

    const newLetterSheet = new LetterSheet(letter);

    try {
        await newLetterSheet.save();

        res.status(201).json(newLetterSheet);
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

    await letterSheet.findByIdAndUpdate(id, updatedLetter, { new: true });

    res.json(updatedLetter);
}

export const deleteLetter = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No letter with id: ${id}`);

    await letterSheet.findByIdAndRemove(id);

    res.json({ message: "Letter deleted successfully." });
}