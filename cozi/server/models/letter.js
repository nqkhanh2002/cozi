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
});

const Letter = mongoose.model('Letter', letterSchema);

export default Letter;