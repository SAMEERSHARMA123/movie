const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../Routes/route');
const {connectDB} = require("../Connection/connection")
const cors = require("cors");
const app = express();

connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);


const PORT = 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

