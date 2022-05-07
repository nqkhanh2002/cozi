import Letter from "../models/letter.js";

export const getLetters = async (req, res) => {
    try {
        const letter = await Letter.find();

        console.log(letter);

        res.status(200).json(letter);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLetter = async (req, res) => {
    const letter = req.body;

    const newLetter = new Letter(letter);

    try {
        await newLetter.save();

        res.status(201).json(newLetter);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}