const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const fileupload = require("express-fileupload");
const connect = mongoose.connection;

app.use(express.urlencoded());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/uploads", express.static("uploads"));

app.use(
  fileupload({
    createParentPath: true,
  })
);
app.listen(process.env.PORT || 8080, () => console.log("Server running"));

mongoose.connect("mongodb://localhost:27017/online-cafe", {
  useNewUrlParser: true,
});
connect.on("open", () => console.log("Database Connted"));

app.use("/products", require("./routers/product"));
app.use("/user", require("./routers/user"));
app.use("/order", require("./routers/order"));
