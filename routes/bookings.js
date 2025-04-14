const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const { name, email, watch, date } = req.body;

    // Optional: validate fields here
    if (!name || !email || !watch || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = new Booking({ name, email, watch, date });
    await newBooking.save();
    res.status(201).json({ message: "Booking successful" });
  } catch (error) {
    console.error("Error saving booking:", error); // 💥 LOG the actual error
    res.status(500).json({ message: "Something went wrong on the server" });
  }
});

module.exports = router;
