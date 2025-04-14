const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  watch: { type: String, required: true },
  date: { type: String, required: true }, // or Date type if you're saving as date
});

module.exports = mongoose.model("Booking", bookingSchema);
