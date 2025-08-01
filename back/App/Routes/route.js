const express = require('express');
const router = express.Router();
const { registerUser, loginUser,searchMovie } = require('../Controllers/controller');

router.post('/register', registerUser);    
router.post('/login', loginUser); 
router.get('/search', searchMovie);          

module.exports = router;
