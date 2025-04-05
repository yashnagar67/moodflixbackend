const express = require('express');
const axios = require('axios');
require('dotenv').config();
const movieModel = require('../models/movimodel'); // Import Movie model
const trandings = require('../models/trendings'); // Import Trending model
const mystoryModel = require('../models/mystoryModel'); // Import MyStory model
const thrillerModel = require('../models/thrillerModel'); // Import Thriller model
const topRatedModel = require('../models/topRatedModel'); // Import TopRated model
const bollywoodModel = require('../models/BollywoodModel'); // Import Bollywood model
const cors = require('cors');

const router = express.Router();
const OMDB_API_KEY = process.env.OMDB_API_KEY; // Store API key in .env

// API to get movies
router.get('/movies', async (req, res) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?s=action&apikey=${OMDB_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching movies' });
    }
});
router.get('/trendings', async (req, res) => {
    try {
        const trendingMovies = await trandings.find().collection('Tradings'); // Trending collection se fetch
        if (trendingMovies.length === 0) {
            return res.status(404).json({ message: "No trending movies found" });
        }
        res.status(200).json({ movies: trendingMovies });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/toprated', async (req, res) => {
    try {
        const trendingMovies = await topRatedModel.find(); // Trending collection se fetch
        if (trendingMovies.length === 0) {
            return res.status(404).json({ message: "No trending movies found" });
        }
        res.status(200).json({ movies: trendingMovies });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/thriller', async (req, res) => {
    try {
        const trendingMovies = await thrillerModel.find(); // Trending collection se fetch
        if (trendingMovies.length === 0) {
            return res.status(404).json({ message: "No trending movies found" });
        }
        res.status(200).json({ movies: trendingMovies });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/bollywood', async (req, res) => {
    try {
        const trendingMovies = await bollywoodModel.find(); // Trending collection se fetch
        if (trendingMovies.length === 0) {
            return res.status(404).json({ message: "No trending movies found" });
        }
        res.status(200).json({ movies: trendingMovies });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/mystory', async (req, res) => {
    try {
        const trendingMovies = await mystoryModel.find(); // Trending collection se fetch
        if (trendingMovies.length === 0) {
            return res.status(404).json({ message: "No trending movies found" });
        }
        res.status(200).json({ movies: trendingMovies });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;
