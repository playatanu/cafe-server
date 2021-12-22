const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  STATUS: { type: String, required: true },
  ORDERS: { type: Array, required: true },
  USER_ID: { type: String, required: true },
  PAY_ID: { type: String, required: true },
  DATE: { type: Date, required: false },
});

module.exports = mongoose.model("Order", orderSchema);
