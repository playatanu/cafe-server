const express = require("express");
const router = express.Router();
const OrderModel = require("../schema/orderSchema");
const UserModel = require("../schema/userSchema");

router
  .route("/")
  .get(async (req, res) => {
    //* GET ALL ORDER [GET]
    try {
      const order = await OrderModel.find();
      res.json(order);
    } catch (err) {
      res.send("Got Err " + err);
    }
  })
  .post(async (req, res) => {
    //* POST NEW ORDER [POST]

    const order = OrderModel({
      TOTAL: req.body.TOTAL,
      ORDERS: req.body.ORDERS,
      USER_ID: req.body.USER_ID,
      PAY_ID: req.body.PAY_ID,
      DATE: req.body.DATE,
      ADDRESS: req.body.ADDRESS,
      PHONE: req.body.PHONE,
      NAME: req.body.NAME,
    });

    order.save((err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });

router
  .route("/:id")
  .get(async (req, res) => {
    //* GET ORDER BY ID [GET]
    try {
      const order = await OrderModel.findById(req.params.id);
      res.json(order);
    } catch (err) {
      res.send("Got Err " + err);
    }
  })
  .patch(async (req, res) => {
    //* PATCH ORDER BY ID [PATCH]

    try {
      const updateOrder = {
        STATUS: req.body.STATUS,
      };
      const order = await OrderModel.findByIdAndUpdate(
        req.params.id,
        updateOrder
      );
      res.send(order);
    } catch (err) {
      res.send("Got Err " + err);
    }
  });

module.exports = router;
