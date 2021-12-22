const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  NAME: { type: String, required: true },
  IMAGE: { type: String, required: true },
  PRICE: { type: String, required: true },
  DEC: { type: String, required: true },
  TAG: { type: Array, required: true },
});

module.exports = mongoose.model("Product", productSchema);
