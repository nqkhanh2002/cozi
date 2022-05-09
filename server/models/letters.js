import mongoose from "mongoose";

const letterSchema = mongoose.Schema({
    creator: String,
    from: String,
    dateCreated: {
        type: Date,
        default: new Date(),
    },
    title: String,
    body: String,
    to: String,
});

export default mongoose.model('Letters', letterSchema);