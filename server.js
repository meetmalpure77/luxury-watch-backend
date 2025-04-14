const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();  // To load environment variables from .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // To parse JSON bodies

// Import Routes
const bookingRoutes = require("./routes/bookings"); // Make sure the path is correct
app.use("/api/bookings", bookingRoutes); // Define API path for bookings

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    // Start the server after successful MongoDB connection
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.log("MongoDB connection error:", err));
