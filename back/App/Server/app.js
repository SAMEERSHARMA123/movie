const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../Routes/route');
const {connectDB} = require("../Connection/connection")
const cors = require("cors");
const app = express();

connectDB();
app.use(express.json());
app.use(cors({origin: "https://movie-1-y02o.onrender.com", credentials:true}));

app.use('/api/users', userRoutes);

app.get("/",(req,res)=>{
  res.send("server is running...")
})


const PORT = 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

