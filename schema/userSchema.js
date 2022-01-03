const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  NAME: { type: String, required: true },
  EMAIL: { type: String, required: true },
  PASSWORD: { type: String, required: true },
  ADDRESS: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
