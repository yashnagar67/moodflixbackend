const mongoose = require("mongoose");

const trendingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    posterUrl: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true }
}, { collection: "Tradings" }); // Ye ensure karega ki data 'trandings' collection me hi jaye

const Trending = mongoose.model("Trending", trendingSchema);
module.exports = Trending;
