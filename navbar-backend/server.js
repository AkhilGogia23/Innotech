const express = require("express");


const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables


const app = express();

app.use(cors()); // Allow requests from different origins
app.use(express.json()); // Parse JSON body

// Debugging the MONGO_URI environment variable
console.log("MONGO_URI:", process.env.MONGO_URI); 
const authRoutes = require("./Routes/authRoutes");
app.use("/api/auth", authRoutes);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
