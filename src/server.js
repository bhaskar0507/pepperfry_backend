const path = require("path");
const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");

const productController = require("./controllers/product.controller");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

app.use("/users", userController);

app.use("/products", productController); 

app.listen(2345, async () => {
  await connect();
  console.log("Listening on port 2345"); 
});
