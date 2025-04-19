const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    posterUrl: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    downloadLink:{type:String}
});

const getModelByCollection = (collectionName) =>
    mongoose.models[collectionName] || mongoose.model(collectionName, movieSchema, collectionName);
  
  module.exports = getModelByCollection;