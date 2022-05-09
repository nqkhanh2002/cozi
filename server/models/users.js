import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    coziPoints: {
        type: Number,
        default: 0,
    },
    connections: [String],
});

export default mongoose.model('Users', userSchema);