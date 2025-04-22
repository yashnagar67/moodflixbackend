const express = require('express');
const axios = require('axios');
require('dotenv').config();
const getModelByCollection = require('../models/thrillemodel');
// const fetchdl=require('../controllers/fetchUrlController')
const cors = require('cors');

const router = express.Router();
const OMDB_API_KEY = process.env.OMDB_API_KEY;

// Create a map of collection names to their models - easier to manage and extend
const models = {
  trendings: getModelByCollection('Tradings'),
  toprated: getModelByCollection('topRated'),
  ThrillerMystery: getModelByCollection('Thriller & Mystery'),
  bollywood: getModelByCollection('Bollywood'),
  action: getModelByCollection('action'),
  NewReleases: getModelByCollection('NewReleases'),
 Popular: getModelByCollection('Popular'),
 WebSeries: getModelByCollection('WebSeries'),
 HollywoodDubbed: getModelByCollection('HollywoodDubbed'),
 KidsAndFamily: getModelByCollection('KidsAndFamily'),
 SciFiAndFantasy: getModelByCollection('SciFiAndFantasy'),
 UserFavorites: getModelByCollection('UserFavorites'),
 HorrorNight: getModelByCollection('Horrornight'),
Recommended: getModelByCollection('Recommended'),
massmania: getModelByCollection('massmania'),
massmania2: getModelByCollection('massmania2')

  
};

// External API endpoint
router.get('/movies', async (req, res) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?s=action&apikey=${OMDB_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('OMDB API error:', error.message);
    res.status(500).json({ error: 'Error fetching movies from external API' });
  }
});

// Generic endpoint for all collections - reduces code duplication
router.get('/:category', async (req, res) => {
  const { category } = req.params;
  const model = models[category];
  
  if (!model) {
    return res.status(404).json({ error: `Category '${category}' not found` });
  }
  
  try {
    const movies = await model.find();
    
    if (movies.length === 0) {
      return res.status(404).json({ message: `No ${category} movies found` });
    }
    
    res.status(200).json({ movies });
  } catch (err) {
    console.error(`Error fetching ${category} movies:`, err.message);
    res.status(500).json({ error: err.message });
  }
});
// router.get('/movies', async (req, res) => {
//   try {
//     const response = await axios.get(`https://www.omdbapi.com/?s=action&apikey=${OMDB_API_KEY}`);
//     res.json(response.data);
//   } catch (error) {
//     console.error('OMDB API error:', error.message);
//     res.status(500).json({ error: 'Error fetching movies from external API' });
//   }
// });

// Generic endpoint for all collections - reduces code duplication



// Keep the specific endpoints for backward compatibility and direct access
// These now use the common function to reduce duplication
// Object.keys(models).forEach(category => {
//   router.get(`/${category}`, async (req, res) => {
//     try {
//       const movies = await models[category].find();
      
//       if (movies.length === 0) {
//         return res.status(404).json({ message: `No ${category} movies found` });
//       }
      
//       res.status(200).json({ movies });
//     } catch (err) {
//       console.error(`Error fetching ${category} movies:`, err.message);
//       res.status(500).json({ error: err.message });
//     }
//   });
// });

module.exports = router;