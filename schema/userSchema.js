const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  NAME: { type: String, required: true },
  EMAIL: { type: String, required: true },
  PASSWORD: { type: String, required: true },
  ADDRESS: { type: String, required: true },
  CART: { type: Array, required: false },
  ORDER: { type: Array, required: false },
});

module.exports = mongoose.model("User", userSchema);
