const mongoose = require("mongoose");

const topRatedSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    posterUrl: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true }
}, { collection: "topRated" });

const TopRated = mongoose.model("TopRated", topRatedSchema);
module.exports = TopRated;