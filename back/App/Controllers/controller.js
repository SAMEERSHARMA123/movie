const User = require('../Schemas/schema');
const Movie = require('../Schemas/movieSchema');
const bcrypt = require('bcrypt');

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  
  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();

    const user = new User({
      username,
      email,
      password: hashedPassword,
      otp
    });

    await user.save();

    res.status(201).json({
      message: 'User registered. Please verify OTP.',
      email: user.email,
      otp: otp  
    });

  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.isVerified) {
      return res.status(401).json({ message: 'Please verify OTP first' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    res.status(200).json({ message: 'Login successful', email: user.email });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


const searchMovie = async (req, res) => {
    console.log(req.query);
    
  const { name } = req.query; 
  try {
    if (!name) {
      return res.status(400).json({ message: 'Movie name is required in query' });
    }

    const movies = await Movie.find({
      title: { $regex: name, $options: 'i' }
    });

    res.status(200).json(movies);

  } catch (err) {
    console.error('Search Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { registerUser, loginUser, searchMovie};
