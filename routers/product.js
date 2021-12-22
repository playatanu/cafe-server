const express = require("express");
const router = express.Router();
const ProductModel = require("../schema/productSchema");
const file_upload = require("../functions/file_upload");

router
  .route("/")
  .get(async (req, res) => {
    //* GET ALL PRODUCT [GET]
    try {
      const products = await ProductModel.find();
      res.json(products);
    } catch (err) {
      res.send("Got Err " + err);
    }
  })
  .post((req, res) => {
    //* POST NEW PRODUCT [POST]

    var productImage = "";
    if (!req.files) {
      productImage = req.body.IMAGE;
    } else {
      productImage = file_upload(req.files);
    }

    const product = ProductModel({
      NAME: req.body.NAME,
      DEC: req.body.DEC,
      TAG: req.body.TAG,
      PRICE: req.body.PRICE,
      IMAGE: productImage,
    });

    product.save((err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });

router
  .route("/:id")
  .get(async (req, res) => {
    //* GET PRODUCT BY ID [GET]
    try {
      const product = await ProductModel.findById(req.params.id);
      res.json(product);
    } catch (err) {
      res.send("Got Err " + err);
    }
  })
  .patch(async (req, res) => {
    //* PATCH PRODUCT BY ID [PATCH]

    var productImage = "";
    if (!req.files) {
      productImage = req.body.IMAGE;
    } else {
      productImage = file_upload(req.files);
    }

    try {
      const updateProduct = {
        NAME: req.body.NAME,
        DEC: req.body.DEC,
        TAG: req.body.TAG,
        PRICE: req.body.PRICE,
        IMAGE: productImage,
      };
      const product = await ProductModel.findByIdAndUpdate(
        req.params.id,
        updateProduct
      );
      res.send(product);
    } catch (err) {
      res.send("Got Err " + err);
    }
  })
  .delete(async (req, res) => {
    //* DELETE PRODUCT BY ID [DELETE]
    try {
      const product = await ProductModel.findById(req.params.id);
      product.remove();
      res.json("Deleted");
    } catch (err) {
      res.send("Got Err " + err);
    }
  });

module.exports = router;
