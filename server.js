const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require('./route');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
require('dotenv').config();

// MongoDB Atlas Connection (replace DB_NAME with your DB)
mongoose
  .connect(process.env.MONGO_DBURL)
  .then(() => {
    console.log("MongoDB connected ✅");
  })
  .catch((err) => {
    console.error("MongoDB connection failed ❌:", err);
  });


// Routes
app.use("/api", contactRoutes);

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
