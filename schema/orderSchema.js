const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  STATUS: { type: String, required: false },
  ORDERS: { type: Array, required: true },
  USER_ID: { type: String, required: true },
  PAY_ID: { type: String, required: true },
  DATE: { type: Date, required: false },
  ADDRESS: { type: String, required: true },
  PHONE: { type: String, required: true },
  NAME: { type: String, required: true },
  TOTAL: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
