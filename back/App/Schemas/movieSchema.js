const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  
  genres: {
    type: [String],
    enum: ['Action', 'Drama', 'Comedy', 'Romance', 'Thriller', 'Sci-Fi', 'Horror', 'Animation', 'Fantasy']
  },
  duration: {
    type: Number, 
    
  },
  language: {
    type: String,
    default: 'English'
  },
  rating: {
    type: Number
  },

  trailerUrl: {
    type: String 
  },
 
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
