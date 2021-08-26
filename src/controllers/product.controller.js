

const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");



router.get("/home", function (req, res) {
  return res.render("products/homePage");
});


router.get("/productpage", function (req, res) {
    return res.render("products/allSofasPage");
});

router.get("/productinfo", function (req, res) {
    return res.render("products/productInfo");
});
router.get("/cart", function (req, res) {
    return res.render("products/cartPage");
});
router.get("/payment", function (req, res) {
    return res.render("products/paymentpage"); 
});
router.get("/success", function (req, res) {
    return res.render("products/successPage"); 
});
router.get("/aboutus", function (req, res) {
    return res.render("products/footerAboutPage"); 
});

router.get("/signup", function (req,res){
    return res.render("products/signUpPage");
});



router.post("", async function (req, res) {
 
  const product = await Product.create(req.body);

  return res.send(product);
});

router.get("/", function (req, res) {
 
     Product.find({}, function(err,products){
        res.render("products/allSofasPage",{
            products:products,
          
        }); 
     }).lean().exec();
  
//   const title = "welcome to goa "
    // return res.render("products/allSofasPage",{
    //     products:products,
    //     title:title
    // });

  });

  

// router.get("", async function (req, res) {
//   const users = await User.find().lean().exec();
//   const pageTitle = "Welcome to Users page";

//   // return res.send(users);
//   return res.render("users/allUsers", {
//     users: users,
//     pageTitle,
//   });
// });

module.exports = router;
