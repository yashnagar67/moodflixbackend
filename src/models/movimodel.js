const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  poster: { type: String, required: true }, // URL of the movie poster
  rating: { type: Number, required: true },
  isTrending: { type: Boolean, default: false }, // Mark trending movies
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
