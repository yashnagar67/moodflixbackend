const mongoose = require("mongoose");

const thrillerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    posterUrl: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true }
}, { collection: "Bollywood" });

const Thriller = mongoose.model("Bollywood", thrillerSchema);
module.exports = Thriller;
