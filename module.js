import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Data = mongoose.model("Whatsapp", schema);

export default Data;
