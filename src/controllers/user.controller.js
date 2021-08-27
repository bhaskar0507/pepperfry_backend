const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.get("/login", function (req, res) {
 return res.render("users/login_page") 
  
});

 
router.get("/signup", function (req,res){
  return res.render("users/signUpPage");
});

router.get("/home", function (req, res) {
  return res.render("products/homePage");
});

router.post("", async function (req, res) {
  
  const user = await User.create({
    "first_name": req.body.uname,
    "last_name": req.body.num,
    "email": req.body.mail,
    "password": req.body.psw,
  });

  return res.status(200);
});

router.get("", async function (req, res) {
  const user = await User.find().lean().exec();
  return res.send(user);
});

module.exports = router;
