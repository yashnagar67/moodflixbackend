const mongoose = require("mongoose");

const myStorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    posterUrl: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true }
}, { collection: "mystory" });

const MyStory = mongoose.model("MyStory", myStorySchema);
module.exports = MyStory;

