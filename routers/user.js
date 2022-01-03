const express = require("express");
const router = express.Router();
const UserModel = require("../schema/userSchema");

router //* CREACT NEW USER [POST]
  .route("/")
  .post((req, res) => {
    const user = UserModel({
      NAME: "adad",
      EMAIL: "adad",
      PASSWORD: "adad",
      ADDRESS: "adad",
    });

    user.save((err, result) => {
      if (err) res.send(err);
      res.send(result);
    });

    res.send("post");
  });

router
  .route("/:id")
  .get(async (req, res) => {
    //* GET USER BY ID [GET -> ID]
    try {
      const user = await UserModel.findById(req.params.id);
      res.json(user);
    } catch (err) {
      res.send("Got Err " + err);
    }
  })
  .patch(async (req, res) => {
    //* PATCH USER BY ID [PATCH -> ID]

    try {
      const updateUser = {
        NAME: req.body.NAME,
        EMAIL: req.body.EMAIL,
        ADDRESS: req.body.ADDRESS,
      };
      const user = await UserModel.findByIdAndUpdate(req.params.id, updateUser);
      res.send(user);
    } catch (err) {
      res.send("Got Err " + err);
    }
  })
  .delete(async (req, res) => {
    //* DELETE USER BY ID [DELETE -> ID]
    try {
      const user = await UserModel.findById(req.params.id);
      user.remove();
      res.json("Deleted");
    } catch (err) {
      res.send("Got Err " + err);
    }
  });

module.exports = router;
