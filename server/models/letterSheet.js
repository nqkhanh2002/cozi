import mongoose from "mongoose";

const letterSchema = mongoose.Schema({
    from: String,
    dateCreated: {
        type: Date,
        default: new Date(),
    },
    title: String,
    body: String,
    to: String,
    dedicated: {
        type: Boolean,
        default: false,
    }
});

const LetterSheet = mongoose.model('LetterTank', letterSchema);

export default LetterSheet;